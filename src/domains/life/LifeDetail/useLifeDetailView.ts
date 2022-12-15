import { useFindOneLifeById } from "@/data/apis/life/useLifeApiHooks";
import { useRouter } from "next/router";
import { getTimeFromNow } from "@/utils/moment/DateMoment";

export const useLifeDetailView = () => {
  const router = useRouter();
  const lifeId = router.query?.lifeId + "";

  const { data, isLoading, isError, error } = useFindOneLifeById(lifeId);

  const date = getTimeFromNow(data?.createdAt!!);

  if (isError) {
    console.log(error);
  }

  if (!data) {
    return {
      fetchState: {
        isLoading: isLoading,
        isError: isError,
      },

      result: {
        title: "",
        date: "",
        viewCount: 0,
        content: "",
        attachments: [],
        link: "",
      },
    };
  }

  return {
    fetchState: {
      isLoading: isLoading,
      isError: isError,
    },

    result: {
      title: data.title,
      date: date,
      viewCount: data.viewCount,
      content: data.content,
      attachments: data.attachments,
      link: data.link,
    },
  };
};

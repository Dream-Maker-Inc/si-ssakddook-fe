import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import DiaryApiService from "@/data/apis/diary/diary.api";
import { format } from "date-fns";
import PostingApiService from "@/data/apis/diary/diary.api";

export const useUpdateDiaryView = () => {
  const router = useRouter();
  const date = router.query?.date + "";
  const diaryId = router.query?.diaryId + "";

  const [content, setContent] = useState("");
  const [lastDate, setLastDate] = useState("");

  // diary api
  const { data, refetch } = useQuery(
    "find-one-by-diary-id",
    () => PostingApiService.findOneByDiaryId(diaryId),
    {
      onSuccess(data) {
        setContent(data.content);
        setLastDate(
          format(new Date(data.updatedAt), "yyyy년 MM월 dd일 a h시 mm분")
        );
      },
      onError(err) {},
    }
  );

  // tab
  const [isWritingMode, setIsWritingMode] = useState(false);

  //forwardRef 사용 권고
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFieldFocus = () => inputRef.current?.focus();

  // date 변환
  const customaDate = date == "undefined" ? new Date() : new Date(date);
  const titleDate = format(customaDate, "yyyy년 MM월 dd일");

  // update diary
  const { mutate, data: newDiaryData } = useMutation(
    () => DiaryApiService.updateDiary(diaryId, content!!),
    {
      onSuccess: (res) => {
        handleRestate();
        refetch();
      },
      onError: (err) => {
        console.log(newDiaryData);
      },
    }
  );

  // functions
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmitClick = () => {
    mutate();
  };
  const handleEditClick = () => {
    setIsWritingMode(true);
    handleFieldFocus();
  };

  const handleRestate = () => {
    setIsWritingMode(false);
  };

  return {
    tabState: {
      title: titleDate,
      isWritingState: isWritingMode,
      onSubmit: handleSubmitClick,
      onEdit: handleEditClick,
      onRestate: handleRestate,
    },

    diaryState: {
      ref: inputRef,
      value: content,
      onChange: handleContentChange,
      placeholder:
        content === null
          ? "본인 외에는 그 누구도 나의 감정일기를 볼 수 없어요."
          : "",
      lastUpdatedDate: lastDate,
    },
  };
};

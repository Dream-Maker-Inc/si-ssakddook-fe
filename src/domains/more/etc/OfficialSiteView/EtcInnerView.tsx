import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { useRouter } from "next/router";

export const EtcInnerView = () => {
  const router = useRouter();
  const { title, url } = router.query;

  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <DefaultTab category={title + ""} routePath={"recent"} />
      <iframe
        name="I1"
        id="if1"
        width="100%"
        height="100%"
        src={url + ""}
      ></iframe>
    </PlainLayout>
  );
};

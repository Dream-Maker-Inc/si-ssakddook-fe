import { css } from "@emotion/react";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { PreviewItem } from "@/common/components/board/PreviewItem";
import { useLifeView } from "./useLifeView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getTimeFromNow } from "@/utils/moment/DateMoment";

export const LifeView = () => {
  const { fetchState, result, ref } = useLifeView();
  if (fetchState.isLoading)
    return (
      <PlainLayout isBottomMarginNecessary={false}>
        <CircularLoading />
      </PlainLayout>
    );

  if (fetchState.isError) return <div>에러가 발생했습니다.</div>;

  return (
    <PlainLayout isBottomMarginNecessary={true}>
      <DefaultTab category="라이프" routePath={"main"} />
      <div css={sx.root}>
        {result?.pages.map((page, index) => (
          <div key={index} css={sx.item}>
            {page.data.data.items.map((it, index) => (
              <PreviewItem
                key={index}
                id={it.id + ""}
                title={it.title}
                desc={it.content}
                image={it.attachments[0]}
                date={getTimeFromNow(it.createdAt)}
              />
            ))}
          </div>
        ))}
        <div css={sx.target} ref={ref}></div>
      </div>
    </PlainLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  item: css`
    width: 100%;
  `,
  target: css`
    width: 100%;
    height: 1px;
    background-color: transparent;
  `,
};

import { css } from "@emotion/react";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { PreviewItem } from "@/common/components/board/PreviewItem";
import { useLifeView } from "./useLifeView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getDateDiff } from "@/utils/DateDif/DateDiff";

export const LifeView = () => {
  const { fetchState, result, ref } = useLifeView();
  if (fetchState.isLoading)
    return (
      <PlainLayout isBttomMarginNecessary={false}>
        <CircularLoading />
      </PlainLayout>
    );

  if (fetchState.isError) return <div>에러가 발생했습니다.</div>;

  return (
    <PlainLayout isBttomMarginNecessary={true}>
      <DefaultTab category="라이프" />
      <div css={sx.root}>
        {result?.pages.map((page, index) => (
          <div key={index}>
            {page.data.items.map((it, index) => (
              <PreviewItem
                key={index}
                id={it.id + ""}
                title={it.title}
                desc={it.content}
                date={getDateDiff(it.createdAt)}
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
  target: css`
    width: 100%;
    height: 1px;
    background-color: transparent;
  `,
};

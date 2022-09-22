import { css } from "@emotion/react";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { PreviewItem } from "@/common/components/board/PreviewItem";
import { useLifeView } from "./useLifeView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { getDateDiff } from "@/utils/DateDif/DateDiff";

export const LifeView = () => {
  const { fetchState, result } = useLifeView();

  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <CircularLoading />;

  return (
    <PlainLayout>
      <DefaultTab category="라이프" />
      <div css={sx.root}>
        {result?.map((it, index) => (
          <PreviewItem
            key={index}
            id={it.id + ""}
            title={it.title}
            desc={it.content}
            date={getDateDiff(it.createdAt)}
          />
        ))}
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
};

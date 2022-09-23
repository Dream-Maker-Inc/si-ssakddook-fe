import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { PlainTab } from "@/common/components/tab/PlainTab";
import { css } from "@emotion/react";
import { ClickBox } from "../components/ClickBox/ClickBox";
import { useMoreView } from "./useMoreView";

export const MoreView = () => {
  const models = useMoreView();
  return (
    <AppbarLayout>
      <PlainTab category="더보기" />
      <div css={sx.root}>
        {models.map((it, index) => (
          <ClickBox
            key={index}
            title={it.title}
            desc={it.desc}
            iconSrc={it.iconSrc}
            nextButtonState={it.nextButtonState}
            onClickPath={it.onClickPath}
          />
        ))}
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};

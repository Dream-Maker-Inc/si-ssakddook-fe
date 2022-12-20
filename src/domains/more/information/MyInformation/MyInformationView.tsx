import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { css } from "@emotion/react";
import { ClickBox } from "../../components/ClickBox/ClickBox";
import { useMyInformationView } from "./useMyInformationView";

export const MyInformationView = () => {
  const models = useMyInformationView();
  return (
    <AppbarLayout>
      <div css={sx.root}>
        <DefaultTab category="내 정보" routePath={"main"} />
        {models.map((it, index) => (
          <ClickBox
            key={index}
            title={it.title}
            desc={it.desc}
            iconSrc={it.iconSrc}
            nextButtonState={it.nextButtonState}
            onClick={it.onClick}
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

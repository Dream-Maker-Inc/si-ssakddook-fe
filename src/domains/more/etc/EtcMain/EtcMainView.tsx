import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { css } from "@emotion/react";
import { ClickBox } from "../../components/ClickBox/ClickBox";
import { EtcBox } from "../../components/EtcBox/EtcBox";
import { etcModel } from "../../model/MoreModels";

export const EtcMainView = () => {
  return (
    <AppbarLayout>
      <div css={sx.root}>
        <DefaultTab category="기타" />
        {etcModel.map((it, index) => (
          <EtcBox
            key={index}
            title={it.title}
            iconSrc={it.iconSrc}
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

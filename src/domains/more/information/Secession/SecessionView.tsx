import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { css } from "@emotion/react";
import { DescriptionSection } from "./components/DescriptionSection";
import { ImageSection } from "./components/ImageSection";
import { InputPasswordSection } from "./components/InputPasswordSection";
import { SubmitButton } from "./components/SubmitButton";
import { useSecessionView } from "./useSecessionView";

export const SecessionView = () => {
  const { checkboxState, passwordState, buttonState } = useSecessionView();

  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <DefaultTab category="회원 탈퇴" />
      <div css={sx.root}>
        <div css={sx.container}>
          <ImageSection />
          <DescriptionSection
            check={checkboxState.check}
            onChange={checkboxState.onChange}
          />
          <InputPasswordSection
            value={passwordState.value}
            onChange={passwordState.onChange}
            error={passwordState.error}
            helperText={passwordState.helperText}
          />
          <SubmitButton
            disabled={buttonState.disable}
            onClick={buttonState.onClick}
          />
        </div>
      </div>
    </PlainLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px 16px 0 16px;
  `,
  container: css`
    width: 100%;
    height: 100%;

    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};

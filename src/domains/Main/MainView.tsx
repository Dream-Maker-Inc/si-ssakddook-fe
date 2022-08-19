import { MainAppbar } from "@/common/components/appbar/MainAppBar";
import { css } from "@emotion/react";

export const MainView = () => {
  return (
    <div css={sx.root}>
      <MainAppbar />
      <div css={sx.container}></div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
  `,
};

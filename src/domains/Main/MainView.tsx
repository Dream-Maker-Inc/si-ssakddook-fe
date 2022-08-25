import { MainAppbar } from "@/common/components/appbar/MainAppBar";
import { DefaultBottomNavigation } from "@/common/components/bottomNavigation/DefaultBottomNavigation";
import { css } from "@emotion/react";

export const MainView = () => {
  return (
    <div css={sx.root}>
      <MainAppbar />
      <DefaultBottomNavigation />
      <div css={sx.container}></div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 0px 16px 16px 16px;
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

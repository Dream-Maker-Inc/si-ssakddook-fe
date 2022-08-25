import { MainAppbar } from "../appbar/MainAppBar";
import { DefaultBottomNavigation } from "../bottomNavigation/DefaultBottomNavigation";
import { css } from "@emotion/react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div css={sx.container}>
      <MainAppbar />
      {children}
      <DefaultBottomNavigation />
    </div>
  );
}

const sx = {
  container: css`
    width: 100%;
    height: 100%;
  `,
};

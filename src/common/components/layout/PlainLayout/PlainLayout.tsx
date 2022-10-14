import { css } from "@emotion/react";

type LayoutProps = {
  children: React.ReactNode;
  isBottomMarginNecessary?: boolean;
};

export const PlainLayout = ({
  children,
  isBottomMarginNecessary = true,
}: LayoutProps) => {
  return <div css={sx.container(isBottomMarginNecessary)}>{children}</div>;
};

const sx = {
  container: (bottomMargin: boolean) => css`
    width: 100%;
    height: 100%;
    padding: ${bottomMargin ? "50px 0 20px 0" : "50px 0 0 0"};
  `,
};

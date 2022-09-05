import { css } from "@emotion/react";

type LayoutProps = {
  children: React.ReactNode;
  isBttomMarginNecessary?: boolean;
};

export const PlainLayout = ({
  children,
  isBttomMarginNecessary = true,
}: LayoutProps) => {
  return <div css={sx.container(isBttomMarginNecessary)}>{children}</div>;
};

const sx = {
  container: (bottomMargin: boolean) => css`
    width: 100%;
    height: 100%;
    padding: ${bottomMargin ? "50px 0 20px 0" : "50px 0 0 0"};
  `,
};

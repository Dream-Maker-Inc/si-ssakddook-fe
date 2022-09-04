import { css } from "@emotion/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const PlainLayout = ({ children }: LayoutProps) => {
  return <div css={sx.container}>{children}</div>;
};

const sx = {
  container: css`
    width: 100%;
    height: 100%;
    padding: 50px 0 20px 0;
  `,
};

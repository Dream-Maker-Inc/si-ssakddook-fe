import { css } from "@emotion/react";

type LayoutProps = {
  children: React.ReactNode;
  hasCommentWriteSection?: boolean;
};

export const AppbarLayout = ({
  children,
  hasCommentWriteSection = false,
}: LayoutProps) => {
  return <div css={sx.container(hasCommentWriteSection)}>{children}</div>;
};

const sx = {
  container: (hasCommentWriteSection: boolean) => css`
    width: 100%;
    height: 100%;
    padding: ${hasCommentWriteSection ? "50px 0 40px 0" : "50px 0"};
  `,
};

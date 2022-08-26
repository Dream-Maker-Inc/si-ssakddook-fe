import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

export const FloatingButton = () => {
  return (
    <Link href="/community">
      <div css={sx.container}>
        <Image width="24px" height="24px" src="/img/icon-edit.svg" alt="" />
      </div>
    </Link>
  );
};

const sx = {
  container: css`
    position: fixed;
    right: 16px;
    bottom: 66px;

    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #dee7d7;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    z-index: 99;
  `,
};

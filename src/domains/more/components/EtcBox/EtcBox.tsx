import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { EtcBoxProps } from "../../types/MoreType.type";
import ArrowRightIcon from "@/img/more/etc/icon-etc-arrow-right.svg";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const EtcBox = ({ title, iconSrc, onClickPath }: EtcBoxProps) => {
  const router = useRouter();
  const handleMoveUrl = (title: string, url: string) => {
    router.push({
      pathname: RoutePath.OfficialSite,
      query: { title: title, url: url },
    });
  };

  return (
    <div css={sx.root} onClick={() => handleMoveUrl(title, onClickPath)}>
      <div css={sx.container}>
        <Image width="16px" height="16px" src={iconSrc} alt="" />
        <Typography variant="body1" color={"black"}>
          {title}
        </Typography>
      </div>
      <div css={sx.arrow}>
        <Image width="24px" height="24px" src={ArrowRightIcon} alt="" />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 46px;
    padding: 0 16px;
    border-bottom: 1px solid ${LightColor.Gray500};

    position: relative;

    cursor: pointer;

    display: flex;
    align-items: center;
  `,
  container: css`
    display: flex;
    align-items: center;
    gap: 16px;
  `,

  arrow: css`
    position: absolute;
    top: 50%;
    right: 11px;
    transform: translateY(-50%);
  `,
};

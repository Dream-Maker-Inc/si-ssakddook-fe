import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import MainLogo from "@/img/main/logo.svg";
import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";

type DefaultTabProps = {
  category: string;
};

export const PlainTab = ({ category }: DefaultTabProps) => {
  const router = useRouter();
  const setNavigation = useSetRecoilState(NavigationAtom);

  const onMainView = () => {
    setNavigation(RoutePath.Main);
    router.push(RoutePath.Main);
  };

  return (
    <div css={sx.tabContainer}>
      <IconButton onClick={onMainView}>
        <Image width="24px" height="16px" src={MainLogo} alt="logo" />
      </IconButton>
      <Typography variant="h2" lineHeight="1" ml="4px">
        {category}
      </Typography>
    </div>
  );
};

const sx = {
  tabContainer: css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;

    padding-right: 16px;
    padding-left: 8px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,
};

import { CloseButton } from "@/common/components/button/CloseButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import IconNext from "@/img/arrowIcon/icon-button-next.svg";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useIdPasswordSearchView } from "./useIdPasswordSearchView";

export const IdPasswordSearchView = () => {
  const { titleState, idFieldState, pwFieldState } = useIdPasswordSearchView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div>
          <CloseButton />
          <TitleWithDesc title={titleState.title} desc={titleState.desc} />
        </div>

        <div css={sx.searchBoxWrapper}>
          <SearchBox
            title={idFieldState.title}
            desc={idFieldState.desc}
            onClick={idFieldState.onClick}
          />
          <SearchBox
            title={pwFieldState.title}
            desc={pwFieldState.desc}
            onClick={pwFieldState.onClick}
          />
        </div>
      </div>
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

    position: relative;
  `,

  searchBoxWrapper: css`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  boxContainer: css`
    width: 100%;
    height: 86px;

    background-color: #f1f1f1;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    padding: 16px;

    position: relative;

    &:hover {
      background-color: rgba(90, 136, 53, 0.1);
    }
  `,

  img: css`
    position: absolute;
    top: 31px;
    right: 16px;
  `,
};

type SearchBox = {
  title: string;
  desc: string;
  onClick: () => void;
};

const SearchBox = ({ title, desc, onClick }: SearchBox) => {
  return (
    <Button css={sx.boxContainer} onClick={onClick}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
      <div css={sx.img}>
        <Image width="24px" height="24px" src={IconNext} alt="" />
      </div>
    </Button>
  );
};

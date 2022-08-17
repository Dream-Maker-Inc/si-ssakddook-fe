import { CloseButton } from "@/common/components/button/CloseButton";
import { PrevButton } from "@/common/components/button/PrevButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";
import { Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";

export const IdPasswordSearchView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <CloseButton />
        <TitleWithDesc
          title="회원 정보 찾기"
          desc="찾으실 회원 정보를 선택해 주세요."
        />
        <div css={sx.searchBoxWrapper}>
          <SearchBox
            title="아이디 (이메일) 찾기"
            desc="휴대폰 번호를 통해 아이디 (이메일) 을 찾을 수 있어요."
          />
          <SearchBox
            title="비밀번호 찾기"
            desc="휴대폰 번호를 통해 비밀번호를 찾을 수 있어요."
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
};

const SearchBox = ({ title, desc }: SearchBox) => {
  return (
    <Button css={sx.boxContainer}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="caption">{desc}</Typography>
      <div css={sx.img}>
        <Image
          width="24px"
          height="24px"
          src="/img/arrowIcon/icon-button-next.svg"
          alt=""
        />
      </div>
    </Button>
  );
};

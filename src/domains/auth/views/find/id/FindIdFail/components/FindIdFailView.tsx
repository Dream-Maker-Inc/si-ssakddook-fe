import { Title } from "@/common/components/title/Title";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import IdFailImg from "public/img/find/id-fail.svg";

export const FindIdFailView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <Title>아이디 검색 실패</Title>
        <Image width="250px" height="160px" src={IdFailImg} alt="img" />
        <Typography variant="h4" textAlign={"center"} mt="60px">
          입력하신 휴대폰 번호와 일치하는 아이디를 찾지 못했어요.
          <br />
          입력하신 <span css={sx.span}>휴대폰 번호를 확인</span>하시고 다시
          시도해 주세요.
        </Typography>
        <div css={sx.buttonWrapper}>
          <Button fullWidth variant="contained" color="primary">
            <Typography variant="body1" color="white">
              회원정보 다시 찾기
            </Typography>
          </Button>
          <Button fullWidth variant="contained" color="secondary">
            <Typography variant="body1" color="#606060">
              로그인하러 가기
            </Typography>
          </Button>
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
    align-items: center;

    position: relative;
  `,

  buttonWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: 12px;

    position: absolute;
    bottom: 0px;
  `,

  span: css`
    color: #5a8835;
  `,
};

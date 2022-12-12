import { Title } from "@/common/components/title/Title";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import IdFailImg from "@/img/auth/img-id-search-failed.svg";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const FindIdFailView = () => {
  const router = useRouter();
  const onLoginView = () => {
    router.push(RoutePath.Login);
  };

  const onFindAccountView = () => {
    router.push(RoutePath.FindAccount);
  };
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <Typography
          variant="h1"
          mt="26px"
          mb="12px"
          width="100%"
          textAlign="left"
          fontSize="20px"
        >
          아이디 검색 실패
        </Typography>
        <div css={sx.image}>
          <Image layout="fill" src={IdFailImg} alt="img" />
        </div>
        <Typography variant="h4" textAlign={"center"}>
          입력하신 휴대폰 번호와 일치하는 아이디를 찾지 못했어요.
          <br />
          입력하신 <span css={sx.span}>휴대폰 번호를 확인</span>하시고 다시
          시도해 주세요.
        </Typography>
        <div css={sx.buttonWrapper}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onFindAccountView}
          >
            <Typography variant="body1" color="white">
              회원정보 다시 찾기
            </Typography>
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={onLoginView}
          >
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
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1.02;
  `,
  buttonWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 14px;
    position: absolute;
    bottom: 0px;
  `,
  span: css`
    color: #5a8835;
  `,
};

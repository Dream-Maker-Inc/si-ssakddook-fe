import { PrevButton } from "@/common/components/button/PrevButton";
import { css } from "@emotion/react";
import { Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useLoginView } from "./useLoginView";

export const LoginView = () => {
  const { login } = useLoginView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton />
        <div css={sx.img}>
          <Image
            width="60px"
            height="40px"
            alt={"img"}
            src={"/img/logo/main.svg"}
          />
        </div>
        <div css={sx.loginBoxContainer}>
          <Typography variant="h1">로그인</Typography>
          <div css={sx.loginBox}>
            <TextField fullWidth placeholder="아이디 (이메일)" />
            <TextField fullWidth placeholder="비밀번호" />
            <Button
              onClick={login.onClick}
              fullWidth
              variant="contained"
              color="primary"
            >
              <Typography variant="body1" color="white">
                로그인
              </Typography>
            </Button>
            <Link href="/">
              <a css={sx.lostAccount}>회원정보를 잊으셨나요?</a>
            </Link>
          </div>
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

    text-align: center;

    position: relative;
  `,
  img: css`
    margin-top: 6.87vh;
  `,
  loginBoxContainer: css`
    width: 100%;
    margin-top: 9.37vh;
  `,

  loginBox: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 4.68vh;
  `,

  lostAccount: css`
    font-size: 10px;
    line-height: 16.65px;
    color: #999999;
    text-decoration: underline;
    margin-top: 3.12px;
  `,
};

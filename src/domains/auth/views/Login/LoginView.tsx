import { PrevButton } from "@/common/components/button/PrevButton";
import { css } from "@emotion/react";
import { Button, TextField, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useLoginView } from "./useLoginView";

export const LoginView = () => {
  const { emailState, pwState, login } = useLoginView();

  return (
    <div css={sx.root}>
      <Head>
        <meta name="viewport" content="user-scalable=yes" />
      </Head>
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
            <TextField
              fullWidth
              placeholder="아이디 (이메일)"
              value={emailState.value}
              onChange={emailState.onChange}
              error={emailState.error}
            />
            <TextField
              fullWidth
              type="password"
              placeholder="비밀번호"
              value={pwState.value}
              onChange={pwState.onChange}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={login.onClick}
              disabled={login.disabled}
            >
              <Typography variant="body1" color="white">
                로그인
              </Typography>
            </Button>
          </div>
          <div css={sx.link}>
            <Link href="/auth/search">
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

  link: css`
    margin-top: 20px;
  `,
};

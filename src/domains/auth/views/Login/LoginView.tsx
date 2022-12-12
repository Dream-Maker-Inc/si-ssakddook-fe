import { PrevButton } from "@/common/components/button/PrevButton";
import { WhiteCircularLoading } from "@/common/components/progress/WhiteCircularProgress/WhiteCircularLoading";
import { css } from "@emotion/react";
import { Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useLoginView } from "./useLoginView";
import MainImg from "@/img/logo/main.svg";
import { LightColor } from "@/themes/Color";
import { RoutePath } from "@/constants/Path";

export const LoginView = () => {
  const { emailState, pwState, login } = useLoginView();

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.prevButtonWrapper}>
          <PrevButton location={RoutePath.Home} isPaddingEmpty />
        </div>

        <div css={sx.img}>
          <Image width="60px" height="40px" alt={"img"} src={MainImg} />
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
              disabled={login.disabled || login.isLoading}
            >
              {login.isLoading ? (
                <WhiteCircularLoading />
              ) : (
                <Typography variant="body1" color="white">
                  로그인
                </Typography>
              )}
            </Button>
          </div>
          <div css={sx.link}>
            <Link href="/auth/search">
              <Typography
                variant="h4"
                color={LightColor.Gray100}
                css={sx.lostAccount}
              >
                회원정보를 잊으셨나요?
              </Typography>
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
  prevButtonWrapper: css`
    display: flex;
    justify-content: flex-start;
    width: 100%;
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
    text-decoration: underline;
    margin-top: 3.12px;
    width: fit-content;
    cursor: pointer;
  `,

  link: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  `,
};

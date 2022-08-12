import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { setMaxListeners } from "process";
export const IntroView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.img}>
          <Image
            width="60px"
            height="40px"
            alt={"img"}
            src={"/img/logo/main.svg"}
          />
        </div>

        <Typography
          variant="h2"
          lineHeight="7.09vw"
          textAlign="center"
          mt="10.9vh"
        >
          자책하지 말아요
          <br />
          당신의 잘못이 아닙니다
        </Typography>

        <div css={sx.smallTextWrapper}>
          <Typography variant="caption" textAlign="center">
            홀로 감당하기엔 너무 큰 고통
            <br />
            앞으로는 함께 해결합시다
          </Typography>
          <Typography variant="caption" textAlign="center">
            누구에게도 말 못할 괴로움을
            <br />
            여기 이곳에 두고 가시길
          </Typography>
        </div>
        <div css={sx.buttonWrapper}>
          <Button fullWidth variant="contained" color="primary">
            회원가입
          </Button>
          <Button fullWidth variant="contained" color="secondary">
            로그인
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
  img: css`
    margin-top: 18.4vh;
  `,

  smallTextWrapper: css`
    width: 100%;
    height: 13.28vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 6.2vh;
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
};

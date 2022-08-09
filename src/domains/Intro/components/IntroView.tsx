import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
export const IntroView = () => {
  return (
    <div css={sx.root}>
      <Image
        width="60px"
        height="40px"
        alt={"img"}
        src={"/img/logo/main.png"}
        css={sx.img}
      />

      <Typography variant="h2" textAlign="center">
        자책하지 말아요
        <br />
        당신의 잘못이 아닙니다
      </Typography>

      <div css={sx.smallTextWrapper}>
        <Typography variant="body2" textAlign="center">
          홀로 감당하기엔 너무 큰 고통
          <br />
          앞으로는 함께 해결합시다
        </Typography>
        <Typography variant="body2" textAlign="center">
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
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
  `,
  img: css``,

  smallTextWrapper: css`
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 40px;
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

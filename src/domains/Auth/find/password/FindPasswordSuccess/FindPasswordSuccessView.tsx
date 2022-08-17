import { Title } from "@/common/components/title/Title";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export const FindPasswordSuccessView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <Title>이메일을 확인해주세요.</Title>
        <Image
          width="250px"
          height="160px"
          src="/img/find/password-success.svg"
          alt="img"
        />
        <Typography variant="h4" textAlign={"center"} mt="60px">
          비밀번호 변경 관련 이메일을 발송해드렸어요. <br />
          <span css={sx.span}>
            이메일을 확인하시고 해당 절차에 따라 진행해 주세요.
          </span>
        </Typography>
        <div css={sx.alarm}>
          <Typography
            fontSize="8px"
            lineHeight={"166.5%"}
            color="#999999"
            textAlign={"center"}
          >
            <span css={sx.underline}>메일이 안 보이시나요? </span>
            <br />
            프로모션 보관함, 스팸 보관함 등을 확인해 주세요.
            <br />
            상황에 따라 메일 발송이 지연될 수도 있어요.
          </Typography>
        </div>
        <div css={sx.buttonWrapper}>
          <Button fullWidth variant="contained" color="primary">
            <Typography variant="body1" color="white">
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

  span: css`
    color: #5a8835;
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

  alarm: css`
    position: absolute;
    bottom: 8.7vh;
  `,
  underline: css`
    text-decoration: underline;
  `,
};

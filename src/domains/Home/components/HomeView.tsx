import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import MainImg from "@/img/logo/main.svg";
import { useHomeView } from "./useHomeView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { BusinessInformationSection } from "@/common/components/footer/BusinessInformationSection";
export const HomeView = () => {
  const { isLayoutLoading, signup, login } = useHomeView();

  if (isLayoutLoading) return <CircularLoading />;

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.wrapper}>
          <div css={sx.img}>
            <Image width="60px" height="40px" alt={"img"} src={MainImg} />
          </div>
          <Typography variant="h2" lineHeight="26px" textAlign="center">
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
            <Button
              onClick={signup.onClick}
              fullWidth
              variant="contained"
              color="primary"
            >
              <Typography variant="body1" color="white">
                회원가입
              </Typography>
            </Button>
            <Button
              onClick={login.onClick}
              fullWidth
              variant="contained"
              color="secondary"
            >
              <Typography variant="body1" color="#606060">
                로그인
              </Typography>
            </Button>
          </div>
        </div>
        <BusinessInformationSection isWhite />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  wrapper: css`
    width: 100%;
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: white;
  `,
  img: css`
    margin-top: 10vh;
  `,
  smallTextWrapper: css`
    width: 100%;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  buttonWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 14px;
    /* position: absolute;
    bottom: 0px; */
  `,
};

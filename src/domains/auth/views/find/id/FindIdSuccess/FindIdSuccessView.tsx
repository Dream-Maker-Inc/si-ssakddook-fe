import { Title } from "@/common/components/title/Title";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import IdSuccessImg from "@/img/auth/img-id-search-success.svg";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const FindIdSuccessView = () => {
  const router = useRouter();
  const email = router.query.email + "";

  const onLogin = () => {
    router.push(RoutePath.Login);
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
          아이디 찾기 완료
        </Typography>
        <div css={sx.image}>
          <Image layout="fill" src={IdSuccessImg} alt="img" />
        </div>
        <Typography variant="h4" textAlign={"center"}>
          입력하신 휴대폰 번호와 일치하는 아이디를 찾았어요.
        </Typography>
        <div css={sx.idBox}>
          <Typography variant="h4" color="#333333">
            {email}
          </Typography>
        </div>

        <Typography variant="h4" textAlign={"center"}>
          위 아이디로 바로 로그인하시려면, <br />
          하단의 <span css={sx.span}>로그인하러 가기</span> 버튼을 눌러 주세요.
        </Typography>
        <div css={sx.buttonWrapper}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onLogin}
          >
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
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1.02;
  `,
  span: css`
    color: #5a8835;
  `,
  idBox: css`
    width: 100%;
    height: 60px;
    background: rgba(90, 136, 53, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
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
};

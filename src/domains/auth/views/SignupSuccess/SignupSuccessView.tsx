import { Title } from "@/common/components/title/Title";
import { RoutePath } from "@/constants/Path";
import { MemberAtom } from "@/recoil/Member/Member.atom";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export const SignupSuccessView = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(RoutePath.Login);
  };
  console.log(useRecoilValue(MemberAtom));
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.img}>
          <Image
            width="260px"
            height="198px"
            src="/img/find/signup-success.svg"
            alt="img"
          />
        </div>
        <Typography variant="h1" mt="60px" mb="60px">
          회원가입 완료!
        </Typography>
        <div css={sx.wrapper}>
          <Typography variant="h4" color={LightColor.PrimaryDark}>
            싹둑의 회원이 되신 것을 환영해요.
          </Typography>
          <Typography variant="h4">
            썩은 잎을 잘라내는 일,
            <br />더 나은 내일을 함께 피우겠습니다.
          </Typography>
        </div>

        <div css={sx.buttonWrapper}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onClick}
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

  buttonWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: 12px;

    position: absolute;
    bottom: 0px;
  `,

  img: css`
    margin-top: 84px;
  `,

  wrapper: css`
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  `,
};

import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";
import Image from "next/image";
import SmallLogo from "@/img/main/small-logo.png";

export const BusinessInformationSection = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.image}>
          <Image layout="fill" src={SmallLogo} alt="logo" />
        </div>
        <Text>싹둑 사업자정보</Text>
        <Text>대표 차진환 사업자등록번호 356-05-02624</Text>
        <Text>주소 서울특별시 강남구 언주로97길 27-12, 302호(역삼동)</Text>
        <Text>유선전화 070-8064-0148</Text>
        <Text>호스팅서비스 아마존웹서비스 (AWS) 제공</Text>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 127px;
    background-color: rgba(90, 136, 53, 0.04);
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  image: css`
    position: relative;
    width: 26px;
    height: 16.9px;
    margin-bottom: 10.81px;
  `,
};

const Text = (p: TypographyProps) => (
  <Typography variant="h5" lineHeight={1.5} color={LightColor.Gray100} {...p} />
);

import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

type BusinessInformationSection = {
  isWhite?: boolean;
};

export const BusinessInformationSection = ({
  isWhite = false,
}: BusinessInformationSection) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisieblChange = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div css={sx.root(isWhite)}>
      <div css={sx.list}>
        <LinkText href={"https://ssakduk.com/notice"} title={"공지사항"} />
        <LinkText
          href={"https://ssakduk.com/intro/index.html"}
          title={"회사소개"}
        />
        <LinkText href={"https://ssakduk.com/policy"} title={"이용약관"} />
        <LinkText
          href={"https://ssakduk.com/policy"}
          title={"개인정보 처리방침"}
        />
      </div>
      <div css={sx.container}>
        <Text>썪은 잎을 잘라내는 일,</Text>
        <Text>더 나은 내일을 함께 피우겠습니다.</Text>
        <div css={sx.button} onClick={handleVisieblChange}>
          <Typography variant="h5" color={LightColor.Gray100}>
            싹둑 사업자정보
          </Typography>
          {isVisible ? (
            <ExpandLessIcon fontSize="inherit" />
          ) : (
            <ExpandMoreIcon fontSize="inherit" />
          )}
        </div>
        <div css={sx.content(isVisible)}>
          <Text>대표: 차진환 | 사업자등록번호: 356-05-02624</Text>
          <Text>주소: 서울특별시 강남구 언주로97길 27-12, 302호(역삼동)</Text>
          <Text>호스팅 사업자: Amazon Web Service (AWS)</Text>
          <Text>고객센터: 070-8064-0148 | help@ssakduk.com</Text>
          <Text>
            상담시간: 평일 10:00~18:00 (점심: 13:00~14:00 | 토요일,공휴일 휴무)
          </Text>
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: (isWhite: boolean) => css`
    width: 100%;
    height: fit-content;
    background-color: ${isWhite ? "white" : "rgba(90, 136, 53, 0.04)"};
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
  `,
  list: css`
    width: 100%;
    height: 26px;
    display: flex;
    border-top: 1px solid ${LightColor.Gray500};
    border-bottom: 1px solid ${LightColor.Gray500};
  `,
  li: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  button: css`
    display: flex;
    align-items: center;
    margin-top: 8px;
  `,

  content: (isVisible: boolean) => css`
    display: ${isVisible ? "block" : "none"};
    margin-top: 8px;
    text-align: center;
  `,
};

const Text = (p: TypographyProps) => (
  <Typography variant="h5" color={LightColor.Gray100} {...p} />
);

type LinkTextProps = {
  href: string;
  title: string;
};
const LinkText = ({ href, title }: LinkTextProps) => {
  return (
    <a css={sx.li} href={href} target="_blank" rel="noreferrer">
      <Typography variant="h5" color={LightColor.Gray100}>
        {title}
      </Typography>
    </a>
  );
};

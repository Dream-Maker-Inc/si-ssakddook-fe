import { CategoryChip } from "@/common/components/chip/CategoryChip";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";

export const ContentSection = () => {
  return (
    <div css={sx.contentRoot}>
      <CategoryChip>직장 폭력</CategoryChip>
      <Title>폭력을 폭력이라 하지 못하는 회사 분위기</Title>
      <ContentInfos nickname={"고독한 강아지"} date={"3"} />
      <Content
        text={
          "우리 커다란 가슴에 약동하다. 무엇이 방지하는 살 길지 대고, 피어나기 청춘이 사막이다. 만물은 주는 얼마나 이것이다.\n\n크고 옷을 얼음이 길지 굳세게 찾아다녀도, 것이다. 오아이스도 보는 아름답고 청춘 방황하였으며, 간에 길을 청춘은 내려온 이것이다. 얼음이 청춘은 만천하의 반짝이는 천지는 밝은 창공에 이상의 있는가? 봄바람을 싹이 인생을 가치를 얼음과 인생의 것이다.\n\n가치를 창공에 끝에 무엇을 청춘의 피고 불어 봄바람이다. 열락의 붙잡아 할지니, 동력은 꽃이 열매를 시들어 싶이 있으랴?"
        }
      />
    </div>
  );
};

const sx = {
  contentRoot: css`
    width: 100%;
    padding: 0 16px;
  `,
  contentContainer: css`
    width: 100%;
    padding: 20px 0;
  `,

  contentText: css`
    font-size: 10px;
    line-height: 16.65px;
    color: ${LightColor.TextMain};
    white-space: break-spaces;

    text-align: left;
  `,
};

const Title = (p: TypographyProps) => {
  return <Typography variant="h2" color="black" mt="10px" mb="6px" {...p} />;
};

type ContentInfosProps = {
  nickname: string;
  date: string;
};

const ContentInfos = ({ nickname, date }: ContentInfosProps) => {
  return (
    <Typography variant="h5" color={LightColor.Gray100}>
      {nickname}
      {" | "}
      {date}분전
    </Typography>
  );
};

type ContentProps = {
  text: string;
};

const Content = ({ text }: ContentProps) => {
  return (
    <div css={sx.contentContainer}>
      <p css={sx.contentText}>{text}</p>
    </div>
  );
};

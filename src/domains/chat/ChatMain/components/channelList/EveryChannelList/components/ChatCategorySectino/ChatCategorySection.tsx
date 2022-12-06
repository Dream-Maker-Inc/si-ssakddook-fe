import { CHAT_CATEGORY_TYPE } from "@/domains/chat/types/ChatCategoryType.enum";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useState } from "react";

export const ChatCategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("직장 폭력");
  const categoryList = Object.values(CHAT_CATEGORY_TYPE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  console.log(selectedCategory);
  return (
    <div css={sx.root}>
      {categoryList.map((it, index) => (
        <CategoryChip
          key={index}
          category={it}
          onClick={() => handleCategoryChange(it)}
          isSelected={it === selectedCategory}
        />
      ))}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 8px;
    border-bottom: 1px solid ${LightColor.Gray500};
  `,
  chip: (isSelected: boolean) => css`
    width: 60px;
    height: 22px;
    background-color: ${isSelected
      ? "rgba(90, 136, 53, 0.1)"
      : LightColor.Gray500};
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(90, 136, 53, 0.1);
    }
  `,
  text: (isSelected: boolean) => css`
    color: ${isSelected ? LightColor.PrimaryDark : LightColor.Gray100};
  `,
};

type CategoryChipProps = {
  category: string;
  onClick: () => void;
  isSelected: boolean;
};

const CategoryChip = ({ category, onClick, isSelected }: CategoryChipProps) => {
  return (
    <div css={sx.chip(isSelected)} onClick={onClick}>
      <Typography variant="h5" css={sx.text(isSelected)}>
        {category}
      </Typography>
    </div>
  );
};

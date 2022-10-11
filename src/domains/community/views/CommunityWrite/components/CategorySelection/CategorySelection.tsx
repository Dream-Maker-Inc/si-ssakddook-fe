import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowIcon from "@/img/arrowIcon/icon-arrow-down.svg";
import CategoryIcon from "@/img/selection/icon-category.svg";

type CategorySelectionProps = {
  categoryList: string[];
  value: string;
  onChange: (e: SelectChangeEvent) => void;
};

export const CategorySelection = ({
  categoryList,
  value,
  onChange,
}: CategorySelectionProps) => {
  return (
    <div css={sx.selectionContainer}>
      <FormControl fullWidth sx={{ height: "100%" }}>
        <Select
          id="community-category"
          value={value}
          onChange={onChange}
          variant="standard"
          displayEmpty
          disableUnderline
          css={sx.select}
          IconComponent={() => (
            <Image width="24px" height="24px" src={ArrowIcon} alt="dropdown" />
          )}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <div css={sx.outer}>
                  <Image width="20px" height="20px" src={CategoryIcon} alt="" />
                  <Typography
                    variant="body1"
                    lineHeight="1"
                    color={LightColor.Gray600}
                    ml={"10px"}
                    width="100%"
                  >
                    카테고리를 선택해 주세요.
                  </Typography>
                </div>
              );
            }

            return (
              <Typography
                variant="body1"
                lineHeight="1"
                color={LightColor.TextMain}
              >
                {selected}
              </Typography>
            );
          }}
        >
          {categoryList.map((it, index) => (
            <MenuItem key={index} value={it}>
              {it}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const sx = {
  selectionContainer: css`
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid ${LightColor.Gray500};
  `,

  select: css`
    height: 100%;
    #community-category {
      padding: 0px;
      padding-right: 0px;
      height: 100%;

      display: flex;
      align-items: center;
    }
  `,

  outer: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `,
};

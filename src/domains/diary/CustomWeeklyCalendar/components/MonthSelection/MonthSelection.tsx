import { css } from "@emotion/react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { format } from "date-fns";
import { useMonthSelection } from "./useMonthSelection";

export type MonthSelectionProps = {
  currentMonth: Date;
  signupMonth: Date;
  onChange: () => void;
};

export const MonthSelection = ({
  currentMonth,
  signupMonth,
  onChange,
}: MonthSelectionProps) => {
  const { monthData } = useMonthSelection(signupMonth);
  const formattedDate = (date: Date) => {
    const year = format(date, "yyyy");
    const month = format(date, "MM");

    return year + "년 " + month + "월";
  };

  const formatToYYYYMM = (date: Date) => {
    const formattedDate = format(date, "yyyy MM");

    return formattedDate + "";
  };

  console.log("#################### : " + currentMonth);

  return (
    <div css={sx.selectContainer}>
      <Select
        value={formatToYYYYMM(currentMonth)}
        label="Age"
        onChange={onChange}
        variant={"standard"}
        disableUnderline
        css={sx.select}
      >
        {monthData.map((it, index) => {
          return (
            <MenuItem key={index} value={formatToYYYYMM(it.monthValue)}>
              {formattedDate(it.monthValue)}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

const sx = {
  selectContainer: css`
    width: 100%;
    text-align: left;

    & .MuiInputBase-root {
      height: unset;
    }
  `,

  select: css`
    & .MuiSelect-select {
      font-size: 14px;
    }
  `,
};

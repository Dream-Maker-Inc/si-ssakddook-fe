import { DiaryLastClickedDateAtom } from "@/recoil/Diary/Diary.atom";
import { css } from "@emotion/react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { format } from "date-fns";
import { useSetRecoilState } from "recoil";
import { useMonthSelection } from "./useMonthSelection";

export type MonthSelectionProps = {
  currentMonth: Date;
  signupDate: Date;
  onChange: (e: string) => void;
};

export const MonthSelection = ({
  currentMonth,
  signupDate,
  onChange,
}: MonthSelectionProps) => {
  const setLastDate = useSetRecoilState(DiaryLastClickedDateAtom);
  const { monthData } = useMonthSelection(signupDate);

  const formattedDate = (date: Date) => {
    const year = format(date, "yyyy");
    const month = format(date, "MM");
    return year + "년 " + month + "월";
  };

  const formatToYYYYMM = (date: Date) => {
    const formattedDate = format(date, "yyyy MM");
    return formattedDate + "";
  };

  return (
    <div css={sx.selectContainer}>
      <Select
        value={formatToYYYYMM(currentMonth)}
        label="Age"
        onChange={(e: SelectChangeEvent) => {
          setLastDate("");
          onChange(e.target.value);
        }}
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
      font-size: 16px;
    }
  `,
};

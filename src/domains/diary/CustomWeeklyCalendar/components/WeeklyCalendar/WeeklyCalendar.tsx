import { css } from "@emotion/react";

import { useState } from "react";
import Calendar from "./Calendar";
import MemoCalendar from "./MemoCalendar";
import { getWeek } from "date-fns";
import { LightColor } from "@/themes/Color";
import { PlainTab } from "@/common/components/tab/PlainTab";
import { SelectChangeEvent } from "@mui/material";
export const WeeklyCalendar = () => {
  const signupMonth = new Date("2022/03/17");

  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState("");
  const [nowDate, setNowDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const handleMonthSelectChange = (e: SelectChangeEvent) => {
    setCurrentMonth(new Date(e.target.value));
  };

  const showDetailsHandle = (dayStr: string) => {
    setData(dayStr);
    setShowDetails(true);
  };
  return (
    <div css={sx.root}>
      <PlainTab category="다이어리" />
      <div className="global">
        <Calendar
          showDetailsHandle={showDetailsHandle}
          nowDate={nowDate}
          setNowDate={setNowDate}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentWeek={currentWeek}
          setCurrentWeek={setCurrentWeek}
          signupMonth={signupMonth}
          onSelectChange={handleMonthSelectChange}
        />
      </div>
      <div css={sx.hr} />
      <div className="vertical-global">
        <MemoCalendar
          showDetailsHandle={showDetailsHandle}
          nowDate={nowDate}
          setNowDate={setNowDate}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentWeek={currentWeek}
          setCurrentWeek={setCurrentWeek}
        />
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

  hr: css`
    width: 100%;
    height: 1px;
    background-color: ${LightColor.Gray500};

    margin: 8px 0 10px;
  `,
};

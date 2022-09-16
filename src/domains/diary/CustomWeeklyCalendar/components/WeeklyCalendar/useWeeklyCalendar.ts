import { SelectChangeEvent } from "@mui/material";
import { format, getWeek } from "date-fns";
import { useState } from "react";
import { useFindAllByMonth } from "./../../../../../data/apis/diary/useDiaryApiHooks";

export const useWeeklyCalendar = () => {
  // calendar
  const now = new Date();
  const signupMonth = new Date("2022/03/17");

  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState("");
  const [nowDate, setNowDate] = useState(now);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const handleMonthSelectChange = (e: SelectChangeEvent) => {
    setCurrentMonth(new Date(e.target.value));
  };

  const showDetailsHandle = (dayStr: string) => {
    setData(dayStr);
    setShowDetails(true);
  };

  // diary api
  const nowMonth = format(now, "yyyy-MM");
  const { data: allDiaries, isLoading, isError } = useFindAllByMonth(nowMonth);

  console.log(data);

  const calendarState = {
    showDetailsHandle: showDetailsHandle,
    nowDate: nowDate,
    setNowDate: setNowDate,
    currentMonth: currentMonth,
    setCurrentMonth: setCurrentMonth,
    currentWeek: currentWeek,
    setCurrentWeek: setCurrentWeek,
    signupMonth: signupMonth,
    onSelectChange: handleMonthSelectChange,
  };
  const memoCalendarState = {
    showDetailsHandle: showDetailsHandle,
    nowDate: nowDate,
    setNowDate: setNowDate,
    currentMonth: currentMonth,
    setCurrentMonth: setCurrentMonth,
    currentWeek: currentWeek,
    setCurrentWeek: setCurrentWeek,
  };

  if (!allDiaries) {
    return {
      calendarState: calendarState,
      memoCalendarState: memoCalendarState,
      refetchState: {
        isLoading: isLoading,
        isError: isError,
      },
      reesult: null,
    };
  }

  return {
    calendarState: calendarState,
    memoCalendarState: memoCalendarState,
    refetchState: {
      isLoading: isLoading,
      isError: isError,
    },
    result: allDiaries,
  };
};

import { useRecoilValue } from "recoil";
import { getWeek } from "date-fns";
import { useState } from "react";
import { DiaryLastClickedDateAtom } from "@/recoil/Diary/Diary.atom";

export const useWeeklyCalendar = () => {
  // calendar
  const now = new Date();
  const lastDate = useRecoilValue(DiaryLastClickedDateAtom);
  const signupMonth = new Date("2022/03/17");
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState("");
  const [nowDate, setNowDate] = useState(now);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const handleMonthSelectChange = (e: string) => {
    setCurrentMonth(new Date(e));
  };

  const showDetailsHandle = (dayStr: string) => {
    setData(dayStr);
    setShowDetails(true);
  };

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

  return {
    lastDate: lastDate,
    calendarState: calendarState,
    memoCalendarState: memoCalendarState,
  };
};
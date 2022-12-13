import { useRecoilValue } from "recoil";
import { useState } from "react";
import { DiaryLastClickedDateAtom } from "@/recoil/Diary/Diary.atom";
import { useQuery } from "react-query";
import { useGetCurrentMember } from "@/data/apis/member/useMemberApiHooks";
import { format, getWeek } from "date-fns";

export const useWeeklyCalendar = () => {
  // calendar
  const now = new Date();
  const lastDate = useRecoilValue(DiaryLastClickedDateAtom);
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState("");
  const [nowDate, setNowDate] = useState(now);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  // getting for created-date of user account
  const { data: memberData } = useQuery("get-curr-member", useGetCurrentMember);
  const signupDate = memberData?.createdAt
    ? new Date(memberData?.createdAt)
    : new Date();

  const signupDateMonth = format(signupDate, "yyyy MM");

  const handleMonthSelectChange = (monthSelectionDate: string) => {
    if (signupDateMonth === monthSelectionDate) {
      setCurrentMonth(signupDate ? signupDate : new Date(monthSelectionDate));
    } else {
      setCurrentMonth(new Date(monthSelectionDate));
    }
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
    signupDate: signupDate,
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

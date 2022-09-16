import { css } from "@emotion/react";
import Calendar from "./Calendar";
import MemoCalendar from "./MemoCalendar";
import { LightColor } from "@/themes/Color";
import { useWeeklyCalendar } from "./useWeeklyCalendar";
export const WeeklyCalendar = () => {
  const { calendarState, memoCalendarState, result } = useWeeklyCalendar();

  return (
    <div css={sx.root}>
      <div className="global">
        <Calendar
          showDetailsHandle={calendarState.showDetailsHandle}
          nowDate={calendarState.nowDate}
          setNowDate={calendarState.setNowDate}
          currentMonth={calendarState.currentMonth}
          setCurrentMonth={calendarState.setCurrentMonth}
          currentWeek={calendarState.currentWeek}
          setCurrentWeek={calendarState.setCurrentWeek}
          signupMonth={calendarState.signupMonth}
          onSelectChange={calendarState.handleMonthSelectChange}
        />
      </div>
      <div css={sx.hr} />
      <div className="vertical-global">
        <MemoCalendar
          showDetailsHandle={memoCalendarState.showDetailsHandle}
          nowDate={memoCalendarState.nowDate}
          setNowDate={memoCalendarState.setNowDate}
          currentMonth={memoCalendarState.currentMonth}
          setCurrentMonth={memoCalendarState.setCurrentMonth}
          currentWeek={memoCalendarState.currentWeek}
          setCurrentWeek={memoCalendarState.setCurrentWeek}
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

    display: flex;
    flex-direction: column;
  `,

  hr: css`
    width: 100%;
    height: 1px;
    background-color: ${LightColor.Gray500};

    margin: 8px 0 10px;
  `,
};

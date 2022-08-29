import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import Image from "next/image";
import { IconButton } from "@mui/material";

const MemoCalendar = ({
  showDetailsHandle,
  nowDate,
  setNowDate,
  currentMonth,
  setCurrentMonth,
  currentWeek,
  setCurrentWeek,
}) => {
  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setNowDate(day);
    showDetailsHandle(dayStr);
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center col-weekdays" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div className="memo-wrapper">
            <div
              className={`col cell ${
                isSameDay(day, nowDate) ? "selected" : ""
              }`}
              key={day}
              onClick={() => {
                const dayStr = format(cloneDay, "ccc dd MMM yy");
                onDateClickHandle(cloneDay, dayStr);
              }}
            >
              <div className="number-wrapper">
                <span className="number">{formattedDate}</span>
              </div>
            </div>
            <div className="memo">
              <div className="memo-deco"></div>
              <div className="memo-content">
                <IconButton className="memo-arrow-right">
                  <Image
                    width="20px"
                    height="20px"
                    src="/img/calendar/icon-arrow-right.svg"
                    alt=""
                  />
                </IconButton>
              </div>
            </div>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="vertical-row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="vertical-body">{rows}</div>;
  };

  return (
    <div className="vertical-calendar">
      {/* {renderDays()} */}
      {renderCells()}
    </div>
  );
};

export default MemoCalendar;

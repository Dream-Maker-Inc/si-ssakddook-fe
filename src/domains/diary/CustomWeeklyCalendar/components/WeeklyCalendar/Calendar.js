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
import { MonthSelection } from "../MonthSelection";

const Calendar = ({
  showDetailsHandle,
  nowDate,
  setNowDate,
  currentMonth,
  setCurrentMonth,
  currentWeek,
  setCurrentWeek,
  signupMonth,
  onSelectChange,
}) => {
  const changeWeekHandle = (btnType) => {
    if (btnType === "prev" && getWeek(currentMonth) > getWeek(signupMonth)) {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    } else if (
      btnType === "prev" &&
      getWeek(currentMonth) <= getWeek(signupMonth)
    ) {
      alert("first week");
    }
    if (btnType === "next" && getWeek(currentMonth) < getWeek(new Date())) {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    } else if (
      btnType === "next" &&
      getWeek(currentMonth) >= getWeek(new Date())
    ) {
      alert("last week");
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setNowDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormatYear = "yyyy";
    const dateFormatMonth = "M";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <span>
            {format(currentMonth, dateFormatYear)}년&nbsp;
            {format(currentMonth, dateFormatMonth)}월
          </span>
        </div>
      </div>
    );
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
    while (day < endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${isSameDay(day, nowDate) ? "selected" : ""}`}
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
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };
  const renderFooter = () => {
    return (
      <div className="footer row">
        <div className="col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <Image
              width="20px"
              height="20px"
              src="/img/calendar/icon-left-scroll.svg"
              alt=""
            />
          </div>
        </div>
        <div className="col-end" onClick={() => changeWeekHandle("next")}>
          <Image
            width="20px"
            height="20px"
            src="/img/calendar/icon-right-scroll.svg"
            alt=""
          />
        </div>
      </div>
    );
  };
  return (
    <div className="calendar">
      <MonthSelection
        currentMonth={currentMonth}
        signupMonth={signupMonth}
        onChange={onSelectChange}
      />
      {renderDays()}
      {renderCells()}
      {renderFooter()}
    </div>
  );
};

export default Calendar;

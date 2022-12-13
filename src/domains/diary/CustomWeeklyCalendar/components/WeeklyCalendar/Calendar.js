import { DiaryLastClickedDateAtom } from "@/recoil/Diary/Diary.atom";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { MonthSelection } from "../MonthSelection";
import LeftScrollIcon from "@/img/calendar/icon-left-scroll.svg";
import RightScrollIcon from "@/img/calendar/icon-right-scroll.svg";

const Calendar = ({
  showDetailsHandle,
  nowDate,
  setNowDate,
  currentMonth,
  setCurrentMonth,
  currentWeek,
  setCurrentWeek,
  signupDate,
  onSelectChange,
}) => {
  const setLastDate = useSetRecoilState(DiaryLastClickedDateAtom);
  const changeWeekHandle = (btnType) => {
    if (btnType === "prev" && getWeek(currentMonth) > getWeek(signupDate)) {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
      setLastDate("");
    } else if (
      btnType === "prev" &&
      getWeek(currentMonth) <= getWeek(signupDate)
    ) {
      alert("더이상 뒤로 갈 수 없습니다.");
    }
    if (btnType === "next" && getWeek(currentMonth) < getWeek(new Date())) {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
      setLastDate("");
    } else if (
      btnType === "next" &&
      getWeek(currentMonth) >= getWeek(new Date())
    ) {
      alert("마지막 주 입니다.");
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
  const renderButtons = () => {
    return (
      <div className="buttons row">
        <div className="col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <Image width="20px" height="20px" src={LeftScrollIcon} alt="" />
          </div>
        </div>
        <div className="col-end">
          <div className="icon" onClick={() => changeWeekHandle("next")}>
            <Image width="20px" height="20px" src={RightScrollIcon} alt="" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="calendar">
      <MonthSelection
        currentMonth={currentMonth}
        signupDate={signupDate}
        onChange={onSelectChange}
      />
      {renderDays()}
      {renderCells()}
      {renderButtons()}
    </div>
  );
};

export default Calendar;

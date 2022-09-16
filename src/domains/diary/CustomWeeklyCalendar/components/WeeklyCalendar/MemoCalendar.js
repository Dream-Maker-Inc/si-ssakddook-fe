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
import { IconButton, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

const MemoCalendar = ({
  showDetailsHandle,
  nowDate,
  setNowDate,
  currentMonth,
  setCurrentMonth,
  currentWeek,
  setCurrentWeek,
}) => {
  const router = useRouter();
  const handleMemoClick = (clickedDate) => {
    router.push({
      pathname: RoutePath.DiaryDetail,
      query: { date: clickedDate },
    });
  };
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

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const monthDateFormat = "yyyy-MM-dd";

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day < endDate) {
      for (let i = 0; i < 7; i++) {
        let clickedDate = format(day, monthDateFormat);
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div className="memo-wrapper" key={day}>
            <div
              className={`col cell ${
                isSameDay(day, nowDate) ? "selected" : ""
              }`}
              onClick={() => {
                const dayStr = format(cloneDay, "ccc dd MMM yy");
                onDateClickHandle(cloneDay, dayStr);
              }}
            >
              <div className="number-wrapper">
                <span className="number">{formattedDate}</span>
              </div>
            </div>
            <div className="memo" onClick={() => handleMemoClick(clickedDate)}>
              <div className="memo-deco"></div>
              <div className="memo-content">
                <p className="memo-text">{clickedDate}</p>
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

  return <div className="vertical-calendar">{renderCells()}</div>;
};

export default MemoCalendar;

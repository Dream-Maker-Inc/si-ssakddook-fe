import moment from "moment-timezone";
import "moment/locale/ko";

// date exmaple : 2022-01-01
export const getDateFromNow = (date: string) => {
  const formattedDate = moment(date.slice(0, 10), "YYYY-MM-DD")
    .tz("Asia/Seoul")
    .fromNow();
  return formattedDate;
};

export const getTimeFromNow = (date: Date) => {
  const formattedDate = moment(date).fromNow();
  return formattedDate;
};

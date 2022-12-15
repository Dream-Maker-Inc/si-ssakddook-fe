import { parseISO, format } from "date-fns";
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
  const formattedDate = (date + "").slice(0, -1);
  const createdDate = moment(formattedDate).fromNow();

  return createdDate;
};

export const getLastChatTimeFromNow = (date: Date) => {
  const createdDate = moment(date).fromNow();

  return createdDate;
};

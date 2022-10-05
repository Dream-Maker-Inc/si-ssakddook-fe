import moment from "moment";

// date exmaple : 2022-01-01
export const getDateFromNow = (date: string) => {
  const formattedDate = moment(date.slice(0, 10), "YYYY-MM-DD").fromNow();
  return formattedDate;
};

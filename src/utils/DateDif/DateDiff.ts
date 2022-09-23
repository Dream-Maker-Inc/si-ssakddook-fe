import { differenceInDays } from "date-fns";

export const getDateDiff = (date: Date) => {
  const firstDate = date == undefined ? new Date() : date;
  const secondDate = new Date();

  const dateDiff = differenceInDays(secondDate, new Date(firstDate));

  return dateDiff == 0 ? "오늘" : dateDiff == 1 ? "어제" : `${dateDiff}일 전`;
};

export const getDiaryDateDiff = (date: Date) => {
  const firstDate = date == undefined ? new Date() : date;
  const secondDate = new Date();

  const dateDiff = differenceInDays(new Date(firstDate), secondDate);

  return dateDiff + 1;
};

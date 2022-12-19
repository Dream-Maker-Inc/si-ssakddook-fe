import { addMonths, subMonths } from "date-fns";

export const useMonthSelection = (signupDate: Date) => {
  let monthList = [];
  const currentMonth = addMonths(new Date(), 2);

  function getMonthDifference(starDate: Date, endDate: Date) {
    return (
      endDate.getMonth() -
      starDate.getMonth() +
      12 * (endDate.getFullYear() - starDate.getFullYear())
    );
  }

  for (let i = 0; i <= getMonthDifference(signupDate, currentMonth); i++) {
    const myMonth = {
      monthValue: subMonths(currentMonth, i),
    };

    monthList.push(myMonth);
  }

  return {
    monthData: monthList,
  };
};

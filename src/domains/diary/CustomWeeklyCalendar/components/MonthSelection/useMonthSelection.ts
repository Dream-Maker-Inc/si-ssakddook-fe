import { SelectChangeEvent } from "@mui/material";
import { format, subMonths } from "date-fns";
import { useState } from "react";

export const useMonthSelection = (signupMonth: Date) => {
  let monthList = [];
  const currentMonth = new Date();

  function getMonthDifference(starDate: Date, endDate: Date) {
    return (
      endDate.getMonth() -
      starDate.getMonth() +
      12 * (endDate.getFullYear() - starDate.getFullYear())
    );
  }

  for (let i = 0; i <= getMonthDifference(signupMonth, currentMonth); i++) {
    const myMonth = {
      monthValue: subMonths(currentMonth, i),
    };

    monthList.push(myMonth);
  }

  return {
    monthData: monthList,
  };
};

import { css } from "@emotion/react";
import { WeeklyCalendar } from "./WeeklyCalendar/WeeklyCalendar";

export const DiaryView = () => {
  return (
    <div css={sx.root}>
      <WeeklyCalendar />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};

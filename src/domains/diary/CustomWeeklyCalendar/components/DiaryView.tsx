import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { css } from "@emotion/react";
import { WeeklyCalendar } from "./WeeklyCalendar/WeeklyCalendar";

export const DiaryView = () => {
  return (
    <AppbarLayout>
      <div css={sx.root}>
        <WeeklyCalendar />
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};

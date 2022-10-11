import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { PlainTab } from "@/common/components/tab/PlainTab";
import { css } from "@emotion/react";

import { WeeklyCalendar } from "./WeeklyCalendar/WeeklyCalendar";

export const DiaryView = () => {
  return (
    <AppbarLayout>
      <PlainTab category="다이어리" />
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

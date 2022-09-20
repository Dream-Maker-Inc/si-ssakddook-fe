import { DefaultBottomNavigation } from "@/common/components/bottomNavigation/DefaultBottomNavigation";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { BottomNavigationLayout } from "@/common/components/layout/BottomNavigationLayout";
import { PlainTab } from "@/common/components/tab/PlainTab";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";

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

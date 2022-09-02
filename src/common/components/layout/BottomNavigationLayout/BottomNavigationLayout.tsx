import { css } from "@emotion/react";
import { RoutePath } from "@/constants/Path";
import { CommunityMainView } from "@/domains/community/CommunityMain";
import { DiaryView } from "@/domains/diary/CustomWeeklyCalendar";
import { MainView } from "@/domains/Main";
import { useEffect, useState } from "react";
import { DefaultBottomNavigation } from "../../bottomNavigation/DefaultBottomNavigation";

export const BottomNavigationLayout = () => {
  const [page, setPage] = useState("");
  const handleItemChange = (newPage: string) => {
    setPage(newPage);
  };

  const textFunction = (e: string) => {
    console.log(e);
  };

  let currnetPage;
  useEffect(() => {
    currnetPage = getLayoutByPage(page);
  }, [page]);

  const getLayoutByPage = (page: string) => {
    switch (page) {
      case RoutePath.Main:
        return <MainView />;
      case RoutePath.Chat:
        return <MainView />;
      case RoutePath.Community:
        return <CommunityMainView />;
      case RoutePath.Diary:
        return <DiaryView />;
      case RoutePath.More:
        return <MainView />;
      default:
        return <MainView />;
    }
  };
  return (
    <div css={sx.root}>
      {currnetPage}
      <DefaultBottomNavigation onChange={handleItemChange} />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};

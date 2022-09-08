import { css } from "@emotion/react";
import { RoutePath } from "@/constants/Path";
import { CommunityMainView } from "@/domains/community/CommunityMain";
import { DiaryView } from "@/domains/diary/CustomWeeklyCalendar";
import { MainView } from "@/domains/Main";
import { DefaultBottomNavigation } from "../../bottomNavigation/DefaultBottomNavigation";
import { useRecoilState } from "recoil";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";
import { MoreView } from "@/domains/more/More";
import { ChatMainView } from "@/domains/chat/ChatMain";

export const BottomNavigationLayout = () => {
  const [navigation, setNavigation] = useRecoilState(NavigationAtom);
  const handleItemChange = (newPage: string) => {
    setNavigation(newPage);
  };

  const getLayoutByPage = (page: string) => {
    switch (page) {
      case RoutePath.Main:
        return <MainView />;
      case RoutePath.Chat:
        return <ChatMainView />;
      case RoutePath.Community:
        return <CommunityMainView />;
      case RoutePath.Diary:
        return <DiaryView />;
      case RoutePath.More:
        return <MoreView />;
      default:
        return <MainView />;
    }
  };

  return (
    <div css={sx.root}>
      {getLayoutByPage(navigation)}
      <DefaultBottomNavigation onPageChange={handleItemChange} />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};

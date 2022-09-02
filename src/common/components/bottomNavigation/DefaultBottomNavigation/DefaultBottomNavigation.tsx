import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import { NavigationAtom } from "@/recoil/Navigation/Navigation.atom";

type DefaultBottomNavigationProps = {
  onPageChange: (e: string) => void;
};

export const DefaultBottomNavigation = ({
  onPageChange,
}: DefaultBottomNavigationProps) => {
  const navigation = useRecoilValue(NavigationAtom);

  const main = RoutePath.Main;
  const chat = RoutePath.Chat;
  const community = RoutePath.Community;
  const diary = RoutePath.Diary;
  const more = RoutePath.More;

  const navigationItems = [
    {
      routingAddress: main,
      unselected: "/img/bottomNavigation/inActive/icon-home.svg",
      selected: "/img/bottomNavigation/active/icon-home-active.svg",
    },
    {
      routingAddress: chat,
      unselected: "/img/bottomNavigation/inActive/icon-chat.svg",
      selected: "/img/bottomNavigation/active/icon-chat-active.svg",
    },
    {
      routingAddress: community,
      unselected: "/img/bottomNavigation/inActive/icon-bamboo.svg",
      selected: "/img/bottomNavigation/active/icon-bamboo-active.svg",
    },
    {
      routingAddress: diary,

      unselected: "/img/bottomNavigation/inActive/icon-diary.svg",
      selected: "/img/bottomNavigation/active/icon-diary-active.svg",
    },
    {
      routingAddress: more,
      unselected: "/img/bottomNavigation/inActive/icon-more.svg",
      selected: "/img/bottomNavigation/active/icon-more-active.svg",
    },
  ];

  return (
    <div>
      <div css={styles.root}>
        {navigationItems.map((it, index) => (
          <div css={styles.link} key={index}>
            <IconButton onClick={() => onPageChange(it.routingAddress)}>
              <Image
                width="18px"
                height="18px'"
                src={
                  it.routingAddress === navigation ? it.selected : it.unselected
                }
                alt="navigation-icon"
              />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    height: 50px;

    display: flex;

    position: fixed;
    bottom: 0;
    left: 0;

    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1);
  `,

  link: css`
    flex: 1;
    width: 100%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
};

import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

export const DefaultBottomNavigation = () => {
  const router = useRouter();

  const main = RoutePath.Main;
  const chat = RoutePath.Chat;
  const community = RoutePath.Community;
  const diary = RoutePath.Diary;
  const more = RoutePath.More;

  const navigationItems = [
    {
      currAddress: main,
      routingAddress: main,
      unselected: "/img/bottomNavigation/inActive/icon-home.svg",
      selected: "/img/bottomNavigation/active/icon-home-active.svg",
    },
    {
      currAddress: chat,
      routingAddress: chat,
      unselected: "/img/bottomNavigation/inActive/icon-chat.svg",
      selected: "/img/bottomNavigation/active/icon-chat-active.svg",
    },
    {
      currAddress: community,
      routingAddress: community,
      unselected: "/img/bottomNavigation/inActive/icon-bamboo.svg",
      selected: "/img/bottomNavigation/active/icon-bamboo-active.svg",
    },
    {
      currAddress: diary,
      routingAddress: diary,
      unselected: "/img/bottomNavigation/inActive/icon-diary.svg",
      selected: "/img/bottomNavigation/active/icon-diary-active.svg",
    },
    {
      currAddress: more,
      routingAddress: more,
      unselected: "/img/bottomNavigation/inActive/icon-more.svg",
      selected: "/img/bottomNavigation/active/icon-more-active.svg",
    },
  ];

  return (
    <div>
      {/* {router.asPath === (main || chat || community || diary || more) && ( */}
      {router.asPath === community && (
        <div css={styles.root}>
          {navigationItems.map((it, index) => (
            <div css={styles.link} key={index}>
              <Link href={it.routingAddress} replace>
                <Image
                  width="18px"
                  height="18px'"
                  src={
                    router.asPath === it.currAddress
                      ? it.selected
                      : it.unselected
                  }
                  alt="navigation-icon"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
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

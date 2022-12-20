import { css } from "@emotion/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { useState } from "react";
import Image from "next/image";
import ArrowRightSamllIcon from "@/img/arrowIcon/icon-arrow-right-small.svg";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

type CommunityBoardTabProps = {
  firstTabInfo: TabModel;
  secondTabInfo: TabModel;
  isBottomMarginNecessary?: boolean;
};

type TabModel = {
  title: string;
  children: React.ReactNode;
};
export const CommunityBoardTab = ({
  firstTabInfo,
  secondTabInfo,
  isBottomMarginNecessary = false,
}: CommunityBoardTabProps) => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleViewRecentPost = () => {
    router.push({ pathname: RoutePath.CommunityList, query: { category: "" } });
  };

  return (
    <Box css={sx.recentContentTitle}>
      <Box css={sx.tabContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ height: "40px", minHeight: "40px", flexGrow: 1 }}
        >
          <Tab label={firstTabInfo.title} {...a11yProps(0)} css={sx.tab} />
          <Tab label={secondTabInfo.title} {...a11yProps(1)} css={sx.tab} />
        </Tabs>
        <div css={sx.more} onClick={handleViewRecentPost}>
          <Typography variant="h4">더보기</Typography>
          <Image src={ArrowRightSamllIcon} width="11px" height="11px" alt="" />
        </div>
      </Box>
      <TabPanel
        value={value}
        index={0}
        isBottomMarginNecessary={isBottomMarginNecessary}
      >
        {value === 0 && firstTabInfo.children}
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        isBottomMarginNecessary={isBottomMarginNecessary}
      >
        {value === 1 && secondTabInfo.children}
      </TabPanel>
    </Box>
  );
};

const sx = {
  recentContentTitle: css`
    width: 100%;
  `,
  tabContainer: css`
    width: 100%;
    border-bottom: 1px solid ${LightColor.Gray500};
    display: flex;
    align-items: center;
  `,
  more: css`
    width: 60px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding-left: 2px;
    background-color: ${LightColor.Gray500};
    border-radius: 12px;
    cursor: pointer;
  `,
  tab: css`
    min-width: 60px;
    padding: 0;
    min-height: 40px;

    font-size: 14px;
  `,

  panelContainer: (isBottomMarginNecessary: boolean) => css`
    width: 100%;
    height: calc(100% - 41px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    padding-bottom: ${isBottomMarginNecessary ? "50px" : "0px"};
  `,
  panelInnerContainer: css``,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  isBottomMarginNecessary: boolean;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, isBottomMarginNecessary } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      css={sx.panelContainer(isBottomMarginNecessary)}
    >
      {value === index && <Box css={sx.panelInnerContainer}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

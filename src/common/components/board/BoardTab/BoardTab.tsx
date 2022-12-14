import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

type BoardTabProps = {
  firstTabInfo: TabModel;
  secondTabInfo: TabModel;
  isBottomMarginNecessary?: boolean;
};

type TabModel = {
  title: string;
  children: React.ReactNode;
};

export const BoardTab = ({
  firstTabInfo,
  secondTabInfo,
  isBottomMarginNecessary = false,
}: BoardTabProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box css={sx.root}>
      <Box css={sx.tabContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ height: "40px", minHeight: "40px" }}
        >
          <Tab label={firstTabInfo.title} {...a11yProps(0)} css={sx.tab} />
          <Tab label={secondTabInfo.title} {...a11yProps(1)} css={sx.tab} />
        </Tabs>
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

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
  tabContainer: css`
    width: 100%;
    border-bottom: 1px solid ${LightColor.Gray500};
  `,
  tab: css`
    width: 100%;
    min-width: 50%;
    max-width: 50%;
    min-height: 40px;

    font-size: 14px;

    & .str-chat {
      position: relative;
      left: unset;
      top: unset;
    }
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

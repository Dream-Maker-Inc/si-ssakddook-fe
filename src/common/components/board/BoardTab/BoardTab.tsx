import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

type BoardTabProps = {
  firstTabInfo: TabModel;
  secondTabInfo: TabModel;
  isVisible?: boolean;
};

type TabModel = {
  title: string;
  children: React.ReactNode;
};

export const BoardTab = ({
  firstTabInfo,
  secondTabInfo,
  isVisible = true,
}: BoardTabProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box css={sx.root(isVisible)}>
      <Box css={sx.tabContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ minHeight: "40px" }}
        >
          <Tab label={firstTabInfo.title} {...a11yProps(0)} css={sx.tab} />
          <Tab label={secondTabInfo.title} {...a11yProps(1)} css={sx.tab} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {firstTabInfo.children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {secondTabInfo.children}
      </TabPanel>
    </Box>
  );
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      css={sx.panelContainer}
      {...other}
    >
      {value === index && <Box css={sx.panelContainer}>{children}</Box>}
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
  root: (isVisible: boolean) => css`
    width: 100%;
    height: 100%;
    display: ${isVisible ? "block" : "none"};
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

    font-size: 12px;
  `,

  panelContainer: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};

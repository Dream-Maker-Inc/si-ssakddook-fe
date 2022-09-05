import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

type ArticleTabProps = {
  myPostList: React.ReactNode;
  myCommentList: React.ReactNode;
};

export const ArticleTab = ({ myPostList, myCommentList }: ArticleTabProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box css={sx.tabContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ minHeight: "40px" }}
        >
          <Tab label="글" {...a11yProps(0)} css={sx.tab} />
          <Tab label="댓글" {...a11yProps(1)} css={sx.tab} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {myPostList}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {myCommentList}
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
  `,
};

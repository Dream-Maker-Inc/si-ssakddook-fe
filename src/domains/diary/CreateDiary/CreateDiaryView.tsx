import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { CreateDiaryTab } from "@/common/components/tab/CreateDiaryTan";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useCreateDiaryView } from "./useCreateDiaryView";

export const CreateDiaryView = () => {
  const { tabState, diaryState } = useCreateDiaryView();

  return (
    <AppbarLayout>
      <div css={sx.root}>
        <CreateDiaryTab
          title={tabState.title}
          writingState={{
            isWritingState: tabState.isWritingState,
            onSubmitClick: tabState.onSubmit,
            onEditlick: tabState.onEdit,
            onRestate: tabState.onRestate,
          }}
        />
        <div css={sx.container}>
          <div css={sx.contentContainer}>
            <TextField
              inputRef={diaryState.ref}
              onFocus={function (e) {
                var val = e.target.value;
                e.target.value = "";
                e.target.value = val;
              }}
              value={diaryState.value}
              onChange={diaryState.onChange}
              multiline
              variant="standard"
              placeholder={diaryState.placeholder}
              css={sx.textfield}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </div>
        </div>
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;
  `,
  container: css`
    width: 100%;
    height: 100%;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  contentContainer: css`
    width: 100%;
    height: fit-content;

    background-color: ${LightColor.Gray500};
    border-radius: 8px;

    padding: 20px;

    position: relative;
  `,

  textfield: css`
    width: 100%;
    height: 100%;
  `,

  lastUpdate: css`
    position: absolute;
    bottom: -16px;
    right: 0;
  `,

  cheerImg: css`
    width: 100%;
    margin-top: 76px;
    margin-bottom: 26px;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

type LastUpdatedProps = {
  date: string;
};
const LastUpdated = ({ date }: LastUpdatedProps) => {
  return (
    <Typography variant="h5" color={LightColor.Gray100} css={sx.lastUpdate}>
      마지막 수정일 : {date}
    </Typography>
  );
};

const CheerImage = () => {
  return (
    <div css={sx.cheerImg}>
      <Image
        width="162px"
        height="80px"
        src="/img/diary/img-cheer-text.svg"
        alt=""
      />
    </div>
  );
};

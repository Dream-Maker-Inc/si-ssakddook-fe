import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { DiaryTab } from "@/common/components/tab/DiaryTab";
import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { diaryRecords } from "../model/diary.model";

export const WriteDiaryView = () => {
  const router = useRouter();
  const [content, setContent] = useState(diaryRecords.content);
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const [isWritingMode, setIsWritingMode] = useState(false);

  //forwardRef 사용 권고
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFieldFocus = () => inputRef.current?.focus();

  const handleSubmitClick = () => {
    router.push(RoutePath.Diary);
  };

  const handleEditClick = () => {
    setIsWritingMode(true);
    handleFieldFocus();
  };

  const handleRestate = () => {
    setIsWritingMode(false);
  };

  return (
    <AppbarLayout>
      <div css={sx.root}>
        <DiaryTab
          title={diaryRecords.date}
          writingState={{
            isWritingState: isWritingMode,
            onSubmitClick: handleSubmitClick,
            onEditlick: handleEditClick,
            onRestate: handleRestate,
          }}
        />
        <div css={sx.container}>
          <div css={sx.contentContainer}>
            <TextField
              inputRef={inputRef}
              onFocus={function (e) {
                var val = e.target.value;
                e.target.value = "";
                e.target.value = val;
              }}
              value={content}
              onChange={handleContentChange}
              multiline
              variant="standard"
              placeholder={
                content === null
                  ? "본인 외에는 그 누구도 나의 감정일기를 볼 수 없어요."
                  : ""
              }
              css={sx.textfield}
              InputProps={{
                disableUnderline: true,
                readOnly: !isWritingMode,
              }}
            />
            {isWritingMode || <LastUpdated date={diaryRecords.updateDate} />}
          </div>
          {isWritingMode || (
            <div css={sx.cheerImg}>
              <Image
                width="162px"
                height="80px"
                src="/img/diary/img-cheer-text.svg"
                alt=""
              />
            </div>
          )}
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

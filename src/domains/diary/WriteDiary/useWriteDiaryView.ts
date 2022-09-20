import { DiaryAtom } from "./../../../recoil/Diary/Diary.atom";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import DiaryApiService from "@/data/apis/diary/diary.api";
import { format } from "date-fns";

export const useWriteDiaryView = () => {
  const router = useRouter();
  const date = router.query?.date + "";
  const diary = useRecoilValue(DiaryAtom);

  // tab
  const [isWritingMode, setIsWritingMode] = useState(false);
  // diary text
  const [content, setContent] = useState(diary.content);

  //forwardRef 사용 권고
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFieldFocus = () => inputRef.current?.focus();

  // date 변환
  const customaDate = date == "undefined" ? new Date() : new Date(date);
  const titleDate = format(customaDate, "yyyy년 MM월 dd일");

  const lastUpdatedDate =
    diary.updatedAt.length == 0
      ? format(new Date(), "yyyy년 MM월 dd일 a h시 mm")
      : format(new Date(diary.updatedAt), "yyyy년 MM월 dd일 a h시 mm");

  // update diary
  const { mutate, data: newDiaryData } = useMutation(
    () => DiaryApiService.updateDiary(diary.id + "", content),
    {
      onSuccess: (res) => {
        handleRestate();
      },
      onError: (err) => {
        console.log(newDiaryData);
      },
    }
  );

  // functions
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmitClick = () => {
    mutate();
  };
  const handleEditClick = () => {
    setIsWritingMode(true);
    handleFieldFocus();
  };

  const handleRestate = () => {
    setIsWritingMode(false);
  };

  return {
    tabState: {
      title: titleDate,
      isWritingState: isWritingMode,
      onSubmit: handleSubmitClick,
      onEdit: handleEditClick,
      onRestate: handleRestate,
    },

    diaryState: {
      ref: inputRef,
      value: content,
      onChange: handleContentChange,
      placeholder:
        content === null
          ? "본인 외에는 그 누구도 나의 감정일기를 볼 수 없어요."
          : "",
      lastUpdatedDate: lastUpdatedDate,
    },
  };
};

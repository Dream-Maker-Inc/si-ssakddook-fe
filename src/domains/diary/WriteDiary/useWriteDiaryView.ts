import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { diaryRecords } from "../model/diary.model";
import DiaryApiService from "@/data/apis/diary/diary.api";
import { format } from "date-fns";

export const useWriteDiaryView = () => {
  const router = useRouter();
  const date = router.query.date + "";
  //forwardRef 사용 권고
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFieldFocus = () => inputRef.current?.focus();

  // date 변환
  const customaDate = new Date(date);
  const testDate = format(customaDate, "yyyy년 MM월 dd일");

  // diary
  const [content, setContent] = useState(diaryRecords.content);
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const { mutate, data } = useMutation(
    (body: any) => DiaryApiService.createDiary(body),
    {
      onSuccess: (res) => {
        router.push(RoutePath.Diary);
      },
      onError: (err) => {
        console.log(data);
      },
    }
  );

  const body = {
    content: content,
    date: new Date().toISOString().split("T")[0],
  };

  // tab
  const [isWritingMode, setIsWritingMode] = useState(false);
  const handleSubmitClick = () => {
    mutate(body);
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
      title: testDate,
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
    },
  };
};

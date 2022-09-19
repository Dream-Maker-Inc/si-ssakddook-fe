import { DiaryItemResponse } from "@/data/apis/diary/diary.dto";
import { atom } from "recoil";

export const DiaryAtom = atom<DiaryItemResponse>({
  key: "diaryAtom",
  default: {
    id: 0,
    authorId: 0,
    content: "",
    date: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
  },
});

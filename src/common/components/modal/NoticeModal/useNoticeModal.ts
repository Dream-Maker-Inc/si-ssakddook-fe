import { useState } from "react";

export const useNoticeModal = () => {
  // notice modal
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [noticeText, setNoticeText] = useState("");

  // notice modal functions
  const handleNoticeOpen = () => setIsNoticeOpen(true);
  const handleNoticeClose = () => setIsNoticeOpen(false);
  const handleNoticeTextChange = (v: string) => setNoticeText(v);

  return {
    isNoticeOpen: isNoticeOpen,
    onNoticeClose: handleNoticeClose,
    onNoticeOpen: handleNoticeOpen,
    noticeText: noticeText,
    onNoticeTextChange: handleNoticeTextChange,
  };
};

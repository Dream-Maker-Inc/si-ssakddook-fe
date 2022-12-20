import { RoutePath } from "@/constants/Path";
import { useRouter } from "next/router";
import { useState } from "react";
import { Regex } from "@/utils/validation/common/CommonRegex";
import MemberApiService from "@/data/apis/member/member.api";
import { useMutation } from "react-query";
import { isApiFailedResponse } from "@/data/statusCode/FailedResponse";
export const useChangePasswordView = () => {
  const router = useRouter();
  const [oldPassword, setCurrPw] = useState("");
  const [newPassword, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const handleModalOpen = () => setIsModelOpen(true);
  const handleModalClose = () => setIsModelOpen(false);

  const handleNoticeOpen = () => setIsModelOpen(true);
  const handleNoticeClose = () => setIsModelOpen(false);

  const handleCurrPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrPw(e.target.value);
  };
  const handleNewPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPw(e.target.value);
  };
  const handleConfirmPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPw(e.target.value);
  };

  const isConfirmPwError =
    confirmPw !== newPassword && confirmPw !== "" && newPassword !== ""
      ? true
      : false;

  const newPwValidation = Regex.password.test(newPassword);
  const isNewPwError = newPassword !== "" && !newPwValidation;

  const { mutate } = useMutation(
    () => MemberApiService.updatePassword(oldPassword, newPassword),
    {
      onSuccess: (res) => {
        if (isApiFailedResponse(res)) {
          handleModalClose();
          console.log(res);
          if (res.statusCode === "JE0004") {
            alert("기존 비밀번호를 다시 입력해주세요.");
          } else {
            alert("해당 비밀번호는 사용할 수 없습니다.");
          }
        } else {
          handleModalClose();
          router.push(RoutePath.MyInformation);
        }
      },
      onError: async (err) => {
        await handleModalClose();
        await handleNoticeOpen();
        console.log(err);
      },
    }
  );

  const onSubmit = () => {
    mutate();
  };

  return {
    currPwState: {
      value: oldPassword,
      onChange: handleCurrPwChange,
    },
    newPwState: {
      value: newPassword,
      onChange: handleNewPwChange,
      error: isNewPwError,
      helperText: isNewPwError ? "비밀번호 형식을 맞춰주세요" : "",
    },
    confirmPwState: {
      value: confirmPw,
      onChange: handleConfirmPwChange,
      error: isConfirmPwError,
      helperText: isConfirmPwError
        ? "입력하신 새 비밀번호와 일치하지 않습니다."
        : "",
    },

    tabState: {
      title: "비밀번호 변경",
      onActive:
        oldPassword !== "" &&
        newPassword !== "" &&
        confirmPw != "" &&
        newPassword === confirmPw,
      onClick: handleModalOpen,
    },
    modalState: {
      changeModal: {
        isOpen: isModelOpen,
        onClose: handleModalClose,
        onContinue: onSubmit,
        editValue: "비밀번호",
      },
      noticeModal: {
        isOpen: isNoticeOpen,
        onClose: handleNoticeClose,
        text: "비밀번호를 다시 입력해주세요.",
      },
    },
  };
};

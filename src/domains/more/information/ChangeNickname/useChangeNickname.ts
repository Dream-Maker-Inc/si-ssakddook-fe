import { RoutePath } from "@/constants/Path";
import { useUpdateNickname } from "@/data/apis/member/useMemberApiHooks";
import { useRouter } from "next/router";
import { useState } from "react";

export const useChangeNickname = () => {
  const router = useRouter();

  const [nickname, setNickname] = useState("");
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const onActive = nickname !== "" ? true : false;

  // change nickname api
  const id = localStorage.getItem("id");
  const { mutate, isSuccess, isError } = useUpdateNickname(id!!, nickname);
  if (isSuccess) {
    console.log("nickname change success");
    router.push(RoutePath.MyInformation);
  }
  if (isError) {
    console.log("nickname change failed");
  }
  const onSubmit = () => {
    mutate();
  };

  return {
    nicknameState: {
      value: nickname,
      onChange: handleNicknameChange,
    },

    tabState: {
      title: "닉네임 변경하기",
      onActive: onActive,
      onClick: onSubmit,
    },
  };
};

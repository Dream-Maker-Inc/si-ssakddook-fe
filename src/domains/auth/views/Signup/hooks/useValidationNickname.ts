import { useValidateNickname } from "@/data/apis/member/useMemberApiHooks";
import { MemberAtom } from "@/recoil/Member/Member.atom";
import { Regex } from "@/utils/validation/common/CommonRegex";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

export const useValidationNickname = () => {
  // nickname
  // 닉네임 값
  const [nickname, setNickname] = useState("");
  const serRecoil = useSetRecoilState(MemberAtom);

  // 중복 확인 요청 여부
  const [isRequestedNicknameValidation, setIsRequestedNicknameValidation] =
    useState(false);

  // api
  const { mutate, isSuccess, data, isError, error } =
    useValidateNickname(nickname);

  // 닉네임 형식 검사
  const isValidNickname = Regex.nickname.test(nickname);

  // button
  const isNicknameValidationButotnDisabled =
    isRequestedNicknameValidation || !isValidNickname;

  // functions
  const handleNicknameChange = (e: string) => {
    setIsRequestedNicknameValidation(false);
    setNickname(e);
    serRecoil((old) => ({
      ...old,
      member: {
        ...old.member,
        nickname: e,
      },
    }));
  };

  const handleRequestNicknameValidation = () => {
    mutate();
    setIsRequestedNicknameValidation(true);
  };

  const getNicknameHelperText = () => {
    if (nickname === "") return "";

    if (!isValidNickname) return "닉네임 형식을 확인해주세요.";

    if (!isRequestedNicknameValidation) return;

    return isRequestedNicknameValidation && data?.isValid
      ? "닉네임을 사용할 수 있어요"
      : "닉네임을 사용할 수 없어요";
  };

  // 서버 닉네임 중복확인 성공 여부
  const isNicknameValidationPassed = data?.isValid ?? false;

  // 이메일 텍스트 필드 헬퍼 텍스트
  const nicknameHelperText = getNicknameHelperText();
  const nicknameHelperTextColor = isValidNickname ? "primary" : "error";
  const isNicknameError = nickname !== "" && !isValidNickname;

  return {
    nickname,
    handleNicknameChange,
    isNicknameError,
    isNicknameValidationPassed,
    nicknameHelperText,
    nicknameHelperTextColor,
    isNicknameValidationButotnDisabled,
    handleRequestNicknameValidation,
  };
};

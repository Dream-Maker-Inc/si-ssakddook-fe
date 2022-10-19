import { PrevButton } from "@/common/components/button/PrevButton";
import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import {
  AgreementArticle,
  PasswordArticle,
  SignupTitleWithDesc,
  ValidationArticle,
} from "../components";
import { useSignupView } from "../hooks/useSignupView";

export const SignupView = () => {
  const {
    emailState,
    nicknameState,
    passwordState,
    confirmPasswordState,
    checkboxState,
    buttonState,
  } = useSignupView();

  const handleSubmit = (e: React.FormEvent) => {
    buttonState.onClick();
    e.preventDefault;
  };
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton location={RoutePath.Home} />
        <SignupTitleWithDesc
          title="회원가입"
          desc="회원가입을 위한 필수 정보를 입력해주세요."
        />
        <div css={sx.articleWrapper}>
          <ValidationArticle
            titleProps={{
              title: "아이디 (이메일)",
              desc: "아이디로 사용하실 이메일 주소를 정확히 입력해 주세요.",
            }}
            fieldProps={{
              placeholder: "account@ssakduk.com",
              value: emailState.value,
              onChange: (e) => emailState.onChange(e.target.value),
              error: emailState.isError,
              helperText: (
                <Typography
                  variant="caption"
                  color={emailState.helperText.color}
                >
                  {emailState.helperText.text}
                </Typography>
              ),
            }}
            buttonProps={{
              onClick: emailState.button.onClick,
              disabled: emailState.button.disabled,
            }}
          />
          <ValidationArticle
            titleProps={{
              title: "닉네임",
              desc: "커뮤니티에서 활동 시 보여지는 실제 닉네임을 설정해 주세요.",
            }}
            fieldProps={{
              value: nicknameState.value,
              onChange: (e) => nicknameState.onChange(e.target.value),
              error: nicknameState.isError,
              helperText: (
                <Typography
                  variant="caption"
                  color={nicknameState.helperText.color}
                >
                  {nicknameState.helperText.text}
                </Typography>
              ),
            }}
            buttonProps={{
              onClick: nicknameState.button.onClick,
              disabled: nicknameState.button.disabled,
            }}
          />
          <PasswordArticle
            titleProps={{
              title: "비밀번호",
              desc: "영문과 특수문자가 포함된 8자 이상의 비밀번호를 설정해 주세요.",
            }}
            fieldProps={{
              type: "password",
              value: passwordState.value,
              onChange: (e) => passwordState.onChange(e.target.value),
              error: passwordState.isError,
              helperText: passwordState.helperText,
            }}
          />
          <PasswordArticle
            titleProps={{
              title: "비밀번호 확인",
              desc: "비밀번호를 다시 한 번 입력해 주세요.",
            }}
            fieldProps={{
              type: "password",
              value: confirmPasswordState.value,
              onChange: (e) => confirmPasswordState.onChange(e.target.value),
              error: confirmPasswordState.isError,
              helperText: (
                <Typography
                  variant="caption"
                  color={confirmPasswordState.color}
                >
                  {confirmPasswordState.helperText}
                </Typography>
              ),
            }}
          />
          <AgreementArticle
            titleProps={{
              title: "이용 약관 동의",
              desc: "서비스 이용에 필요한 약관에 동의해 주세요.",
            }}
            result={checkboxState.result!!}
            checkedHandler={checkboxState.checkedHandler}
          />
        </div>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={buttonState.disabled}
          onClick={buttonState.onClick}
        >
          <Typography variant="body1" color="white" lineHeight="1">
            본인 인증하기
          </Typography>
        </Button>
      </div>
    </div>
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
    display: flex;
    flex-direction: column;

    position: relative;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  articleWrapper: css`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
  `,
  buttonWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: 14px;

    position: absolute;
    bottom: 0px;
  `,
};

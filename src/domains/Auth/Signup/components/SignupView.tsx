import { PrevButton } from "@/common/components/button/PrevButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { AgreementArticle } from "./AgreementArticle";
import { PasswordArticle } from "./PasswordArticle";
import { useSignupView } from "./useSignupView";
import { ValidationArticle } from "./ValidationArticle";

export const SignupView = () => {
  const { idState, nicknameState, pwState, confirmPwState } = useSignupView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton location={RoutePath.Home} />
        <TitleWithDesc
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
              value: idState.value,
              onChange: idState.onChange,
              error: idState.error,
              helperText: (
                <Typography variant="caption" color={idState.color}>
                  {idState.helperText}
                </Typography>
              ),
            }}
            buttonProps={{
              onClick: idState.onValidatorClick,
              disabled: idState.disabled,
            }}
          />
          <ValidationArticle
            titleProps={{
              title: "닉네임",
              desc: "커뮤니티에서 활동 시 보여지는 실제 닉네임을 설정해 주세요.",
            }}
            fieldProps={{
              value: nicknameState.value,
              onChange: nicknameState.onChange,
              error: nicknameState.error,
              helperText: (
                <Typography variant="caption" color={nicknameState.color}>
                  {nicknameState.helperText}
                </Typography>
              ),
            }}
            buttonProps={{
              onClick: nicknameState.onValidatorClick,
              disabled: nicknameState.disabled,
            }}
          />
          <PasswordArticle
            titleProps={{
              title: "비밀번호",
              desc: "영문 대문자와 특수문자가 포함된 8자 이상의 비밀번호를 설정해 주세요.",
            }}
            fieldProps={{
              type: "password",
              value: pwState.value,
              onChange: pwState.onChange,
              error: pwState.error,
              helperText: pwState.helperText,
            }}
          />
          <PasswordArticle
            titleProps={{
              title: "비밀번호 확인",
              desc: "비밀번호를 다시 한 번 입력해 주세요.",
            }}
            fieldProps={{
              type: "password",
              value: confirmPwState.value,
              onChange: confirmPwState.onChange,
              error: confirmPwState.error,
              helperText: (
                <Typography variant="caption" color={confirmPwState.color}>
                  {confirmPwState.helperText}
                </Typography>
              ),
            }}
          />
          <AgreementArticle
            titleProps={{
              title: "이용 약관 동의",
              desc: "서비스 이용에 필요한 약관에 동의해 주세요.",
            }}
            checkboxProps={{}}
          />
        </div>

        <Button fullWidth variant="contained" color="primary">
          <Typography variant="body1" color="white">
            다음
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

    font-size: 12px;

    position: absolute;
    bottom: 0px;
  `,
};

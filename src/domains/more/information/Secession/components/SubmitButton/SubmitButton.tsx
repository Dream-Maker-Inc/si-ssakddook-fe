import { Button, ButtonProps } from "@mui/material";

export const SubmitButton = (p: ButtonProps) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ fontSize: "12px" }}
      {...p}
    >
      회원 탈퇴하기
    </Button>
  );
};

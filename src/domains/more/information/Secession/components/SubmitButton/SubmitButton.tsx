import { Button, ButtonProps, Typography } from "@mui/material";

export const SubmitButton = (p: ButtonProps) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ fontSize: "14px" }}
      {...p}
    >
      <Typography variant="body1" color="white" lineHeight="1">
        회원 탈퇴하기
      </Typography>
    </Button>
  );
};

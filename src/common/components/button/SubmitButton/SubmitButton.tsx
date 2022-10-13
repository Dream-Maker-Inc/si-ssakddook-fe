import { CheckRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type TSubmitButton = {
  disabled: boolean;
  onSubmit: () => void;
};
export const SubmitButton = ({ onSubmit, disabled }: TSubmitButton) => {
  return (
    <IconButton onClick={onSubmit} disabled={disabled} edge={"end"}>
      <CheckRounded color={disabled ? "inherit" : "success"} />
    </IconButton>
  );
};

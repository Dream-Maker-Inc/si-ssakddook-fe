import { CheckRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

type TSubmitButton = {
  location?: string;
};
export const SubmitButton = ({ location }: TSubmitButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation} edge={"end"}>
      <CheckRounded color="success" />
    </IconButton>
  );
};

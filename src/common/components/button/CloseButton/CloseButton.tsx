import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

type CloseButton = {
  location?: string;
};
export const CloseButton = ({ location }: CloseButton) => {
  const router = useRouter();
  const nextLocation = () => {
    location == null ? router.back() : router.push(location);
  };
  return (
    <IconButton onClick={nextLocation} edge={"start"}>
      <CloseRounded />
    </IconButton>
  );
};

import { Typography, TypographyProps } from "@mui/material";

export const Title = (p: TypographyProps) => {
  return (
    <Typography
      variant="h1"
      mt="36px"
      mb="60px"
      width="100%"
      textAlign="left"
      {...p}
    />
  );
};

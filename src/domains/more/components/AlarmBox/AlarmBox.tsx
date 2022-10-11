import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Switch, Typography } from "@mui/material";

type AlarmBoxProps = {
  title: string;
  desc: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AlarmBox = ({
  title,
  desc,
  isChecked,
  onChange,
}: AlarmBoxProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <Typography variant="h3" color={"black"}>
          {title}
        </Typography>
        <Typography variant="h4" color={LightColor.Gray100}>
          {desc}
        </Typography>
      </div>
      <div css={sx.toggle}>
        <Switch
          checked={isChecked}
          onChange={onChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 72px;
    padding: 0 18px;
    border-bottom: 1px solid ${LightColor.Gray500};

    position: relative;

    cursor: pointer;

    display: flex;
    align-items: center;
  `,
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  `,

  toggle: css`
    position: absolute;
    top: 50%;
    right: 11px;
    transform: translateY(-50%);
  `,
};
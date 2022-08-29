import { css } from "@emotion/react";
import { IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { BoardPrevButton } from "../../button/BoardPrevButton";

type SearchTabProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchTab = ({ value, onChange }: SearchTabProps) => {
  return (
    <div css={sx.tabContainer}>
      <BoardPrevButton />
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        placeholder={"검색어를 입력하세요."}
        variant="standard"
        css={sx.searchField}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <IconButton>
              <Image
                width="16px"
                height="16px"
                src="/img/tab/icon-search.svg"
                alt=""
              />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

const sx = {
  tabContainer: css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;

    gap: 12px;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  searchField: css`
    font-size: 16px;

    input {
      font-size: 16px;

      ::placeholder {
        font-size: 16px;
      }
    }
  `,
};
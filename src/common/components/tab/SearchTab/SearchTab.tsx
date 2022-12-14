import { css } from "@emotion/react";
import { IconButton, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { BoardPrevButton } from "../../button/BoardPrevButton";
import SearchIcon from "@/img/tab/icon-search.svg";

type SearchTabProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onBack: () => void;
};

export const SearchTab = ({
  value,
  onChange,
  onSearch,
  onBack,
}: SearchTabProps) => {
  return (
    <div css={sx.tabContainer}>
      <BoardPrevButton onClick={onBack} />
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        placeholder={"검색어를 입력하세요."}
        variant="standard"
        css={sx.searchField}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.key == "Enter" && onSearch();
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <IconButton onClick={onSearch}>
              <Image width="16px" height="16px" src={SearchIcon} alt="" />
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
    gap: 4px;

    padding-right: 16px;
    padding-left: 8px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  searchField: css`
    font-size: 18px;

    input {
      font-size: 18px;

      ::placeholder {
        font-size: 18px;
      }
    }
  `,
};

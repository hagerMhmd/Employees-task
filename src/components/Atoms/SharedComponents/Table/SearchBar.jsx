import React from "react";
import { IconButton, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useThemePalette } from "../../../../common/hooks/theme_palette.js";

const SearchBar = ({ filterList }) => {
  const { lightGray } = useThemePalette();

  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      gap={2}
      width={"100%"}
      height={"100%"}
    >
      {filterList?.map((list, index) => {
        return (
          <Stack
            key={index}
            flexDirection="row"
            borderRadius="50px"
            width={"100%"}
            height={"100%"}
            border={`1.69px solid ${lightGray}`}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, width: "100%", bgcolor: "transparent" }}
              placeholder={list?.placeholder}
              type={"text"}
              onChange={(event) => {}}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default SearchBar;

import { Stack, Typography } from "@mui/material";
import React from "react";
import { useThemePalette } from "../../../../common/hooks/theme_palette.js";

export default function DetailsList({ data, isDetails }) {
  const { lightGray } = useThemePalette();
  const { label, name } = data;
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      sx={{ flexDirection: "row" }}
      width={isDetails ? "45%" : "80%"}
      height="100%"
    >
      <Stack width="24%">
        <Typography color={lightGray} fontWeight={500} fontSize={"12px"}>
          {label}
        </Typography>
      </Stack>
      <Stack width={isDetails ? "34%" : "45%"}>
        <Typography fontSize={"14px"}>{name}</Typography>
      </Stack>
    </Stack>
  );
}

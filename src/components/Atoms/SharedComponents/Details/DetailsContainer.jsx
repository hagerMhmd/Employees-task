import { Stack, Typography } from "@mui/material";
import React from "react";
import { useThemePalette } from "../../../../common/hooks/theme_palette.js";
import { useSearchParams } from "react-router-dom";

export default function DetailsContainer({ title, children }) {
  const { silverGray } = useThemePalette();
  let [searchParams] = useSearchParams();
  const display = searchParams.get("type");
  const isDetails = display === "details";
  return (
    <>
      <Stack
        bgcolor={"white"}
        borderRadius={isDetails ? "7px" : "15px"}
        sx={{
          boxShadow: isDetails && "0px 3px 15px 0px rgba(238, 238, 238, 0.5)",
          border: !isDetails && "0.75px solid rgba(248, 249, 250, 1)",
        }}
        height="100%"
        p={isDetails ? 2 : 1}
        gap={isDetails && 1}
      >
        <Typography
          p={isDetails ? 2 : 1}
          fontSize={"14px"}
          fontWeight={500}
          borderRadius={"7px"}
          bgcolor={silverGray}
          mb='10px'
        >
          {title}
        </Typography>
        {children}
      </Stack>
    </>
  );
}

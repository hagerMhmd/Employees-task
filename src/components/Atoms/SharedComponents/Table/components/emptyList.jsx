import React from "react";
import { Stack, Typography } from "@mui/material";
const EmptyList = ({ emptyListMsg = "No Results" }) => {
  return (
    <Stack justifyContent={"center"} direction="row">
      <Typography sx={{ fontSize: "32px", color: "gray" }}>
        {emptyListMsg}
      </Typography>
    </Stack>
  );
};

export default EmptyList;

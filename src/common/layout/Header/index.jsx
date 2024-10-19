import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { icons } from "../../../assets/AssetHelper.js";
import { useThemePalette } from "../../hooks/theme_palette.js";

const Header = () => {
  const { gray, lightGray } = useThemePalette();
  return (
    <>
      <Stack
        bgcolor="white"
        py={2}
        px={3}
      >
        {/* --------------  NOTIFICATION & USER INFO -------------- */}
        <Stack
          direction="row"
          alignItems="center"
          sx={{ justifyContent: "space-between" }}
          gap={1}
        >
          <Stack direction="row" alignItems="center">
            <Typography color={gray} fontSize={"26px"} fontWeight={500}>
              {" "}
              Employees
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            {/* -------------- NOTIFICATION  -------------- */}
            <Stack direction={"row"} gap={2}>
              <img src={icons.messages} alt="messages icon" />
              <img src={icons.notifications} alt="messages icon" />
            </Stack>
            {/* --------------  USER INFO  -------------- */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              {/* -------------- AVATAR -------------- */}
              <Avatar
                alt="Mohamed Kamal"
                src={icons.profileImg}
                sx={{ borderRadius: "50%" }}
              />
              {/* -------------- USERNAME -------------- */}
              <Box>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography fontWeight="700" color={gray} fontSize="14px">
                    Mohamed Kamal
                  </Typography>
                  <ExpandMoreIcon />
                </Stack>
                <Typography
                  fontWeight="500"
                  color={lightGray}
                  fontSize="10.5px"
                >
                  Admin
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { icons } from "assets/AssetHelper";
import { useThemePalette } from "../../../hooks/theme_palette.js";

export default function NavbarContent({ handleDrawerToggle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [expanded, setExpanded] = useState(false);
  const { primaryColor } = useThemePalette();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const sidebarNavs = [
    { title: "Dashboard", path: "", type: "normal", icon: icons.chart },
    { title: "teams", path: "", type: "normal", icon: icons.users },
    { title: "employees", path: "/", type: "normal", icon: icons.employee },
    {
      title: "Settings",
      path: "",
      type: "",
      icon: icons.settings,
      list: [
        {
          title: "Terms & Conditions",
          path: "",
          type: "normal",
        },
        {
          title: "Privacy policy",
          path: "",
          type: "normal",
        },
        {
          title: "Cancellation Policy",
          path: "",
          type: "normal",
        },
      ],
    },
  ].filter((item) => item);
  return (
    <Stack
      sx={{
        backgroundColor: "primary.main",
        overflowY: "auto",
        overflowX: "hidden",
      }}
      height="100vh"
    >
      {/* -------------------- LOGO -------------------- */}
      <Stack sx={{ py: 3 }}>
        <Stack justifyContent={"center"} alignItems={"center"} pt={4} pb={3}>
          <Box
            component="img"
            src={icons.Logo}
            loading="lazy"
            width="50%"
            alt=""
          />
        </Stack>
      </Stack>
      {/* -------------------- NAVS -------------------- */}
      <Stack direction="column" spacing={2} py={3}>
        {sidebarNavs?.map((data, index) => {
          return data?.type === "normal" ? (
            <Stack
              direction="row"
              key={index}
              px={1.5}
              sx={{
                bgcolor: path === data.path && "secondary.main",
                height: "50px",
                alignItems: "center",
                gap: 1,
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => {
                setExpanded(false);
                navigate(data?.path);
              }}
            >
              <Box component="img" src={data?.icon} alt="" width="24px" />
              <NavLink
                to={data?.path}
                style={{
                  marginInlineStart: "5px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                  color: path === data.path ? primaryColor : "white",
                }}
              >
                {data?.title}
              </NavLink>
            </Stack>
          ) : (
            <Accordion
              key={index}
              sx={{
                width: "100%",
                border: "none !important",
                boxShadow: "none",
                background: "transparent",
                padding: "0",
              }}
              className="nav-accordion"
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosIcon
                    sx={{ transform: "rotate(90deg)", color: "white" }}
                    fontSize="small"
                  />
                }
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                sx={{ padding: "0", paddingX: "15px" }}
              >
                <Stack direction="row" alignItems="center" gap={1}>
                  <Box component="img" src={data?.icon} alt="" width="24px" />
                  <NavLink
                    to={data?.path ? data?.path : null}
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textDecoration: "none",
                      color: "white",
                      marginInlineStart: "5px",
                    }}
                    onClick={handleDrawerToggle && handleDrawerToggle}
                  >
                    {data?.title}
                  </NavLink>
                </Stack>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#F0F3FF",
                  height: "100%",
                  padding: "0",
                  width: "80%",
                  mx: "auto",
                  backgroundColor: "transparent",
                }}
              >
                {data?.list?.map((val, idx) => {
                  return (
                    <Typography
                      key={idx}
                      sx={{
                        display: "flex",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <NavLink
                        to={val?.path}
                        style={{
                          fontWeight: "400",
                          textDecoration: "none",
                          color: "white",
                          padding: "10px",
                          width: "100%",
                          backgroundColor: path === val?.path && "white",
                          borderRadius: "4px",
                        }}
                        onClick={handleDrawerToggle && handleDrawerToggle}
                      >
                        <Stack flexDirection="row" alignItems="center" gap={1}>
                          <Typography fontSize={"14px"}>
                            {" "}
                            {val?.title}
                          </Typography>
                        </Stack>
                      </NavLink>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </Stack>
  );
}

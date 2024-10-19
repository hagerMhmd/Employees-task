import { Button, FormControlLabel, Stack, Typography } from "@mui/material";
import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb.jsx";
import DetailsList from "./DetailsList.jsx";
import DetailsContainer from "./DetailsContainer.jsx";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useSearchParams } from "react-router-dom";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const DetailsUse = ({ breadcrumbs, data }) => {
  let [searchParams] = useSearchParams();
  const display = searchParams.get("type");
  const isDetails = display === "details";
  const detailsData = [
    {
      label: "Employee",
      name: (
        <Stack direction={"row"} gap={1} alignItems={"center"} width="100%">
          <img src={data?.image} alt={data?.name} width="32px" height="32px" />
          <Typography fontSize={"14px"}>{data?.name}</Typography>
        </Stack>
      ),
    },
    {
      label: "Role",
      name: data?.role,
    },
    {
      label: "Role",
      name: data?.role,
    },
    {
      label: "E-Mail",
      name: data?.email,
    },
    {
      label: "Phone",
      name: data?.phone,
    },
  ];
  const dateData = [{ label: "Date", name: data?.startDate }];
  const activeData = [
    {
      label: "Status",
      name: (
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <FormControlLabel
            checked={data?.isActive}
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </Stack>
      ),
    },
  ];
  return (
    <Stack gap={isDetails ? 3 : 1}>
      {isDetails && (
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Breadcrumb data={breadcrumbs} />
          <Button variant="contained">Edit employee</Button>
        </Stack>
      )}

      <DetailsContainer title={"Summary"}>
        <Stack gap={isDetails ? 3 : 1}>
          {detailsData?.map((data) => (
            <DetailsList key={data?.id} data={data} isDetails={isDetails} />
          ))}
        </Stack>
      </DetailsContainer>
      <Stack direction={"row"} justifyContent={"space-between"} width="100%">
        <Stack width="49%">
          <DetailsContainer title={"Date"}>
            {dateData?.map((data) => (
              <DetailsList key={data?.id} data={data} isDetails={isDetails} />
            ))}
          </DetailsContainer>
        </Stack>
        <Stack width="49%">
          <DetailsContainer title={"Active"}>
            {activeData?.map((data) => (
              <DetailsList key={data?.id} data={data} isDetails={isDetails} />
            ))}
          </DetailsContainer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsUse;

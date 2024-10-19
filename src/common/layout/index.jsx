import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNavbar from "./SideNavbar";

const Layout = () => {
  return (
    <Stack sx={{ flexDirection: "row" }}>
      <SideNavbar />
      <Stack sx={{ width: "100%", backgroundColor: "#F5F5F5" }}>
        <Header />
        <Stack py={2}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Layout;

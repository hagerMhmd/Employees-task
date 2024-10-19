import {  Stack } from "@mui/material";
import NavbarContent from "./Components/NavbarContent";

const SideNavbar = () => {
  return (
    <Stack
      sx={{
        transition: "0.3s",
        backgroundColor: "primary.main",
      }}
      width={"17.08%"}
    >
      <Stack height="100vh" direction="column" sx={{ transition: "0.1s" }}>
        <NavbarContent />
      </Stack>
    </Stack>
  );
};

export default SideNavbar;

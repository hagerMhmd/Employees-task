import { Button, Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar.jsx";

const Header = ({
  createBtnTitle,
  createBtnFun,
  CreateBtnIcon,
  filterList,
}) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack width={{ xs: "100%", md: "79%" }}>
        <SearchBar filterList={filterList} />
      </Stack>
      <Stack width={{ xs: "100%", md: "19%" }}>
        {createBtnTitle && (
          <Button
            onClick={createBtnFun}
            variant="contained"
            sx={{
              p: 1.3,
              textTransform: "none",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "primary",
              width: "100%",
              "&:hover": {
                backgroundColor: "primary",
              },
            }}
          >
            {CreateBtnIcon && <CreateBtnIcon />}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {createBtnTitle}
            </Typography>
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Header;

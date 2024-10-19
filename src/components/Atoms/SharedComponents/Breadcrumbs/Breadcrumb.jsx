import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useThemePalette } from "../../../../common/hooks/theme_palette.js";

const Breadcrumb = ({ data }) => {
  const { gray } = useThemePalette();
  return (
    <Stack
      mb={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      fontWeight="500"
      width="fit-content"
    >
      <Breadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: "#919293" }} />
        }
        aria-label="breadcrumb"
      >
        {data?.map((breadcrumbs, index) => {
          if (breadcrumbs)
            return breadcrumbs?.active ? (
              <NavLink
                to={breadcrumbs?.path}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Typography
                  sx={{
                    fontSize: "26px",
                    color: gray,
                  }}
                >
                  {breadcrumbs?.title}
                </Typography>
              </NavLink>
            ) : (
              <Typography
                key={index}
                sx={{ fontSize: "20px", color: "#919293" }}
              >
                {breadcrumbs?.title}
              </Typography>
            );
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default Breadcrumb;

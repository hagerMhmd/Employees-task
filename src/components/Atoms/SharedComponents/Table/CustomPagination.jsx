import { Grid, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useThemePalette } from "../../../../common/hooks/theme_palette.js";

const CustomPagination = ({
  total_count,
  totalPage,
  size = "small",
  shape = "rounded",
  paginationPage,
  handlePageChange,
}) => {
  const { primaryColor, darkSliver } = useThemePalette();
  return (
    totalPage > 1 && (
      <Grid
        container
        item
        justifyContent={"center"}
        xs={12}
        mb={7.5}
        mt={5}
        bgcolor="white"
      >
        <Pagination
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
              {...item}
              color="secondary"
              sx={{
                "&.MuiPaginationItem-root": {
                  color: item.selected ? primaryColor : darkSliver,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  margin: "0 12px",
                  border: item.selected
                    ? `2px solid ${primaryColor}`
                    : `2px solid ${darkSliver}`,
                  "&:hover": {
                    backgroundColor: item.selected ? primaryColor : darkSliver,
                    color: "white",
                  },
                },
                "&.MuiPaginationItem-previous, &.MuiPaginationItem-next": {
                  color: item.selected ? "darkred" : "red",
                  "&:hover": {
                    color: "darkred",
                  },
                },
              }}
              // sx={{
              //   // Style for pagination item numbers
              //   "&.MuiPaginationItem-root": {
              //     backgroundColor: "lightblue", // Change the background color
              //     color: "darkblue", // Change the text color
              //     borderRadius: shape === "rounded" ? "8px" : "0", // Control border radius
              //     "&:hover": {
              //       backgroundColor: "red", // Change background color on hover
              //       color: "white", // Change text color on hover
              //     },
              //   },
              //   // Style for previous and next arrows
              //   "&.MuiPaginationItem-previous, &.MuiPaginationItem-next": {
              //     color: "red", // Change arrow color
              //     "&:hover": {
              //       color: "darkred", // Change arrow color on hover
              //     },
              //   },
              // }}
            />
          )}
          count={Math.ceil(total_count / 10)}
          size={size}
          shape={shape}
          page={paginationPage}
          onChange={(e, data) => handlePageChange(data)}
        />
      </Grid>
    )
  );
};

export default CustomPagination;

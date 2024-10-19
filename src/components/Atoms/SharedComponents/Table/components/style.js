import styled from "@emotion/styled";
import { TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  borderTop: "5px solid #FAFAFA",
}));

export const TableCellStyle = (index, columns) => {
  return {
    color: "#1A1A1A",
    fontWeight: "400",
    fontSize: "16px",
    position: "relative",
    cursor:  "pointer",
    textAlign: "start",
  };
};
export const TableContainerStyle = {
  boxShadow: "none",
  borderRadius: "8px 8px 0px 0px",
};

import React, { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import {
  StyledTableRow,
  TableCellStyle,
  TableContainerStyle,
} from "../../Atoms/SharedComponents/Table/components/style.js";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomPagination from "../../Atoms/SharedComponents/Table/CustomPagination.jsx";
import EmptyList from "../../Atoms/SharedComponents/Table/components/emptyList.jsx";
import Header from "../../Atoms/SharedComponents/Table/header.jsx";

const CustomTable = ({ table }) => {
  const {
    list,
    Columns,
    createBtnTitle,
    createBtnFun,
    CreateBtnIcon,
    total_count,
    rowData,
    filterList,
    paginationPage,
    handlePageChange,
  } = table;
  let [searchParams] = useSearchParams();
  const display = searchParams.get("type");
  const navigate = useNavigate();
  const data = useMemo(
    () =>
      list &&
      list?.map((value, i) => {
        return {
          ...value,
        };
      }),
    [list]
  );

  const columns = useMemo(
    () =>
      Columns?.map((column) => {
        return {
          Header: column.Header,
          accessor: column.accessor,
          sort: column?.sort,
          clickable: column?.clickable,
        };
      }),
    [Columns]
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        useControlledState: (state) => {
          return React.useMemo(
            () => ({
              ...state,
            }),
            [state]
          );
        },
        initialState: {},
        manualPagination: true,
        pageCount: Math.ceil(total_count / 10),
        autoResetHiddenColumns: false,
        autoResetSortBy: false,
        autoResetPage: false,
      },

      useGlobalFilter,
      usePagination
    );

  return (
    <>
      {!display && (
        <Stack
          gap={3}
          bgcolor="secondary.main"
          boxShadow={"0px 3px 15px 0px rgba(238, 238, 238, 0.5)"}
          borderRadius="5px"
          p={2}
        >
          <Header
            createBtnTitle={createBtnTitle}
            createBtnFun={createBtnFun}
            CreateBtnIcon={CreateBtnIcon}
            filterList={filterList}
          />
          {list.length == 0 ? (
            <EmptyList />
          ) : (
            <>
              <TableContainer sx={TableContainerStyle}>
                <Table
                  {...getTableProps()}
                  bg="white"
                  mb="6"
                  size="small"
                  aria-label="simple table"
                >
                  <TableHead>
                    {headerGroups.map((headerGroup, index) => (
                      <TableRow
                        {...headerGroup.getHeaderGroupProps()}
                        key={index}
                      >
                        {headerGroup.headers.map((column, index) => {
                          return (
                            <TableCell key={index} bg="inherit">
                              <Stack direction="row" alignItems={"center"}>
                                <>
                                  <Typography fontWeight="700" fontSize="14px">
                                    {column.render("Header")}
                                  </Typography>
                                </>
                              </Stack>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableHead>

                  <TableBody {...getTableBodyProps()} color="black">
                    {page?.map((row, index) => {
                      prepareRow(row);
                      return (
                        <StyledTableRow
                          key={index}
                          {...row.getRowProps()}
                          onClick={() => {
                            rowData(row.original);
                            navigate(`?type=details&id=${row?.original?.id}`);
                          }}
                        >
                          {row.cells.map((cell, index) => {
                            return (
                              <TableCell
                                key={index}
                                sx={TableCellStyle(index, columns)}
                                {...cell.getCellProps()}
                              >
                                {cell.render("Cell")}
                              </TableCell>
                            );
                          })}
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <CustomPagination
                totalPage={Math.ceil(total_count / 10)}
                total_count={total_count}
                paginationPage={paginationPage}
                handlePageChange={handlePageChange}
                data={list}
              />
            </>
          )}
        </Stack>
      )}
    </>
  );
};
export default CustomTable;

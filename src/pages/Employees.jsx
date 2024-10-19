import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeesTemplate from "templates/employees";
import { icons } from "../assets/AssetHelper.js";
import { useThemePalette } from "../common/hooks/theme_palette.js";
import { deleteEmployee } from "../services/modules/Employee/Actions.js";

function EmployeesPage() {
  const dispatch = useDispatch();
  const { green, red } = useThemePalette();
  const count = useSelector((state) => state?.employees?.employeesCount);
  const details = useSelector((state) => state);
  const [selectedRow, setSelectedRow] = useState({});
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const { employees } = useSelector((state) => state?.employees);

  // mappedData use for create custom cell to concat multi values or navigate button
  const mappedData = employees?.map((data, index) => {
    return {
      ...data,
      employee: (
        <>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
          >
            <img src={data.image} alt={data?.name} />
            {data?.name}
          </Stack>
        </>
      ),
      status: data?.isActive ? (
        <CheckCircleIcon sx={{ fontSize: "35px", color: green }} />
      ) : (
        <CancelIcon sx={{ fontSize: "35px", color: red }} />
      ),
      action: (
        <img
          onClick={(e) => {
            e?.stopPropagation();
            dispatch(deleteEmployee(data));
          }}
          src={icons.trash}
          alt="trash"
        />
      ),
    };
  });

  const rowData = (data) => {
    setSelectedRow(data);
  };
  console.log(selectedRow, "selectedRow");

  const filterList = [
    {
      type: "search",
      placeholder: "Search employees",
      onChange: (value) => {},
    },
  ];

  const breadcrumbs = [
    {
      active: true,
      path: "/",
      title: "Employees",
    },
    {
      active: false,
      path: "/",
      title: selectedRow?.name,
    },
  ];

  return (
    <>
      <EmployeesTemplate
        data={mappedData}
        count={count}
        paginationPage={page}
        handlePageChange={handlePageChange}
        rowData={rowData}
        details={details}
        breadcrumbs={breadcrumbs}
        filterList={filterList}
        selectedRow={selectedRow}
      />
    </>
  );
}

export default EmployeesPage;

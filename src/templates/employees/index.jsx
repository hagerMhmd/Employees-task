import React from "react";
import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { isAddEmployeeForm } from "../../services/modules/modal/Actions.js";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../components/Molecules/Models/FormModal.jsx";
import DetailsUse from "../../components/Atoms/SharedComponents/Details/details-use.jsx";
import { useSearchParams } from "react-router-dom";
import { PersonalDataStep } from "../../components/Organisms/PersonalDataStep.jsx";
import { ImageStep } from "../../components/Organisms/ImageStep.jsx";
import { PreviewStep } from "../../components/Organisms/previewStep.jsx";
import CustomTable from "components/Molecules/Crud";

const EmployeesTemplate = ({
  data,
  count,
  filterList,
  breadcrumbs,
  rowData,
  selectedRow,
  handlePageChange,
  paginationPage
}) => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const display = searchParams.get("type");
  const { isAddEmployeeFormOpen } = useSelector((state) => state?.modal);
  const steps = [
    { label: "personal data", component: PersonalDataStep },
    { label: "image", component: ImageStep },
    { label: "preview", component: PreviewStep },
  ];

  return (
    <Container maxWidth="xl">
      <CustomTable
        table={{
          list: data,
          createBtnTitle: "New employees",
          CreateBtnIcon: AddIcon,
          createBtnFun: () => dispatch(isAddEmployeeForm()),
          Columns: [
            { accessor: "employee", Header: "Employee" },
            { accessor: "role", Header: "Role" },
            { accessor: "email", Header: "E-Mail" },
            { accessor: "phone", Header: "Phone" },
            { accessor: "startDate", Header: "Start Date" },
            { accessor: "status", Header: "Active" },
            { accessor: "action", Header: "Actions" },
          ],
          total_count: count,
          rowData: rowData,
          filterList,
          paginationPage,
          handlePageChange
        }}
      />
      {display === "details" && (
        <DetailsUse data={selectedRow} breadcrumbs={breadcrumbs} />
      )}
      <FormModal
        open={isAddEmployeeFormOpen}
        handleClose={(_) => dispatch(isAddEmployeeForm())}
        btnTitle={"Add"}
        formTitle="Add New employees"
        steps={steps}
      />
    </Container>
  );
};

export default EmployeesTemplate;

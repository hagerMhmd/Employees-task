import { Divider, Modal, Stack, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useThemePalette } from "../../../common/hooks/theme_palette.js";
import HorizontalLinearStepper from "../../Atoms/SharedComponents/Stepper/Stepper.jsx";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../services/modules/Employee/Actions.js";
import { customAlphabet } from "nanoid";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const FormModal = ({ open, formTitle, handleClose, steps }) => {
  const { charcoalGray } = useThemePalette();
  const dispatch = useDispatch();
  const [errors, setErros] = useState();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "43%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "15px",
    py: 2,
    outline: "none",
    px: 3,
    padding: "20px",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    startDate: Yup.date().required("Start date is required"),
    role: Yup.string().required("Role is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    image: Yup.string(),
  });

  const handleSubmit = (values) => {
    const nanoid = customAlphabet("1234567890", 5);
    const newEmployee = {
      ...values,
      id: nanoid(),
      isActive: true,
    };
    dispatch(addEmployee(newEmployee));
    handleClose();
  };
  useEffect(() => {
    errors && Object.values(errors).forEach((error) => toast.error(error));
  }, [errors]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} justifyContent="center">
        <Stack
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
          direction={"row"}
          mb="7px"
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              textAlign: "center",
              color: charcoalGray,
            }}
          >
            {formTitle}
          </Typography>
          <CloseOutlinedIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
        </Stack>
        <Divider sx={{ border: "1px solid #F5F5F5", width: "100%" }} />
        <Stack my={2}>
          <Formik
            initialValues={{ image: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {(formikProps) => {
              if (Object.keys(formikProps?.errors).length) {
                setErros(formikProps?.errors);
              }
              return (
                <Form onSubmit={handleSubmit}>
                  <HorizontalLinearStepper
                    steps={steps}
                    formikProps={formikProps}
                  />
                </Form>
              );
            }}
          </Formik>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default FormModal;

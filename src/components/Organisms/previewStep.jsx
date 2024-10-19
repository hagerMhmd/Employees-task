import { Box } from "@mui/material";
import DetailsUse from "../Atoms/SharedComponents/Details/details-use.jsx";

export const PreviewStep = ({ formikProps }) => {
  const { values } = formikProps;
  return (
    <Box>
      <DetailsUse data={values} />
    </Box>
  );
};

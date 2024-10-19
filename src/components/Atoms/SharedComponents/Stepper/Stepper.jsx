import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

// Custom connector with dashed style
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`& .${stepConnectorClasses.line}`]: {
    border: "1px dashed rgba(202, 202, 202, 1)", // Adjust the color if necessary
  },
}));

function QontoStepIcon(props) {
  const { active } = props;
  return active ? (
    <Box
      width={"24px"}
      height={"24px"}
      bgcolor="primary.main"
      borderRadius={"50%"}
      sx={{ outline: "1px solid rgba(2, 105, 128, 1)", outlineOffset: ".2rem" }}
    ></Box>
  ) : (
    <Box
      width={"24px"}
      height={"24px"}
      bgcolor="gray"
      borderRadius={"50%"}
    ></Box>
  );
}

export default function HorizontalLinearStepper({ steps, formikProps }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    } else {
      formikProps.submitForm();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<QontoConnector />}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                "& span": {
                  fontSize: "12px",
                },
              }}
              StepIconComponent={QontoStepIcon}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <React.Fragment>
        <Box sx={{ my: 2 }}>
          {React.createElement(steps[activeStep].component, { formikProps })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            pt: 2,
          }}
        >
          {activeStep !== 0 && (
            <Button
              color="inherit"
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined"
            >
              Back
            </Button>
          )}

          <Button
            onClick={handleNext}
            sx={{ marginLeft: "auto" }}
            variant="contained"
          >
            {activeStep === steps.length - 1 ? "Apply" : "Next"}
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}

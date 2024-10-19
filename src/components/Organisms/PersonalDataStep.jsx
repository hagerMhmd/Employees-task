import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";
import { useThemePalette } from "../../common/hooks/theme_palette.js";

const CustomFormField = ({ label, children, reuired = true }) => {
  const { primaryColor } = useThemePalette();
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ fontSize: "12px", mb: 0.5, fontWeight: 500 }}
      >
        {label}
        {reuired && (
          <span style={{ color: primaryColor }} color={primaryColor}>
            *
          </span>
        )}
      </Typography>
      {children}
    </Box>
  );
};
// Step Components (separate components for each form step)
export const PersonalDataStep = () => (
  <Box>
    <Stack spacing={1.3}>
      <CustomFormField label="Name">
        <Field
          name="name"
          placeholder="Enter Employee Name"
          as={TextField}
          variant="outlined"
          fullWidth
        />
      </CustomFormField>
      <CustomFormField label="Start Date">
        <Field
          name="startDate"
          as={TextField}
          type="date"
          InputLabelProps={{
            shrink: true, // Keep the date input's placeholder behavior
          }}
          fullWidth
          className="date-picker"
        />
      </CustomFormField>

      <CustomFormField label="Role">
        <Field
          name="role"
          label="Select Role"
          as={TextField}
          select
          fullWidth
          className="select"
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  borderRadius: "10px",
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
                },
              },
            },
          }}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="developer">Developer</MenuItem>
          <MenuItem value="designer">Designer</MenuItem>
        </Field>
      </CustomFormField>

      <CustomFormField label="E-Mail">
        <Field
          name="email"
          placeholder="Enter E-Mail"
          as={TextField}
          variant="outlined"
          fullWidth
        />
      </CustomFormField>

      <CustomFormField label="phone">
        <Field
          name="phone"
          placeholder="Enter Phone Number"
          as={TextField}
          variant="outlined"
          fullWidth
        />
      </CustomFormField>
    </Stack>
  </Box>
);

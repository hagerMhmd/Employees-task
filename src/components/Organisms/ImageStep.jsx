import { Box, Button, Stack, Typography } from "@mui/material";
import { useThemePalette } from "../../common/hooks/theme_palette.js";
import { useRef } from "react";
import { icons } from "../../assets/AssetHelper.js";
import AddIcon from "@mui/icons-material/Add";

export const ImageStep = ({ formikProps }) => {
  const fileInputRef = useRef(null);
  const { values } = formikProps;
  const { darkGray } = useThemePalette();

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formikProps.setFieldValue("image", URL.createObjectURL(file));
  };
  return (
    <Box>
      <Typography fontWeight={"500"} mb={1}>
        Add image
      </Typography>
      <Stack
        sx={{
          border: "1px dashed rgba(184, 184, 184, 1)",
          borderRadius: "17px",
        }}
        p={3}
      >
        {values?.image ? (
          <Stack direction={"row"} justifyContent={"space-between"}>
            <img
              src={values?.image}
              alt="preview"
              width={"30%"}
              maxWidth="170px"
              maxheight="127px"
              style={{ objectFit: "contain" }}
            />
            <Stack sx={{ width: "65%" }} justifyContent={"center"}>
              <Typography>{values?.image?.name}</Typography>
              <Stack direction={"row"}>
                <Button onClick={() => fileInputRef.current.click()}>
                  <img
                    src={icons.change}
                    alt="change"
                    width="16px"
                    height={"16px"}
                  />
                  <Typography mx={1} color={darkGray}>
                    Change
                  </Typography>
                  <input
                    ref={fileInputRef}
                    name="image"
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
                <Button onClick={(_) => formikProps.setFieldValue("image", "")}>
                  <img
                    src={icons.trash}
                    alt="trash"
                    width="16px"
                    height={"16px"}
                  />
                  <Typography mx={1} color={darkGray}>
                    Remove
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Stack alignItems="center" spacing={2}>
            <img src={icons.addImg} alt="add Img" />
            <Button
              variant="contained"
              sx={{ borderRadius: "38px", padding: "10px 17px" }}
              component="label"
            >
              <AddIcon />
              Add Image
              <input
                name="image"
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

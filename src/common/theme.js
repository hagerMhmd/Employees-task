import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "rgba(2, 105, 128, 1)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 1)",
    },
    error: {
      main: red.A400,
    },
  },
  theme_palette: {
    primaryColor: "rgba(2, 105, 128, 1)",
    red: "rgba(191, 0, 0, 1)",
    green: "rgba(92, 152, 15, 1)",
    gray: "rgba(38, 38, 38, 1)",
    lightGray: "rgba(115, 119, 145, 1)",
    charcoalGray: 'rgba(42, 42, 42, 1)',
    silverGray:"rgba(248, 248, 248, 1)",
    darkSliver:"rgba(211, 211, 211, 1)"
  },
  overrides: {
    MuiPaper: {
      root: {},
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            padding: '6px 14px',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true, 
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "none",
          padding: "15px"
        },
      },
    },
  },
});

export default theme;

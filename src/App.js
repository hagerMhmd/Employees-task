import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import AppRoute from "./common/Route";
import { store } from "./services/store";
import { ThemeProvider } from "@mui/material";
import theme from "./common/theme.js";
import AlertProvider from "./components/Atoms/Alert/ToastifyAlert.jsx";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRoute />
          </LocalizationProvider>
        </AlertProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;

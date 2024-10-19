import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { lazy, Suspense } from "react";
import Loader from "../components/Atoms/SharedComponents/Loader/Loader.js";

const EmployeesPage = lazy(() => import("pages/Employees.jsx"));

const SuspenseFun = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SuspenseFun>
              <EmployeesPage />
            </SuspenseFun>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoute;

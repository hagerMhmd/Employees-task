import { combineReducers } from "redux";
import modalReducer from "./modules/modal/Reducer";
import employeesReducer from "./modules/Employee/Reducer.js";

const rootReducer = combineReducers({
  modal: modalReducer,
  employees: employeesReducer
});

export default rootReducer;

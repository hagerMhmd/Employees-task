import Types from "./Types";

export const addEmployee = (payload) => ({
  type: Types.Add_EMPLOYEE,
  payload,
});

export const deleteEmployee = (payload) => ({
  type: Types.DELETE_EMPLOYEE,
  payload,
});


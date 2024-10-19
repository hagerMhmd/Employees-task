import Types from "./Types";

const INIT_STATE = {
  employees: [],
  employeesCount: 0,
};

export default function employeesReducer(state = INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.Add_EMPLOYEE: {
      return {
        ...state,
        // employees: [...state?.employees, payload],
        employees: [...state?.employees, payload],
        employeesCount: [...state?.employees, payload]?.length
      };
    }
    case Types.DELETE_EMPLOYEE: {
      return {
        ...state,
        employees: state?.employees?.filter(emp => emp.id !== payload.id),
        employeesCount: state?.employees?.filter(emp => emp.id !== payload.id).length,
      };
    }
    default: {
      return state;
    }
  }
}

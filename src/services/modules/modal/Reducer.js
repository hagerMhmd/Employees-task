import Types from "./Types";

const INIT_STATE = {
  isAddEmployeeFormOpen: false,
};

export default function modalReducer(state = INIT_STATE, action) {
  const { type, } = action;
  switch (type) {
    case Types.TOGGLE_ADD_EMPLOYEE_FORM: {
      return {
        ...state,
        isAddEmployeeFormOpen: !state.isAddEmployeeFormOpen,
      };
    }

    default: {
      return state;
    }
  }
}

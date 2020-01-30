import { MAIL_FAIL, MAIL_SUCCESS } from "../actions/types";

const initialState = {
  success: null,
  error: null,
  data: {}
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MAIL_SUCCESS:
      return { ...state, success: payload };
    case MAIL_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
};

import { LOAD_PRESS, FAIL_LOAD } from "../actions/types";

const initialState = { press: [], error: null, loading: true };
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PRESS:
      return { ...state, press: payload, loading: false };
    case FAIL_LOAD:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

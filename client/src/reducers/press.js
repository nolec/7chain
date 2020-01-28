import {
  LOAD_PRESS,
  FAIL_LOAD,
  LOAD_ADMINPRESS,
  LOAD_7CHAINPRESS
} from "../actions/types";

const initialState = {
  press: [],
  adminPress: [],
  chainPress: [],
  error: null,
  loading: true,
  cnt: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PRESS:
      return {
        ...state,
        press: payload,
        loading: false
      };
    case LOAD_ADMINPRESS:
      return {
        ...state,
        adminPress: payload[0],
        cnt: payload[1][0].total_row_count,
        loading: false
      };
    case LOAD_7CHAINPRESS:
      return {
        ...state,
        chainPress: payload[0],
        cnt: payload[1][0].total_row_count,
        loading: false
      };
    case FAIL_LOAD:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

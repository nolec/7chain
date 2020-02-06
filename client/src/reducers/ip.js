import { IP_CONFIRM, IP_SERVER_ERROR } from "../actions/types";

const initialState = {
  ip: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case IP_CONFIRM:
      return { ...state, ip: payload.ip };
    case IP_SERVER_ERROR:
      return { ...state, ip: payload.ip };
    default:
      return state;
  }
};

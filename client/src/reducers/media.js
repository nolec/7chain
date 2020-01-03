import { LOAD_MEDIA, FAIL_LOAD } from "../actions/types";

const initialState = { media: [], error: null, loading: true };
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MEDIA:
      return { ...state, media: payload, loading: false };
    case FAIL_LOAD:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

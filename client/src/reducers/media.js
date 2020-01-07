import { LOAD_MEDIA, FAIL_LOAD, LOAD_ADMINMEDIA } from "../actions/types";

const initialState = {
  media: [],
  adminMedia: [],
  error: null,
  loading: true,
  cnt: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MEDIA:
      return { ...state, media: payload, loading: false };
    case LOAD_ADMINMEDIA:
      return {
        ...state,
        media: payload,
        adminMedia: payload[0],
        cnt: payload[1][0].total_row_count,
        loading: false
      };
    case FAIL_LOAD:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

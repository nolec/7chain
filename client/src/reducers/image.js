import { SUCCESS_IMAGE, IMAGE_FAIL } from "../actions/types";

const initialState = {
  fileName: {},
  error: null,
  loading: true
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESS_IMAGE:
      return { ...state, fileName: payload, loading: false };
    case IMAGE_FAIL:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

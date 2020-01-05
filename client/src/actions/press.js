import { FAIL_LOAD, LOAD_PRESS } from "./types";
import axios from "axios";

export const getPress = () => async dispatch => {
  try {
    const res = await axios.get(`/api/press`);
    dispatch({ type: LOAD_PRESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const getPressAll = page => async dispatch => {
  try {
    const res = await axios.get(`/api/press/${page}`);
    dispatch({ type: LOAD_PRESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};

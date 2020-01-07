import { FAIL_LOAD, LOAD_PRESS, LOAD_ADMINPRESS } from "./types";
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
    const res = await axios.get(`/api/press/all/${page}`);
    console.log(res.data);
    dispatch({ type: LOAD_ADMINPRESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const uploadPress = () => async dispatch => {
  try {
    const res = await axios.post(`/api/press/upload`);
    console.log(res.data);
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};

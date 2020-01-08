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
export const uploadPress = formData => async dispatch => {
  try {
    const res = await axios.post(`/api/press/upload`, formData);
    console.log(res.data);
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const uploadImage = files => async dispatch => {
  try {
    const uploadData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" }
    };

    console.log(uploadData);
    const res = await axios.post(`/api/press/image`, uploadData, config);
    console.log(res.data);
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};

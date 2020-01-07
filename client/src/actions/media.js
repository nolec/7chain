import { LOAD_MEDIA, FAIL_LOAD, LOAD_ADMINMEDIA } from "./types";
import axios from "axios";

export const getMedia = () => async dispatch => {
  try {
    const res = await axios.get(`/api/media`);
    dispatch({ type: LOAD_MEDIA, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const getMediaAll = page => async dispatch => {
  try {
    const res = await axios.get(`/api/media/all/${page}`);
    console.log(res.data);
    dispatch({ type: LOAD_ADMINMEDIA, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};

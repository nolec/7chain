import { LOAD_MEDIA, FAIL_LOAD } from "./types";
import axios from "axios";

export const getMedia = () => async dispatch => {
  try {
    const res = await axios.get(`/api/media`);
    dispatch({ type: LOAD_MEDIA, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const getMediaAll = () => async dispatch => {
  try {
    const res = await axios.get("/api/media/all");
    dispatch({ type: LOAD_MEDIA, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};

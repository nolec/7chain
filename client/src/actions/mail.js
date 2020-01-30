import { MAIL_FAIL, MAIL_SUCCESS } from "./types";
import axios from "axios";

export const mailPost = formData => async dispatch => {
  try {
    const res = await axios.post(`/api/mail`, formData);
    dispatch({ type: MAIL_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: MAIL_FAIL, payload: error });
  }
};

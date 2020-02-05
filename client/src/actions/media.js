import {
  LOAD_MEDIA,
  FAIL_LOAD,
  LOAD_ADMINMEDIA,
  LOAD_7CHAINMEDIA,
  SUCCESS_IMAGE,
  IMAGE_FAIL,
  SUCCESS_UPLOAD,
  UPLOAD_FAIL,
  DELETE_PRESS
} from "./types";
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
    dispatch({ type: LOAD_ADMINMEDIA, payload: res.data.result });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const getMeida7chain = page => async dispatch => {
  try {
    const res = await axios.get(`/api/media/all/7chain/${page}`);
    console.log(res);
    dispatch({ type: LOAD_7CHAINMEDIA, payload: res.data.result });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const uploadMedia = sendData => async dispatch => {
  try {
    const res = await axios.post(`/api/media/upload`, sendData);
    console.log(res.data, sendData);
    dispatch({ type: SUCCESS_UPLOAD, payload: res.data });
  } catch (error) {
    dispatch({ type: UPLOAD_FAIL, payload: error });
  }
};
export const uploadImage = (
  logoFile,
  posterFile,
  formData
) => async dispatch => {
  try {
    const uploadFile = new FormData();
    const {
      mediaLink,
      mediaName,
      regDate,
      title,
      description,
      checkedA,
      checkedB,
      logo,
      poster
    } = formData;

    const config = {
      header: {
        "content-type": "multipart/form-data"
      }
    };

    uploadFile.set("media_name", formData.mediaName);
    uploadFile.append("file", posterFile);
    uploadFile.append("file", logoFile);
    const res = await axios.post(`/api/media/image`, uploadFile, config);
    console.log(res.data);
    const sendData = {
      mediaLink,
      mediaName,
      regDate,
      title,
      description,
      checkedA: checkedA ? 1 : 0,
      checkedB: checkedB ? 1 : 0,
      poster: res.data.files[0].filename,
      logo: res.data.files[1].filename
    };
    await dispatch({
      type: SUCCESS_IMAGE,
      payload: res.data.files
    });
    await dispatch(uploadMedia(sendData));
    dispatch(getMediaAll(1));
  } catch (error) {
    dispatch({ type: IMAGE_FAIL, payload: error });
  }
};
export const deleteMedia = no => async dispatch => {
  try {
    const res = await axios.get(`/api/media/delete/${no}`);
    console.log(res.data);
    await dispatch({ type: DELETE_PRESS, payload: res.data });
    dispatch(getMediaAll(1));
  } catch (error) {
    dispatch({ type: UPLOAD_FAIL, payload: error });
  }
};

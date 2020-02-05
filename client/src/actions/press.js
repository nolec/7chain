import {
  FAIL_LOAD,
  LOAD_PRESS,
  LOAD_ADMINPRESS,
  LOAD_7CHAINPRESS,
  SUCCESS_IMAGE,
  IMAGE_FAIL,
  SUCCESS_UPLOAD,
  UPLOAD_FAIL,
  DELETE_PRESS
} from "./types";
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
    // let test = [];
    // let test2 = [];
    // res.data.uploadData.map(up => test2.unshift(up));
    // console.log(
    //   typeof res.data.result[0][1].poster_img_filename,
    //   typeof res.data.uploadData[0]
    // );
    // test.unshift(
    //   res.data.result[0].filter(res =>
    //     test.push(res.poster_img_filename === test2.map(te => te))
    //   )
    // );

    // console.log(test);
    dispatch({ type: LOAD_ADMINPRESS, payload: res.data.result });
  } catch (error) {
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const getPress7chain = page => async dispatch => {
  try {
    const res = await axios.get(`/api/press/all/7chain/${page}`);
    console.log(res);
    dispatch({ type: LOAD_7CHAINPRESS, payload: res.data.result });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_LOAD, payload: error });
  }
};
export const uploadPress = sendData => async dispatch => {
  try {
    const res = await axios.post(`/api/press/upload`, sendData);
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
    console.log(logoFile, posterFile, formData);
    await uploadFile.append("file", posterFile);
    await uploadFile.append("file", logoFile);
    console.log(uploadFile);
    const res = await axios.post(`/api/press/image`, uploadFile, config);
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
    await dispatch(uploadPress(sendData));
    dispatch(getPressAll(1));
  } catch (error) {
    dispatch({ type: IMAGE_FAIL, payload: error });
  }
};
export const deletePress = no => async dispatch => {
  try {
    const res = await axios.get(`/api/press/delete/${no}`);
    console.log(res.data);
    await dispatch({ type: DELETE_PRESS, payload: res.data });
    dispatch(getPressAll(1));
  } catch (error) {
    dispatch({ type: UPLOAD_FAIL, payload: error });
  }
};

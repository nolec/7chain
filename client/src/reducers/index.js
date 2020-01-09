import { combineReducers } from "redux";
import press from "./press";
import media from "./media";
import image from "./image";

const rootReducer = combineReducers({ press, media, image });

export default rootReducer;

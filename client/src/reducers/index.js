import { combineReducers } from "redux";
import press from "./press";
import media from "./media";
import image from "./image";
import mail from "./mail";

const rootReducer = combineReducers({ press, media, image, mail });

export default rootReducer;

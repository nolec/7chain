import { combineReducers } from "redux";
import press from "./press";
import media from "./media";
import image from "./image";
import mail from "./mail";
import ip from "./ip";

const rootReducer = combineReducers({ press, media, image, mail, ip });

export default rootReducer;

import axios from "axios";

const setIpAddress = ipAddress => {
  axios.defaults.headers.common["x-auth-ip"] = ipAddress;
};

export default setIpAddress;

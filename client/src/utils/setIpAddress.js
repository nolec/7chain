import axios from "axios";

const setIpAddress = ipAddress => {
  console.log(ipAddress);
  if (ipAddress) {
    axios.defaults.headers.common["x-auth-ip"] = ipAddress;
  } else {
    delete axios.defaults.headers.common["x-auth-ip"];
  }
};

export default setIpAddress;

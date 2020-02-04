import React, { useState } from "react";
import { SubContext } from "./Context";

const SubProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const handleClose = () => {
    setToggle(!toggle);
  };
  const provider = {
    toggle,
    handleClose
  };
  return <SubContext.Provider value={provider}>{children}</SubContext.Provider>;
};

export default SubProvider;

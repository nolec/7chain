import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../../Context";

const UtilSeleted = () => {
  const { korean } = useContext(LangContext);
  return (
    <>
      {korean ? (
        <>
          <i className="flag-icon flag-icon-kr"></i>
          <span>Korean</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </>
      ) : (
        <>
          <i className="flag-icon flag-icon-us"></i>
          <span>English</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </>
      )}
    </>
  );
};

export default UtilSeleted;

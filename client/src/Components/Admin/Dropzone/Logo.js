import React, { useState, useEffect } from "react";
import DropzoneContext from "../context";
import Drop from "./DropZone";

export default () => {
  // useEffect(() => {
  //   URL.revokeObjectURL(logo);
  // }, [logo]);
  const [logo, setLogo] = useState(null);
  const { getInputProps, getRootProps } = Drop(logo, setLogo);
  return (
    <DropzoneContext.Consumer>
      {({ updateLogo }) => {
        return (
          <div {...getRootProps()}>
            <p>Logo 이미지</p>
            {logo === null ? (
              <img
                src={require("../../../assets/images/blank.png")}
                alt="logo"
              />
            ) : (
              <img src={logo} alt="logo" onLoad={() => updateLogo(logo)} />
            )}
            <input className="logo" {...getInputProps()} />
          </div>
        );
      }}
    </DropzoneContext.Consumer>
  );
};

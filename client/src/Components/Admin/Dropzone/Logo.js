import React, { useState, useEffect } from "react";
import DropzoneContext from "../context";
import Drop from "./DropZone";

export default () => {
  // useEffect(() => {
  //   URL.revokeObjectURL(logo);
  // }, [logo]);
  const [logo, setLogo] = useState({ logo: null, file: null });
  const { getInputProps, getRootProps } = Drop(logo, setLogo);
  return (
    <DropzoneContext.Consumer>
      {({ updateLogo }) => {
        return (
          <div {...getRootProps()}>
            <p>Logo 이미지</p>
            {logo.logo === null ? (
              <img
                src={require("../../../assets/images/blank.png")}
                alt="logo"
              />
            ) : (
              <img
                src={logo.logo}
                alt="logo"
                onLoad={() => updateLogo({ logo: logo.logo, file: logo.file })}
              />
            )}
            <input className="logo" {...getInputProps()} />
          </div>
        );
      }}
    </DropzoneContext.Consumer>
  );
};

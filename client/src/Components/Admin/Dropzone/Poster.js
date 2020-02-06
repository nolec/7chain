import React, { useState } from "react";
import DropzoneContext from "../context";
import Drop from "./DropZone";

export default () => {
  // useEffect(() => {
  //   URL.revokeObjectURL(file.poster);
  // }, [file]);
  const [poster, setPoster] = useState(null);
  const { getInputProps, getRootProps, acceptedFiles } = Drop(
    poster,
    setPoster
  );
  return (
    <DropzoneContext.Consumer>
      {({ filePoster }) => {
        return (
          <div {...getRootProps()}>
            <p>Poster 이미지</p>
            {poster === null ? (
              <img
                src={require("../../../assets/images/blank.png")}
                alt="poster"
              />
            ) : (
              <img
                src={poster}
                alt="poster"
                onLoad={() => {
                  filePoster(acceptedFiles);
                }}
              />
            )}
            <input className="poster" {...getInputProps()} />
          </div>
        );
      }}
    </DropzoneContext.Consumer>
  );
};

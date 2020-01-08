import React, { useState, useEffect } from "react";
import DropzoneContext from "../context";
import Drop from "./DropZone";

export default () => {
  // useEffect(() => {
  //   URL.revokeObjectURL(file.poster);
  // }, [file]);
  const [poster, setPoster] = useState({ poster: null, file: null });
  console.log(poster);
  const { getInputProps, getRootProps } = Drop(poster, setPoster);
  return (
    <DropzoneContext.Consumer>
      {({ updatePoster }) => {
        return (
          <div {...getRootProps()}>
            <p>Poster 이미지</p>
            {poster.poster === null ? (
              <img
                src={require("../../../assets/images/blank.png")}
                alt="poster"
              />
            ) : (
              <img
                src={poster.poster}
                alt="poster"
                onLoad={() =>
                  updatePoster({ poster: poster.poster, file: poster.file })
                }
              />
            )}
            <input className="poster" {...getInputProps()} />
          </div>
        );
      }}
    </DropzoneContext.Consumer>
  );
};

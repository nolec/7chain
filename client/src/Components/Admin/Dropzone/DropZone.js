import { useDropzone } from "react-dropzone";

export default (file, setFunc) => {
  console.log(file, "test");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFiles => {
      // Object.keys(file).map(key => {
      //   console.log(file, "key다", key, acceptedFiles);
      //   key === "poster"
      //     ? setFunc({
      //         poster: URL.createObjectURL(acceptedFiles[0])
      //       })
      //     : setFunc({ logo: URL.createObjectURL(acceptedFiles[0]) });
      // })
      Object.keys(file);
      console.log(file, Object.keys(file), "key다");
      Object.keys(file)[0] === "poster"
        ? setFunc({
            poster: URL.createObjectURL(acceptedFiles[0]),
            file: acceptedFiles[0]
          })
        : setFunc({
            logo: URL.createObjectURL(acceptedFiles[0]),
            file: acceptedFiles[0]
          });
    }
  });
  return { getRootProps, getInputProps };
};

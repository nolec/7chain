import { useDropzone } from "react-dropzone";

export default (file, setFunc) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFiles => {
      setFunc(URL.createObjectURL(acceptedFiles[0]));
    }
  });
  return { getRootProps, getInputProps, acceptedFiles };
};

import { useDropzone } from "react-dropzone";
import { uploadImage } from "../../../actions/press";
import { useDispatch } from "react-redux";

export default (file, setFunc) => {
  console.log(file, "test");
  const uploadData = new FormData();
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: acceptedFiles => {
      // Object.keys(file).map(key => {
      //   console.log(file, "key다", key, acceptedFiles);
      //   key === "poster"
      //     ? setFunc({
      //         poster: URL.createObjectURL(acceptedFiles[0])
      //       })
      //     : setFunc({ logo: URL.createObjectURL(acceptedFiles[0]) });
      // })

      uploadData.append("file", acceptedFiles[0]);
      dispatch(uploadImage(uploadData));
      console.log(uploadData, acceptedFiles, "뭐지?");
      setFunc(URL.createObjectURL(acceptedFiles[0]));
    }
  });
  return { getRootProps, getInputProps };
};

import React, { useState } from "react";
import styled from "styled-components";
import {
  makeStyles,
  TextField,
  createMuiTheme,
  ThemeProvider,
  Button,
  Checkbox,
  FormControlLabel,
  withStyles
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { blue } from "@material-ui/core/colors";
import { uploadImage } from "../../../actions/media";
import { useDispatch, useSelector } from "react-redux";
import Poster from "../Dropzone/Poster";
import Logo from "../Dropzone/Logo";
import DropzoneContext from "../context";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#fff"
      },
      "&.Mui-focused:hover fieldset": {
        borderColor: "#2196f3"
      }
    }
  }
}));
const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);
const UploadBox = styled.div`
  margin-top: 60px;
  padding: 0 20px;
  display: flex;
  color: #fff;
`;
const PostBox = styled.div`
  padding: 0 20px;
  color: #fff;
`;
const PostImg = styled.div`
  display: flex;
  p {
    margin: 0;
  }
  :nth-of-type(1) img {
    width: 600px;
    height: 370px;
    cursor: pointer;
    border: 1px solid #fff;
  }
  :nth-of-type(2) img {
    width: 120px;
    height: 52px;
    cursor: pointer;
    border: 1px solid #fff;
  }
`;
const FormUpload = styled(Form)`
  padding-left: 40px;
  padding-top: 28px;
  width: 500px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100%;
  }
`;
const Group = styled(TextField)`
  input {
    color: #fff;
  }
  fieldset {
    border-color: #707070;
  }
  p {
    color: #fff;
    visibility: ${props => (props.error ? "visibility" : "hidden")};
  }
  label {
    color: #707070;
  }
  &:nth-child(2) {
    width: calc(50% - 5px);
    margin-right: 10px;
  }
  &:nth-child(3) {
    width: calc(50% - 5px);
  }
`;
const SubBox = styled.div`
  display: flex;
  align-items: center;
`;
const CheckCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});
let ContactFormSchema = yup.object().shape({
  mediaLink: yup.string().required("빈 칸을 채워주세요"),
  mediaName: yup.string().required("빈 칸을 채워주세요"),
  regDate: yup.string().required("빈 칸을 채워주세요"),
  title: yup.string().required("빈 칸을 채워주세요"),
  description: yup.string().required("빈 칸을 채워주세요"),
  checkedA: yup.boolean(),
  checkedB: yup.boolean()
});
export default () => {
  const dispatch = useDispatch();
  const [logoFile, setLogoFile] = useState();
  const [posterFile, setPosterFile] = useState();
  const fileLogo = accept => {
    setLogoFile(accept[0]);
  };
  const filePoster = accept => {
    setPosterFile(accept[0]);
  };
  const classes = useStyles();
  const contextValue = {
    fileLogo,
    filePoster
  };
  return (
    <UploadBox>
      <Formik
        initialValues={{
          mediaLink: "",
          mediaName: "",
          regDate: "",
          title: "",
          description: "",
          checkedA: false,
          checkedB: false,
          logo: null,
          poster: null
        }}
        validationSchema={ContactFormSchema}
        onSubmit={values => {
          setTimeout(() => {
            console.log(values, posterFile, logoFile);
            dispatch(uploadImage(logoFile, posterFile, values));
          }, 1000);
        }}
      >
        {({ errors, handleChange, touched }) => (
          <>
            <DropzoneContext.Provider value={contextValue}>
              <PostBox>
                <PostImg>
                  <Poster />
                </PostImg>
                <PostImg>
                  <Logo />
                </PostImg>
              </PostBox>
            </DropzoneContext.Provider>
            <FormUpload className={classes.root}>
              <ThemeProvider theme={theme}>
                <Group
                  error={errors.mediaName && touched.mediaName}
                  helperText={
                    errors.mediaName && touched.mediaName
                      ? errors.mediaName
                      : null
                  }
                  id="mediaName"
                  label="미디어 명"
                  autoComplete="mediaName"
                  name="mediaName"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
                <Group
                  error={errors.regDate && touched.regDate}
                  helperText={
                    errors.regDate && touched.regDate ? errors.regDate : null
                  }
                  id="regDate "
                  label="등록일(yyyy.mm.dd)"
                  autoComplete="regDate"
                  name="regDate"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
                <Group
                  error={errors.title && touched.title}
                  helperText={
                    errors.title && touched.title ? errors.title : null
                  }
                  id="mediaLink"
                  label="제목"
                  autoComplete="title "
                  name="title"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
                <Group
                  error={errors.description && touched.description}
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : null
                  }
                  id="description"
                  label="내용"
                  autoComplete="description"
                  name="description"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
                <SubBox>
                  <CheckCard>
                    <FormControlLabel
                      control={
                        <BlueCheckbox
                          id="checkedA"
                          name="checkedA"
                          color="primary"
                          onChange={handleChange}
                        />
                      }
                      label="7Chain"
                    />
                    <FormControlLabel
                      control={
                        <BlueCheckbox
                          id="checkedB"
                          name="checkedB"
                          color="primary"
                          onChange={handleChange}
                        />
                      }
                      label="Numbers"
                    />
                  </CheckCard>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={{ alignSelf: "center" }}
                  >
                    Upload
                  </Button>
                </SubBox>
              </ThemeProvider>
            </FormUpload>
          </>
        )}
      </Formik>
    </UploadBox>
  );
};

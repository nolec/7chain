import React, { useState, useEffect } from "react";
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
import { blue } from "@material-ui/core/colors";
import { uploadImage } from "../../../actions/press";
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
const Form = styled.form`
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

export default props => {
  const dispatch = useDispatch();
  const imageName = useSelector(state => state.image.fileName);
  console.log(imageName);
  //Check Box ------------------------------
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });
  //TextField Box ------------------------------
  //FormData ------------------------------
  const [formData, setFormData] = useState({
    mediaLink: "",
    mediaName: "",
    regDate: "",
    title: "",
    description: "",
    checkedA: false,
    checkedB: false,
    logo: null,
    poster: null
  });

  // const { mediaLink, mediaName, regDate, title, description } = formData;
  //handleSubmit ------------------------------

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData, logoFile, posterFile);
    dispatch(uploadImage(logoFile, posterFile, formData));
  };
  const hadnleForm = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    setFormData({
      ...formData,
      [name]: event.target.checked
    });
  };
  const [logoFile, setLogoFile] = useState();
  const [posterFile, setPosterFile] = useState();
  const fileLogo = accept => {
    setLogoFile(accept[0]);
  };
  const filePoster = accept => {
    setPosterFile(accept[0]);
  };
  // let uploadFile = new FormData();
  const classes = useStyles();
  const contextValue = {
    formData,
    fileLogo,
    filePoster
  };
  return (
    <UploadBox>
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
      <Form className={classes.root}>
        <ThemeProvider theme={theme}>
          <Group
            error={false}
            id="outlined-error-helper-text"
            helperText="hello"
            label="Link 주소"
            variant="outlined"
            name="mediaLink"
            value={formData.mediaLink}
            onChange={hadnleForm}
          />
          <Group
            error={false}
            id="outlined-error-helper-text"
            helperText="hello"
            label="미디어 명"
            variant="outlined"
            name="mediaName"
            value={formData.mediaName}
            onChange={hadnleForm}
          />
          <Group
            error={false}
            id="outlined-error-helper-text"
            helperText="hello"
            label="등록일(yyyy.mm.dd)"
            variant="outlined"
            name="regDate"
            value={formData.regDate}
            onChange={hadnleForm}
          />
          <Group
            error={false}
            id="outlined-error-helper-text"
            helperText="hello"
            label="제목"
            variant="outlined"
            name="title"
            value={formData.title}
            onChange={hadnleForm}
          />
          <Group
            error={false}
            id="outlined-error-helper-text"
            helperText="hello"
            label="내용"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={hadnleForm}
          />
          <SubBox>
            <CheckCard>
              <FormControlLabel
                control={
                  <BlueCheckbox
                    checked={state.checkedA}
                    onChange={handleChange("checkedA")}
                    value="checkedA"
                    color="primary"
                  />
                }
                label="7Chain"
              />
              <FormControlLabel
                control={
                  <BlueCheckbox
                    checked={state.checkedB}
                    onChange={handleChange("checkedB")}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Numbers"
              />
            </CheckCard>
            <Button
              onClick={handleSubmit}
              color="primary"
              variant="contained"
              style={{ alignSelf: "center" }}
            >
              Upload
            </Button>
          </SubBox>
        </ThemeProvider>
      </Form>
    </UploadBox>
  );
};

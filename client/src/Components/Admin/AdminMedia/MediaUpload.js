import React, { useState } from "react";
import styled from "styled-components";
import {
  makeStyles,
  TextField,
  createMuiTheme,
  ThemeProvider,
  Button,
  Checkbox,
  withStyles,
  FormControlLabel
} from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";

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
  display: flex;
  color: #fff;
`;
const PostImg = styled.div`
  p {
    margin: 0;
  }
  img:nth-of-type(1) {
    width: 600px;
    height: 370px;
    cursor: pointer;
    border: 1px solid #fff;
  }
  img:nth-of-type(2) {
    width: 120px;
    height: 52px;
    cursor: pointer;
    border: 1px solid #fff;
  }
`;
const Form = styled.form`
  padding-left: 40px;
  padding-top: 10px;
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
    visibility: hidden;
  }
  label {
    color: #707070;
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

export default () => {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <UploadBox>
      <PostBox>
        <PostImg>
          <p>Poster 이미지</p>
          <img src={require("../../../assets/images/blank.png")} alt="poster" />
          <p>Logo 이미지</p>
          <img src={require("../../../assets/images/blank.png")} alt="logo" />
        </PostImg>
      </PostBox>
      <Form className={classes.root}>
        <ThemeProvider theme={theme}>
          <Group
            error={false}
            id="outlined-basic"
            helperText="hello"
            label="Link 주소"
            variant="outlined"
          />
          <Group
            error={false}
            id="outlined-basic"
            helperText="hello"
            label="미디어 명"
            variant="outlined"
          />
          <Group
            error={false}
            id="outlined-basic"
            helperText="hello"
            label="등록일(yyyy.mm.dd)"
            variant="outlined"
          />
          <Group
            error={false}
            id="outlined-basic"
            helperText="hello"
            label="제목"
            variant="outlined"
          />
          <Group
            error={false}
            id="outlined-basic"
            helperText="hello"
            label="내용"
            variant="outlined"
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

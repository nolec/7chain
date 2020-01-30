import React, { useState, useRef } from "react";
import styled from "styled-components";
// import { isEmail, isValidation } from "./Auth";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  TextField,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Button
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { mailPost } from "../../actions/mail";
import { Link } from "react-router-dom";
import { device, minDevice } from "../../device";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(80, 120)}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const ContactBox = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  font-size: 22px;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 500px;
  padding-top: 60px;
  ${device.PC900`width : 100%;`}
`;
const Right = styled.div`
  max-width: 620px;
  max-height: 412px;
  text-align: right;
  ${device.PC900`display : none;`}
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.contact
})`
  width: auto;
  height: auto;
  padding: 115px 0 0 20px;
`;
const ContactFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterTitle = styled.div`
  p {
    color: #fff;
    font-size: 30px;
    margin-bottom: 1rem;
  }
`;
const InquiryBox = styled.div`
  margin-top: 20px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
`;
const Inquiry = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  ${minDevice.minPC576`    flex: 0 0 50%;max-width: 50%;`}
  ${minDevice.minPC768`    flex: 0 0 33.3333%;max-width: 33.33333%;`}
`;
const Slink = styled(Link)`
  div {
    padding: 20px 20px;
    border: ${props => (props.active ? "1px solid #a4dada" : "1px solid #fff")};
    font-size: 20px;
    color: ${props => (props.active ? "#a4dada" : "#fff")};
    transition: 0.3s linear;
    ${device.PC`padding : 10px 10px; font-size : 18px`}
    ${device.PC580`font-size: 16px;`}
    &:hover {
      border: 1px solid #a4dada;
      color: #a4dada;
    }
  }
`;
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "&:not(.Mui-focused):not(.Mui-error):hover fieldset": {
        borderColor: "#fff"
      }
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  field: {
    marginBottom: theme.spacing(5),
    "& *": { color: "#fff", borderColor: "#fff" }
  },
  submit: {
    padding: "10px 30px",
    background: "#393939",
    color: "#fff",
    fontSize: "22px",
    border: "none",
    fontSize: "20px",
    marginTop: "30px",
    alignSelf: "center"
  },
  recaptcha: { display: "flex", justifyContent: "center" }
}));
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});
let ContactSchema = yup.object().shape({
  name: yup.string().required("이름을 입력해 주세요"),
  email: yup
    .string()
    .email("유효하지 않은 이메일 입니다")
    .required("이메일 주소를 입력해 주세요"),
  message: yup
    .string()
    .min(10, "최소 10자 이상 입력해 주세요")
    .max(100, "최대 100자 이하로 입력해 주세요")
    .required("메시지를 입력해 주세요")
});
export default () => {
  const classes = useStyles();
  const recaptchaRef = useRef(null);
  const dispatch = useDispatch();
  const activeChange = e => {
    e.preventDefault();
    console.log("작동");
  };
  return (
    <Section>
      <Container>
        <HBox>
          <h2>Contact Us</h2>
        </HBox>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: ""
          }}
          validationSchema={ContactSchema}
          onSubmit={values => {
            console.log(values);
            dispatch(mailPost(values));
          }}
        >
          {({ errors, handleChange, touched }) => (
            <ThemeProvider theme={theme}>
              <Form className={classes.form + " " + classes.root}>
                <ContactBox>
                  <Left>
                    <TextField
                      className={classes.field}
                      error={errors.name && touched.name}
                      onChange={handleChange}
                      autoComplete="name"
                      name="name"
                      variant="outlined"
                      fullWidth
                      id="name"
                      label="이름"
                      autoFocus
                      helperText={
                        errors.name && touched.name ? errors.name : null
                      }
                    />
                    <TextField
                      className={classes.field}
                      error={errors.email && touched.email}
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      id="email"
                      label="이메일 주소"
                      name="email"
                      autoComplete="email"
                      helperText={
                        errors.email && touched.email ? errors.email : null
                      }
                    />
                    <TextField
                      className={classes.field}
                      error={errors.message && touched.message}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows="3"
                      onChange={handleChange}
                      id="message"
                      label="메시지"
                      name="message"
                      autoComplete="message"
                      helperText={
                        errors.message && touched.message
                          ? errors.message
                          : null
                      }
                    />
                  </Left>
                  <Right>
                    <Img />
                  </Right>
                </ContactBox>
                <ContactFooter>
                  <FooterTitle>
                    <p>아래 문의 유형을 선택해 주세요:</p>
                  </FooterTitle>
                  <InquiryBox>
                    <Inquiry>
                      <Slink onClick={activeChange} to="#contact" className="">
                        <div>
                          일반 문의
                          <br />
                          contact@7chain.io
                        </div>
                      </Slink>
                    </Inquiry>
                    <Inquiry>
                      <Slink onClick={activeChange} to="#biz" className="">
                        <div>
                          사업 제휴
                          <br />
                          biz@7chain.io
                        </div>
                      </Slink>
                    </Inquiry>
                    <Inquiry>
                      <Slink
                        onClick={activeChange}
                        to="#developers"
                        className=""
                      >
                        <div>
                          일반 문의
                          <br />
                          developers@7chain.io
                        </div>
                      </Slink>
                    </Inquiry>
                  </InquiryBox>
                  <ReCAPTCHA
                    className={classes.recaptcha}
                    ref={recaptchaRef}
                    sitekey="Your client site key"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    문의하기
                  </Button>
                </ContactFooter>
              </Form>
            </ThemeProvider>
          )}
        </Formik>
      </Container>
    </Section>
  );
};

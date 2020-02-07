import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import { useDispatch } from "react-redux";
import { mailPost } from "../../../../actions/mail";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Scene from "../../ScrollMagic";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
  ${device.PC1000`padding : 0`}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const SubText = styled.div`
  padding-top: 15px;
  border: none;
  p {
    color: #fff;
    font-size: 20px;
    ${device.PC768`font-size : 16px; margin : 0 !important`}
  }
`;
const InputBox = styled.div`
  padding-top: 60px;
  text-align: center;
`;
const InputEmail = styled.div`
  position: relative;
  display: inline-block;
  width: 550px;
  ${device.PC1000`margin-bottom : 75px; width : 100%;`}
  ${device.PC570`margin-bottom : 55px; width : 100%;`}
  ${device.PC400`width: 100%; margin-bottom : 80px;`}
  input[type="text"] {
    width: 400px;
    height: 40px;
    background: #fff;
    padding-left: 10px;
    font-size: 16px !important;
    border-radius: 7px;
    border: none;
    padding-bottom: 4px;
    ${device.PC570`width: 260px;`}
    ${device.PC400`width: 200px;`}
  }
  input[type="submit"] {
    cursor: pointer;
    display: inline-block;
    width: 120px;
    height: 40px;
    background: #3b9fe2;
    color: #fff;
    border-radius: 7px;
    border: none;
    margin-left: 5px;
    ${device.PC570`width: 70px;font-size: 11px;`}
  }
`;
const Group = styled.div`
  display: flex;
  justify-content: center;
  .error-span {
    display: block;
    position: absolute;
    top: -80%;
    left: 0;
    width: 100%;
    color: red;
    text-align: left;
    padding-left: 20px;
  }
  div {
    position: absolute;
    text-align: left;
    ${device.PC1000`text-align: center;`}
    left: 14px;
    top: 55px;
    width: 100%;
    color: #fff;
    font-size: 18px;
    ${device.PC570`left : 0; font-size : 15px;`}
  }
`;
const Social = styled.div`
  position: relative;
  display: inline-block;
  width: 380px;
  text-align: center;
  a {
    background: #000;
    img {
      width: 40px;
      margin: 0 3px;
      vertical-align: middle;
      border-style: none;
    }
  }
`;
let ContactSchema = yup.object().shape({
  email: yup
    .string()
    .email("유효하지 않은 이메일 입니다")
    .required("이메일 주소를 입력해 주세요")
});
export default () => {
  const [check, setCheck] = useState(true);
  const submit = useRef(null);
  const join = useRef(null);
  const dispatch = useDispatch();

  //checkBox
  const handleCheck = () => {
    setCheck(!check);
  };
  useEffect(() => {
    if (check) {
      submit.current.disabled = false;
    } else {
      submit.current.disabled = true;
    }
  }, [check]);
  useEffect(() => {
    Scene(join.current.children, 0.7, "active");
  }, []);

  return (
    <Section>
      <Container ref={join}>
        <HBox>
          <h2>Join our Community</h2>
        </HBox>
        <SubText>
          <p>Join our mailling list to get immediate updates.</p>
        </SubText>
        <InputBox>
          <InputEmail>
            <Formik
              initialValues={{
                email: ""
              }}
              validationSchema={ContactSchema}
              onSubmit={values => {
                setTimeout(() => {
                  dispatch(mailPost(values));
                }, 1000);
              }}
            >
              {({ errors, handleChange, touched }) => (
                <Form>
                  <Group>
                    <span className="error-span">
                      {errors.email && touched.email ? errors.email : null}
                      {check === false ? " * 동의란에 체크하여 주십시오" : null}
                    </span>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      onChange={handleChange}
                      placeholder="Your e-mail address"
                    />
                    <input
                      ref={submit}
                      type="submit"
                      name="btnSubscribe"
                      value="Subscribe"
                      id="btnSubscribe"
                    />
                    <div>
                      <span className="cbx">
                        <input
                          id="cbx"
                          type="checkbox"
                          name="cbx"
                          onChange={handleCheck}
                          checked={check}
                        />
                      </span>
                      &nbsp; i would like to receive the 7Chain email
                      Newsletter.
                    </div>
                  </Group>
                </Form>
              )}
            </Formik>
          </InputEmail>
          <Social>
            <a
              href="https://medium.com/@7Chain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../../../assets/images/sns/sns_medium.png")}
                alt="medium"
              />
            </a>
            <a
              href="https://twitter.com/7Chain_Official"
              id="twitter_kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../../../assets/images/sns/sns_twitter.png")}
                alt="twitter"
              />
            </a>

            <a
              href="https://t.me/sevenchainproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../../../assets/images/sns/sns_telegram.png")}
                alt="telegram"
              />
            </a>
            <a
              href="https://www.facebook.com/7chain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../../../assets/images/sns/sns_facebook.png")}
                alt="facebook"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHuEqrnlAuQoMqeJTB8d86A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../../../../assets/images/sns/sns_youtube.png")}
                alt="youtube"
              />
            </a>
          </Social>
        </InputBox>
      </Container>
    </Section>
  );
};

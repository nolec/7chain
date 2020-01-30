import React, { useState } from "react";
import styled from "styled-components";
import { isEmail, isValidation } from "./Auth";

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
`;
const Left = styled.div`
  width: 500px;
  padding-top: 60px;
`;
const Right = styled.div`
  width: 100%;
  max-width: 620px;
  max-height: 412px;
  text-align: right;
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.contact
})`
  width: auto;
  height: auto;
  padding: 115px 0 0 20px;
`;
export default () => {
  const [formData, setFormData] = useState({ email: "" });
  const [emailError, setEmailError] = useState({ emailError: null });

  const onTextChange = e => {
    const {
      target: { name, value }
    } = e;
    setFormData({ ...formData, [name]: value });
    onTextValidation();
    console.log(formData);
  };
  const onTextValidation = () => {
    if (!isValidation(formData.email).success) {
      setEmailError({ emailError: isValidation(formData.email).error });
      return false;
    }
    setEmailError({ emailError: isValidation(formData.email).error });
    return true;
  };
  const onSubmit = e => {
    e.preventDefault();
    const valid = onTextValidation();
    if (!valid) {
      console.log("fuck", formData, emailError);
    } else {
      console.log("valid true", formData, emailError);
    }
  };

  return (
    <Section>
      <Container>
        <HBox>
          <h2>Contact Us</h2>
        </HBox>
        <ContactBox>
          <Left>
            <form onSubmit={onSubmit}>
              <input
                onChange={onTextChange}
                className="validation"
                name="email"
                type="text"
                placeholder="e-mail"
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {emailError.emailError}
              </div>
              <button type="submit">click</button>
            </form>
          </Left>
          <Right>
            <Img />
          </Right>
        </ContactBox>
      </Container>
    </Section>
  );
};

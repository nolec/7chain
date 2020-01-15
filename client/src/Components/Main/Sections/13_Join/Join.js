import React, { useEffect } from "react";
import styled from "styled-components";
import { device, minDevice } from "../../../../device";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
  ${device.PC1000`padding : 0`}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
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
export default () => {
  return (
    <Section>
      <Container>
        <HBox>
          <h2>Join our Community</h2>
        </HBox>
        <SubText>
          <p> Join our mailling list to get immediate updates.</p>
        </SubText>
        <InputBox>
          <InputEmail>
            <Group>
              <input
                name="tbxEmail"
                type="text"
                id="tbxEmail"
                placeholder="Your e-mail address"
              />
              <input
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
                    // onClick=""
                    // checked="checked"
                  />
                </span>
                &nbsp; i would like to receive the 7Chain email Newsletter.
              </div>
            </Group>
          </InputEmail>
          <Social>
            <a href="https://medium.com/@7Chain" target="_blank">
              <img
                src={require("../../../../assets/images/sns/sns_medium.png")}
                alt="medium"
              />
            </a>
            <a
              href="https://twitter.com/7Chain_Official"
              id="twitter_kr"
              target="_blank"
            >
              <img
                src={require("../../../../assets/images/sns/sns_twitter.png")}
                alt="twitter"
              />
            </a>

            <a href="https://t.me/sevenchainproject" target="_blank">
              <img
                src={require("../../../../assets/images/sns/sns_telegram.png")}
                alt="telegram"
              />
            </a>
            <a href="https://www.facebook.com/7chain" target="_blank">
              <img
                src={require("../../../../assets/images/sns/sns_facebook.png")}
                alt="facebook"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHuEqrnlAuQoMqeJTB8d86A"
              target="_blank"
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

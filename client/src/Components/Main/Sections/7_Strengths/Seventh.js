import React, { useContext } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import LangContext from "../../../../Context";

const Section = styled.section`
${props => props.theme.style.SectionStyle(40, 120)}
  background: ${props => props.theme.css.evenColor};
${device.PC768`padding-bottom: 15%;`}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const Hbox = styled.div`
  ${props => props.theme.style.Hbox2Style(0, props.theme.file.arr)}
  ${device.PC450`font-size : 20px;`}
`;
const SubBox = styled.div`
  color: #a7dede;
  width: 100%;
  text-align: left;
  padding-top: 40px;
  ${device.PC450`padding-top : 20px;`}
  > div:not(:first-child) {
    margin-top: 40px;
    ${device.PC450`margin-top: 30px;`}
  }
`;
const SubContent = styled.div`
  position: relative;
  padding: 15px 20px 0 200px;
  width: 100%;
  ${device.PC660`position: relative;
    padding-left: 130px;`}
  ${device.PC450`padding : 0;`}
  > div {
    position: absolute;
    top: 0;
    left: 0px;
    width: 180px;
    height: 142px;
    background-image: ${props => {
      if (props.name === "first") return `url(${props.theme.file.b2b})`;
      else if (props.name === "second")
        return `url(${props.theme.file.collabo})`;
      else if (props.name === "third")
        return `url(${props.theme.file.expansion})`;
    }};
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 180px 142px;
    ${device.PC660`
    width: 120px;
    height: 91px;
    background-size: 120px 91px;
    top : 20px;`}
    ${device.PC450`display : none;`}
  }
  h4 {
    margin-bottom: 0.5rem;
    ${device.PC990`font-size : 22px`}
    font-size: 24px;
    color: #a9dede;
    ${device.PC768`font-size : 20px`}
    ${device.PC450`font-size : 16px;`}
  }
  p {
    margin-bottom: 1rem;
    font-size: 20px;
    ${device.PC990`font-size : 19px`}
    color: #fff;
    opacity: 0.9;
    ${device.PC768`font-size : 18px`}
    ${device.PC450`font-size : 14px;`}
  }
`;
export default () => {
  const { lang } = useContext(LangContext);
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>{lang.strength01}</h3>
        </Hbox>
        <SubBox>
          <SubContent name="first">
            <div></div>
            <h4>{lang.strength02}</h4>
            <p>{lang.strength03}</p>
          </SubContent>
          <SubContent name="second">
            <div></div>
            <h4>{lang.strength04}</h4>
            <p>{lang.strength05}</p>
          </SubContent>
          <SubContent name="third">
            <div></div>
            <h4>{lang.strength06}</h4>
            <p>{lang.strength07}</p>
          </SubContent>
        </SubBox>
      </Container>
    </Section>
  );
};

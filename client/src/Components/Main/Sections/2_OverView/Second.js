import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import Scene from "../../ScrollMagic";
import LangContext from "../../../../Context";
// import { SectionStyle } from "../../Main";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
  ${device.PC768`padding-bottom: 60px;`}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const ContentBox = styled.div`
  margin-top: 0px;
  padding-left: 92px;
  position: relative;
  ${device.PC660`padding-left : 0;`}
`;
const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 450px;
  background: url(${props => props.theme.file.man}) center 0 no-repeat;
  background-size: contain;
  margin-top: 60px;
  ${device.PC`width : 300px; height : 350px; margin-top: 90px;`}
  ${device.PC660`
    position: relative;
    width: 100%;
    background-position: center;
    margin-left: 20px;
    `}
  p {
    padding: 390px 0 0 0px;
    margin: 0 0 0 -50px;
    width : 100%;
    font-size: 16px;
    text-align: center;
    color: ${props => props.theme.css.fontWhite};
    opacity: 1;
    ${device.PC`padding: 300px 0 0 0; font-size: 15px;`}
    ${device.PC920`font-size: 14px;`}
    ${device.PC660`margin: 0 0 0 -20px;`}
  }
`;
const TextBox = styled.div`
  padding: 80px 30px 0 300px;
  ${device.PC`padding: 80px 10px 0px 200px;`}
  ${device.PC920`padding: 60px 10px 0px 200px;`}
  ${device.PC660`
    padding: 60px 0 0 0;
    width: 100%;`}
  ${device.PC450`font-size: 16px;`}
  p {
    font-size: 20px;
    color: ${props => props.theme.css.fontWhite};
    opacity: 0.9;
    ${device.PC`font-size: 18px;`}
    ${device.PC768`font-size: 16px;`}
    ${device.PC660`font-size: 18px;`}
    ${device.PC450`font-size: 16px;`}
  }
`;
export default () => {
  const overview = useRef(null);
  const { lang } = useContext(LangContext);
  console.log(lang);
  useEffect(() => {
    Scene(overview.current.children, 0.7, "active");
  }, []);
  return (
    <Section id="overview">
      <Container ref={overview}>
        <HBox>
          <h2>{lang.overview01}</h2>
        </HBox>
        <ContentBox>
          <ImgBox>
            <p>{lang.overview02}</p>
          </ImgBox>
          <TextBox>
            <p>{lang.overview03}</p>
          </TextBox>
        </ContentBox>
      </Container>
    </Section>
  );
};

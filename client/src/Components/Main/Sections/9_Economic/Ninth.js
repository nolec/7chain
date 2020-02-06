import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import { LangContext } from "../../../../Context";
import Scene from "../../ScrollMagic";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const ContentBox = styled.div`
  position: relative;
  margin-top: 40px;
`;
const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    ${device.PC768`
    max-width: 350px;
    width: 100%;
    height: auto;`}
    ${device.PC660`
      max-width: 300px;`}
  }
  ${device.PC920`    
    width: 300px;
    height: 300px;`}
  ${device.PC768`
      width: 100%;
    text-align: center;
    position: relative;`}
`;
const Content = styled.div`
  padding: 0px 0px 0 420px;
  opacity: 0.9;
  min-height: 400px;
  ${device.PC920`  
      padding:0px 10px 0px 340px;
      height:100%;`}
  ${device.PC768`
    padding: 80px 0 0 0;
    width: 100%;`}
  ${device.PC660`
    padding: 40px 0 0 0;`}
  p {
    font-size: 20px;
    color: #fff;
    ${device.PC`
      font-size: 18px;
  `}
      ${device.PC450`
      font-size: 16px;
  `}
  }
`;
export default () => {
  const { lang } = useContext(LangContext);

  const economic = useRef(null);
  useEffect(() => {
    Scene(economic.current.children, 0.7, "active");
  }, []);
  return (
    <Section id="economic">
      <Container ref={economic}>
        <HBox>
          <h2>{lang.economic01}</h2>
        </HBox>
        <ContentBox>
          <ImgBox>
            <img src={lang.economic02} alt="economic" />
          </ImgBox>
          <Content>
            <p>{lang.economic03}</p>
          </Content>
        </ContentBox>
      </Container>
    </Section>
  );
};

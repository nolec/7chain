import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import { LangContext } from "../../../../Context";
import Scene from "../../ScrollMagic";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(0, 120)};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
  border-top: 1px dotted #a59f91;
`;
const Hbox = styled.div`
  ${props => props.theme.style.Hbox2Style(40, props.theme.file.arr)}
`;
const ImgBox = styled.div`
  position: relative;
  margin-top: 40px;
  text-align: center;
  width: 100%;
`;
const Img = styled.img.attrs(props => ({ src: props.theme.file.architecture }))`
  position: relative;
  width: 95%;
  ${device.PC768`display : none`};
`;
const ImgV = styled.img.attrs(props => ({
  src: props.theme.file.architecture_v
}))`
  width: 100%;
  max-width: 450px;
  position: relative;
  display: none;
  ${device.PC768`display : inline`};
`;
export default () => {
  const { lang } = useContext(LangContext);
  const architecture = useRef(null);
  useEffect(() => {
    Scene(architecture.current.children, 0.7, "active");
  }, []);
  return (
    <Section>
      <Container ref={architecture}>
        <Hbox>
          <h3>{lang.architecture}</h3>
        </Hbox>
        <ImgBox>
          <Img />
          <ImgV />
        </ImgBox>
      </Container>
    </Section>
  );
};

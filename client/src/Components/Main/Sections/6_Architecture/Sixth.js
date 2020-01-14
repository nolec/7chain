import React from "react";
import styled from "styled-components";
import { device } from "../../../../device";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(0, 120)};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
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
const Img = styled.img.attrs({
  src: props => props.theme.file.architecture
})`
  position: relative;
  width: 95%;
  display: inline;
  ${device.PC768`display : none`};
`;
const ImgV = styled.img.attrs({
  src: props => props.theme.file.architecture_v
})`
  width: 100%;
  max-width: 450px;
  position: relative;
  display: none;
  ${device.PC768`display : inline`};
`;
export default () => {
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>7Chain 아키텍처</h3>
        </Hbox>
        <ImgBox>
          <Img />
          <ImgV />
        </ImgBox>
      </Container>
    </Section>
  );
};

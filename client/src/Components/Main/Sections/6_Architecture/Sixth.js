import React from "react";
import styled from "styled-components";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(45, 120)};
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
  img {
    position: relative;
    width: 95%;
    display: inline;
  }
`;
const Img = styled.img.attrs({
  src: props => props.theme.file.architecture
})``;
export default () => {
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>7Chain 아키텍처</h3>
        </Hbox>
        <ImgBox>
          <Img />
        </ImgBox>
      </Container>
    </Section>
  );
};

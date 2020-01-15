import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
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
export default ({ forwardedRef }) => {
  return (
    <Section id="overview">
      <Container ref={forwardedRef}>
        <HBox>
          <h2>탈중앙화된 확률의 중요성</h2>
        </HBox>
        <ContentBox>
          <ImgBox>
            <p>
              로제 카이와 - 사회학자, 문학평론가
              <br />
              (1913년 3월 3일 ~ 1978년 12월 21일)
            </p>
          </ImgBox>
          <TextBox>
            <p>
              프랑스의 사회학자이자 평론가인 ‘로제카이와(Roger Caillois)’는
              1958년 그의 저서 '인간과 놀이'에서 “게임은 역할과 경쟁 그리고 운,
              이 3가지 재미요소를 통해 궁극적인 몰입 단계에 이른다.”라고
              정의하고 있습니다.
              <br />
              <br />
              현 시대의 디지털 게임 또한 그가 정의한 3가지 재미요소로 구성되어
              있으며, 특히 운은 게임 전체에 영향을 주기 때문에 핵심 요소로
              작용하고 있습니다.
              <br />
              <br />
              하지만 운 즉, 확률은 중앙화 되어 있는 구조로 인해 악의적인 조작
              여부와 관계없이 여전히 불신의 영역으로 남아 있으며 현재까지도 많은
              분쟁이 발생하고 있습니다.
              <br />
              <br />
              이제 7Chain을 통해 이러한 분쟁은 사라질 것 입니다.
            </p>
          </TextBox>
        </ContentBox>
      </Container>
    </Section>
  );
};

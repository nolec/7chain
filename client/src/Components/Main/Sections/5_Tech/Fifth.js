import React from "react";
import styled from "styled-components";
import { device } from "../../../../device";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(45, 120)};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const Hbox = styled.div`
  ${props => props.theme.style.Hbox2Style(0, props.theme.file.arr)}
  ${device.PC450`font-size : 20px;`}
  h3 {
    margin-bottom: 0 !important;
  }
`;
const ContentBox = styled.div`
  display: inline-block;
  height: 610px;
  width: 377px;
  margin-top: 60px;
  padding: 0 10px;
  text-align: center;
  vertical-align: top;
  background-image: ${props => {
    if (props.name === "one") return `url(${props.theme.file.rng})`;
    else if (props.name === "two") return `url(${props.theme.file.dapp})`;
    else if (props.name === "three") return `url(${props.theme.file.view})`;
  }};
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  &:not(:nth-of-type(2)) {
    margin-left: 15px;
  }
  &:not(:nth-child(1)) > div {
    padding-top: 401px;
    ${device.PC`padding-top : 20px;`};
    ${device.PC768`padding-top : 0px;`};
  }
  ${device.PC`
    position: relative;
    width: 90%;
    height: auto;
    min-height: 200px;
    padding-top: 20px;
    background-size: 200px 200px;
    > div{
      text-align : left;
      }
      br{
        display : none;
      }
      `};
  ${device.PC768`padding-top : 0px; min-height : 120px;`};
  :nth-child(even) {
    ${device.PC`
    margin: 40px 0 0 5%;
    padding-left: 220px;
    background-position: top left;
    `}
    ${device.PC768`    
    padding-top: 0;
    width: 100%;
    margin: 40px 0 0;
    padding-left: 130px;
    background-size: 120px 120px;`}
        ${device.PC450`    
    padding: 190px 0 0;    
    background-position: center top;
    background-size: 180px 180px;`}
  }
  :nth-child(3) {
    ${device.PC`
    margin: 40px 15px 0 5%;
    padding-right: 220px;
    background-position: top right;
    `}
    ${device.PC768`    
    padding-top: 0;
    width: 100%;
    margin: 40px 0 0;
    padding-right: 130px;
    background-size: 120px 120px;`}
        ${device.PC450`    
    padding: 190px 0 0;    
    background-position: center top;
    background-size: 180px 180px;`}
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: auto;
  b {
    font-size: 24px;
    color: #a9dede;
    font-weight: bolder;
    ${device.PC768`font-size: 20px;`};
    ${device.PC450`    display: block;
    font-size: 16px;
    width: 100%;
    text-align: center;`}
  }
  p {
    font-size: 20px;
    margin-top: 20px;
    color: #fff;
    opacity: 0.9;
    margin-bottom: 1rem;
    ${device.PC768`font-size: 15px; margin-top : 10px;`};
    ${device.PC450`font-size: 14px;`}
  }
`;
export default () => {
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>핵심기술</h3>
        </Hbox>
        <ContentBox name="one">
          <TextBox>
            <b>
              세계최초의 탈중앙화 <br />
              RNG 기술
            </b>
            <p>
              게임 플레이어, 게임 운영사, 7Chain 3개의 <br />
              그룹이 공동으로 난수 생성에 참여하여 <br />
              절대적인 공정성을 제공합니다.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox name="two">
          <TextBox>
            <b>
              EOS 기반 <br />
              스마트 컨트랙트로 구현된 Dapp
            </b>
            <p>
              난수생성을 비롯한 모든 과정이 <br />
              EOS 기반 Smart contract로 구현되어 <br />
              투명한 게임 환경을 제공합니다.
            </p>
          </TextBox>
        </ContentBox>
        <ContentBox name="three">
          <TextBox>
            <b>
              사용자 맞춤형 <br />
              Blockchain Scanner
            </b>
            <p>
              사용자 편의에 맞춘 웹 뷰어를 제공하여
              <br />
              블록체인에 기록된 대량의 데이터를
              <br />
              보다 쉽게 확인 할 수 있습니다.
            </p>
          </TextBox>
        </ContentBox>
      </Container>
    </Section>
  );
};

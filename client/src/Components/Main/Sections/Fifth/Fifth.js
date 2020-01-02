import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 45px;
  padding-bottom: 120px;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 1162px;
  width: 1162px;
  margin: auto;
`;
const Hbox = styled.div`
  position: relative;
  margin-bottom: 0;
  font-size: 30px;
  h3 {
    color: #a7dede;
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${require("../../../../assets/images/ico_arr_r.png")}) 50%
        70% no-repeat;
    }
  }
`;
const ContentBox = styled.div`
  display: inline-block;
  height: 610px;
  width: 377px;
  margin-top: 60px;
  padding-top: 401px !important;
  padding: 0 10px;
  text-align: center;
  vertical-align: top;
  background-image: ${props => {
    if (props.name === "one")
      return `url(${require("../../../../assets/images/Icon_DecentralizationRNG.png")})`;
    else if (props.name === "two")
      return `url(${require("../../../../assets/images/Icon_Dapp.png")})`;
    else if (props.name === "three")
      return `url(${require("../../../../assets/images/Icon_View.png")})`;
  }};
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  :not(:nth-of-type(2)) {
    margin-left: 15px;
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: auto;
  b {
    font-size: 24px;
    color: #a9dede;
    font-weight: bolder;
  }
  p {
    font-size: 20px;
    margin-top: 20px;
    color: #fff;
    opacity: 0.9;
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

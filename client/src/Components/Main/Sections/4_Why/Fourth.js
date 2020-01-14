import React from "react";
import styled from "styled-components";
import { device } from "../../../../device";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const ContentBox = styled.div`
  padding-bottom: 120px;
  margin-top: 40px;
  ${device.PC`text-align: center;`}
  ${device.PC770`padding-bottom: 60px;`}
  h3 {
    position: relative;
    margin-bottom: 0;
    font-size: 30px;
    text-align: left;
    color: #a7dede;
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${props => props.theme.file.arr}) 50% 70% no-repeat;
    }
  }
  > div {
    display: inline-block;
    width: 33.33%;
    vertical-align: top;
    text-align: left;
    color: #fff;
    ${device.PC`
      position: relative;
      width: auto;`};
    ${device.PC770`
    text-align: center;
    width: 95%;
    padding: 0px;`};
  }
`;
const Legacy = styled.div`
  ${props =>
    props.theme.style.handleWhyBox(
      420,
      "120px 0 0 140px",
      0,
      "210px 0 0",
      props.theme.file.legacy,
      "center top"
    )};
  ${props => props.theme.style.whyBoxStyle(18, props.theme.css.whyBcolor, 16)};
  ${device.PC`    
    padding: 140px 0 0 150px;
    left: 60px;
    margin: 100px 0px 0px;
    width: 460px;`}
  ${device.PC990`    
    padding: 100px 0 0 120px;
    top: 50px;
    left: 50px;
    margin: 70px 0px;
    width: 355px;`}
  ${device.PC770`    
    padding: 145px 0 0 165px;
    top: 0;
    left: 0px;
    margin: 70px 0 20px 0;
    width: 470px;
    background-position: center top;
    text-align: left;`}
`;
const BlockChain = styled.div`
  ${props =>
    props.theme.style.handleWhyBox(
      420,
      "200px 0 0 115px",
      42,
      "429px 0 0",
      props.theme.file.blockChain,
      "center top"
    )}
  ${props => props.theme.style.whyBoxStyle(18, props.theme.css.whyBcolor, 16)};
  ${device.PC`    
    padding: 230px 0 0 125px;
    left: -60px;
    margin: 100px 0px 0px;
    width: 460px;`}
  ${device.PC990`    
    padding: 190px 0 0 130px;
    top: 50px;
    left: -50px;
    margin: 70px 0px;
    width: 355px;`}
  ${device.PC770`    
    padding: 230px 0 0 140px;
    top: 10px;
    left: 0px;
    margin: 0px 0 20px 0;
    width: 470px;
    background-position: center top;
    text-align: left;`}
`;
const SevenChain = styled.div`
  ${props =>
    props.theme.style.handleWhyBox(
      500,
      "550px 0 0 140px",
      82,
      "70px 0 0",
      props.theme.file.chainGray,
      "center top"
    )}
  p b {
    font-size: 18.5px;
  }
  ${props =>
    props.theme.style.whyBoxStyle(18.5, props.theme.css.whyCcolor, 16.5)};
  ${device.PC`
    padding: 160px 0 0 420px;
    top: -150px;
    left: 0px;
    margin: 30px 0px 0px;
    width: 710px;
    background-size : 410px;
    background-position : left top;
    `}
  ${device.PC770`    
    padding: 460px 0 0 120px;
    top: 10px;
    left: 0px;
    margin: 0px 0 20px 0;
    width: 440px;
    background-position: center top;
    text-align: left;`}
`;
const SubBox = styled.div`
  color: #a7dede;
  width: 100%;
  text-align: left;
  padding-top: 40px;
  border-top: 1px dotted #a59f91;
  > div:not(:first-child) {
    margin-top: 40px;
  }
`;
const SubContent = styled.div`
  position: relative;
  padding-left: 200px;
  width: 100%;
  height: 142px;
  ${device.PC770`    
    padding: 0 10px 0 140px;
    height: auto;`}
  > div {
    position: absolute;
    top: 0;
    left: 0px;
    width: 180px;
    height: 142px;
    background-image: ${props => {
      if (props.name === "first") return `url(${props.theme.file.equity})`;
      else if (props.name === "second")
        return `url(${props.theme.file.transparency})`;
      else if (props.name === "third")
        return `url(${props.theme.file.blueOcean})`;
    }};
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 180px 142px;
    ${device.PC770`    
width: 120px;
    height: 91px;
    background-size: 120px 91px;`}
  }
  h4 {
    font-size: 24px;
    color: #a9dede;
    padding-top: 20px;
    ${device.PC770`    
font-size: 20px;
    padding-top: 10px;`}
  }
  p {
    font-size: 20px;
    color: #fff;
    opacity: 0.9;
    ${device.PC770`    
    font-size: 15px;`}
  }
`;
export default () => {
  return (
    <Section id="why">
      <Container>
        <HBox>
          <h2>왜 7Chain 일까요?</h2>
        </HBox>
        <ContentBox>
          <h3>
            7Chain은 가장 혁신적인 RNG를 통해 디지털 게임의 신뢰 문제를
            해결합니다.
          </h3>
          <div>
            <Legacy>
              <p>
                <b>중앙화 시스템</b>
                <br />
                <span>데이터 조작 가능성</span>
              </p>
              <p>
                <b>중앙화 서비스</b>
                <br />
                <span>디지털 자산 휘발성</span>
              </p>
              <p>
                <b>제 3자 마케팅 인센티브</b>
                <br />
                <span>비용증가</span>
              </p>
            </Legacy>
          </div>
          <div>
            <BlockChain>
              <p>
                <b>탈중앙화 시스템</b>
                <br />
                <span>데이터 조작 불가</span>
              </p>
              <p>
                <b>탈중앙화 서비스</b>
                <span>디지털 자산 영구 보존</span>
              </p>
              <p>
                <b>TX 속도문제 / 실시간 게임 적용불가</b>
                <span>거래비용증가</span>
              </p>
              <p>
                <b>투명한 난수 생성 기술 증명 못함</b>
              </p>
              <p>
                <b>특정 OS 플랫폼에 대한 제한적 지원</b>
              </p>
            </BlockChain>
          </div>
          <div>
            <SevenChain>
              <p>
                <b>탈중앙화 시스템</b>
                <br />
                <span>데이터 조작 불가</span>
              </p>
              <p>
                <b>탈중앙화 서비스</b>
                <br />
                <span>MVP를 통해 기술 증명</span>
              </p>
              <p>
                <b>가장 공정하고 완벽하게 탈중앙화된 RNG</b>
                <br />
                <span>MVP를 통해 기술 증명</span>
              </p>
              <p>
                <b>DPoS 기반 / 실시간 처리, 거래수수료 없음</b>
              </p>
              <p>
                <b>Windows, Android, iOS, HTML5 지원</b>
              </p>
              <p>
                <b>최저 플랫폼 수수료 / 거래비용 절감</b>
                <span id="lblWhy7Chain024">게임사업자 수익 향상</span>
              </p>
            </SevenChain>
          </div>
        </ContentBox>
        <SubBox>
          <SubContent name="first">
            <div></div>
            <h4>공정성</h4>
            <p>
              7Chain의 RNG 알고리즘은 게임 플레이어와 게임 운영자가 직접 난수
              생성에 참여함으로써 게임 결과에 대한 절대적인 공정성이 제공되는
              세계 최초의 기술입니다.
            </p>
          </SubContent>
          <SubContent name="second">
            <div></div>
            <h4>투명성</h4>
            <p>
              게임 플레이어는 결과가 조작되지 않음을 알 수 있고, 게임 운영사는
              그 대가로 고객의 신뢰를 보장받을 수 있으며, 관할 기관은 결과의
              정확성을 쉽게 검증하고 인증할 수 있습니다.
            </p>
          </SubContent>
          <SubContent name="third">
            <div></div>
            <h4>블루오션 시장</h4>
            <p>
              인터렉티브 게임으로부터 소셜 게임 그리고 롤플레잉 게임에
              이르기까지 7Chain 플랫폼은 RNG 알고리즘에 의존하는 모든 디지털
              게임을 호스팅할 수 있습니다.
            </p>
          </SubContent>
        </SubBox>
      </Container>
    </Section>
  );
};

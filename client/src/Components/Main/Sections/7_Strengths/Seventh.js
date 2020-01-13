import React from "react";
import styled from "styled-components";

const Section = styled.section`
${props => props.theme.style.SectionStyle(40, 120)}
  background: ${props => props.theme.css.evenColor};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const Hbox = styled.div`
  ${props => props.theme.style.Hbox2Style(0, props.theme.file.arr)}
`;
const SubBox = styled.div`
  color: #a7dede;
  width: 100%;
  text-align: left;
  padding-top: 40px;
  > div:not(:first-child) {
    margin-top: 40px;
  }
`;
const SubContent = styled.div`
  position: relative;
  padding: 15px 20px 0 200px;
  width: 100%;
  height: 142px;
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
  }
  h4 {
    font-size: 24px;
    color: #a9dede;
  }
  p {
    font-size: 20px;
    color: #fff;
    opacity: 0.9;
  }
`;
export default () => {
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>7Chain의 강점</h3>
        </Hbox>
        <SubBox>
          <SubContent name="first">
            <div></div>
            <h4>개방형 B2B 플랫폼</h4>
            <p>
              7Chain의 RNG 프로토콜은 전세계 모든 권역의 암호화폐 법령 규제없이
              현재 서비스 중인 모든 게임에 빠르게 적용할 수 있습니다. 7Chain
              RNG는 게임 내 암호화폐를 통한 자산 거래 기능 없이도 작동할 수 있기
              때문입니다. 7Chain은 게임 운영사에게 최소한의 수수료만 부과합니다.
            </p>
          </SubContent>
          <SubContent name="second">
            <div></div>
            <h4>콜라보레이션</h4>
            <p>
              7Chain 플랫폼은 다른 블록체인 플랫폼과 콜라보레이션이 가능합니다.
              7Chain의 신뢰 기반 프로토콜이 타 생태계의 조력자로서 동작할 때
              자체 생태계도 함께 성장할 수 있기 때문입니다.
            </p>
          </SubContent>
          <SubContent name="third">
            <div></div>
            <h4>확장성</h4>
            <p>
              7Chain 플랫폼은 HTML5 뿐만 아니라 게임 콘텐츠에 가장 많이 사용되는
              Unity3d 엔진을 지원합니다. 즉, Web 기반 API와 Unity 3d 전용 SDK를
              제공하여 7Chain 기술이 게임에 쉽고 빠르게 적용되도록 할 것 입니다.
            </p>
          </SubContent>
        </SubBox>
      </Container>
    </Section>
  );
};

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-bottom: 120px;
  overflow: hidden;
  background: #1c1c1c;
`;
const Container = styled.div`
  max-width: 1162px;
  width: 1162px;
  margin: auto;
`;
const HBox = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 45px;
  transition: all 0.1s, color 0.1s 0.1s;
  border-bottom: 1px #282828 solid;
  padding-bottom: 15px;
  h2 {
    font-size: 40px;
    color: #fff;
  }
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
  }
`;
const Content = styled.div`
  padding: 0px 0px 0 420px;
  opacity: 0.9;
  min-height: 400px;
  p {
    font-size: 20px;
    color: #fff;
  }
`;
export default () => {
  return (
    <Section id="economic">
      <Container>
        <HBox>
          <h2>7Chain의 플랫폼 경제</h2>
        </HBox>
        <ContentBox>
          <ImgBox>
            <img
              src={require("../../../../assets/images/Chart_Pareto_Korean.png")}
            />
          </ImgBox>
          <Content>
            <p>
              7Chain 플랫폼은 다수의 이해관계자(토큰홀더)에게 상당한 네트워크
              효과를 가져올 것 입니다. 이 플랫폼 제안의 핵심은 완벽하게
              탈중앙화된 RNG가 신뢰를 상승시킴으로써 게임 서비스 제공자와 사용자
              모두를 불러올 만큼 매력적일 것이며, 궁극적으로는 거래비용이 감소될
              것이기 때문입니다.
              <br />
              <br />
              결국 7Chain 플랫폼을 도입하는 것이 ‘현재의 시장 상황 보다 훨씬
              우세하다’라는 직접적인 결과를 가져올 것 입니다: 이것은 이상적인
              조건 하에서, 자유시장 시스템이 파레토 최적(Pareto optimality)
              결과로 이끄는 것과 같습니다.
              <br />
              <br />
              결론적으로 네이티브 토큰 VII 는 (1)RNG 참여를 통한 모든
              이해당사자들의 혜택, (2)게임 서비스를 위한 보유 화폐, (3)게임
              플레이를 위한 지불 화폐 등 경제 생태계의 순환과 플랫폼 도입에 힘을
              실어 줄 것입니다.
            </p>
          </Content>
        </ContentBox>
      </Container>
    </Section>
  );
};

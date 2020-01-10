import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import GraphAreaOne from "./Graph/AreaOne";
import GraphAreaTwo from "./Graph/AreaTwo";
import Scene from "../../ScrollMagic";
import ScrollMagic from "scrollmagic";

const Section = styled.section`
  padding-bottom: 120px;
  margin: auto;
`;
const Container = styled.div`
  max-width: 1260px;
  width: 1162px;
  margin: auto;
  > div {
    opacity: 0;
    position: relative;
    top: -100;
    transition: 0.3s linear;
  }
  .active {
    position: relative;
    opacity: 1;
    top: 0;
  }
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
const GraphBox = styled.div`
  margin-top: 40px;
  > div:nth-child(2) {
    margin-top: 100px;
    padding-top: 40px;
    border-top: 1px dotted #a59f91;
  }
  h3 {
    position: relative;
    margin-bottom: 0;
    font-size: 30px;
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
    span {
      display: block;
      margin-top: 8px;
      font-size: 18px;
    }
  }
  p {
    margin: 25px 0 0 0;
    color: #fff;
    font-size: 20px;
    b {
      color: #bfaa7b;
      font-weight: bolder;
    }
  }
`;
const GraphArea = styled.div`
  margin-top: 45px;
  h4 {
    font-size: 36px;
    color: #5fdbff;
  }
`;
export default () => {
  const gsap = useRef(null);
  useEffect(() => {
    Scene(gsap);
    return () => Scene(gsap);
  }, []);
  return (
    <Section id="analysis">
      <Container ref={gsap}>
        <HBox>
          <h2>글로벌 게이밍 마켓 분석</h2>
        </HBox>
        <GraphBox>
          <div>
            <h3>
              {" "}
              GLOBAL GAMES MARKET (Newzoo)
              <span>
                Revenues per Segment 2016-2021 with Compound annual Growth Rates
              </span>
            </h3>
            <p>
              <span>
                디지털 게임 시장은 범세계적인 성장세를 지속하고 있습니다:
                스마트폰의 확산, 초고속 모바일 네트워크의 광범위한 보급, 개발
                도상국 시장의 중산층 성장, 수요에 대한 소비 욕구에 힘입어
                전세계적으로 성장하고 있습니다.
              </span>
            </p>
            <GraphAreaOne />
          </div>
          <div>
            <h3> GLOBAL iGAMING MARKET GROSS WIN (H2Gaming)</h3>
            <p>
              인터렉티브 게이밍 시장 또한 온라인과 오프라인을 합쳐 2022년
              5,190억 달러로 성장이 예측되고 있으며, 온라인 시장의 성장세에
              주목할 필요가 있습니다. 이는 디지털 게임에 익숙한 미래의 잠재
              고객들이 오프라인 보다 온라인 환경을 선호하기 때문이며, 곧{" "}
              <b>7Chain 플랫폼 수익화에 있어 수직적 성장</b>을 기대할 수 있기
              때문입니다.
            </p>
            <GraphAreaTwo />
          </div>
        </GraphBox>
      </Container>
    </Section>
  );
};

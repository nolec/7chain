import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-bottom: 120px;
  overflow: hidden;
  background: #1c1c1c;
`;
const Container = styled.div`
  max-width: 1260px;
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
  padding-bottom: 120px;
  margin-top: 40px;
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
  }
  > div {
    display: inline-block;
    width: 33.33%;
    vertical-align: top;
    > div {
      position: relative;
      top: 0px;
      display: inline-block;
      p {
        padding: 0;
        line-height: 1.5;
        margin-bottom: 1rem;
        b {
          font-size: 18px;
          color: #a7dede;
          font-weight: normal;
        }
        span {
          display: block;
          margin-top: 0px;
          padding-left: 11px;
          font-size: 16px;
          color: #fff;
          opacity: 0.9;
          background: url(${require("../../../../assets/images/arr_r_why.png")})
            0 50% no-repeat;
        }
      }
    }
  }
`;
const Legacy = styled.div`
  width: 420px;
  padding: 120px 0 0 140px;
  left: 0px;
  margin: 210px 0px 0px;
  background: url(${require("../../../../assets/images/Why_legacy.png")}) center
    top no-repeat;
  background-size: contain;
`;
const BlockChain = styled.div`
  width: 420px;
  padding: 200px 0 0 115px;
  left: -42px;
  margin: 429px 0px 0px;
  background: url(${require("../../../../assets/images/Why_blockchain.png")})
    center top no-repeat;
  background-size: contain;
`;
const SevenChain = styled.div`
  width: 500px;
  text-align: left;
  padding: 550px 0 0 140px;
  top: 0px;
  left: -82px;
  margin: 70px 0px 0px;
  background: url(${require("../../../../assets/images/Why_7chain_gray.png")})
    center top no-repeat;
  background-size: contain;
  p {
    b {
      color: #5fdafe !important;
      font-size: 18.5px !important;
    }
    span {
      font-size: 16.5px !important;
    }
  }
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
  > div {
    position: absolute;
    top: 0;
    left: 0px;
    width: 180px;
    height: 142px;
    background-image: ${props => {
      if (props.name === "first")
        return `url(${require("../../../../assets/images/Icon_Equity.png")})`;
      else if (props.name === "second")
        return `url(${require("../../../../assets/images/Icon_Transparency.png")})`;
      else if (props.name === "third")
        return `url(${require("../../../../assets/images/Icon_BlueOcean.png")})`;
    }};
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 180px 142px;
  }
  h4 {
    font-size: 24px;
    color: #a9dede;
    padding-top: 20px;
  }
  p {
    font-size: 20px;
    color: #fff;
    opacity: 0.9;
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

import React from "react";
import styled from "styled-components";
import { device } from "../../../../device";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(0, 120)}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
  margin-bottom: 55px;
  h2 {
    font-size: 40px;
    color: #fff;
  }
`;
const ChartBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Chart = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  flex: 0 0 50%;
  max-width: 50%;
  ${device.PC860`
  flex: 0 0 100%;
  max-width: 100%;`}
`;
const Top = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  margin: 0 auto;
`;
const ImgBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
const TextBox = styled.div`
  position: absolute;
  display: table;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  p {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 23px;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
`;
const SubBox = styled.div``;
const Bottom = styled.div`
  position: relative;
  max-width: 350px;
  width: 100%;
  margin: 20px auto 0;
  padding-left: 20px;
  ul {
    padding: 0;
    li {
      display: block;
      font-size: 20px;
      color: #fff;
      line-height: 1.6;
      font-weight: 600;
      padding-bottom: 10px;
      text-align: left;
      ${device.PC860`
  padding-bottom: 5px;
  font-size : 18px;`}
      b {
        padding-right: 10px;
      }
      :nth-child(1) b {
        color: #93a4bd;
      }
      :nth-child(2) b {
        color: #6f7d94;
      }
      :nth-child(3) b {
        color: #526177;
      }
      :nth-child(4) b {
        color: #465469;
      }
      :nth-child(5) b {
        color: #374458;
      }
      :nth-child(6) b {
        color: #283548;
      }
    }
  }
`;
export default () => {
  return (
    <Section id="token">
      <Container>
        <HBox>
          <h2>토큰 할당 정책</h2>
        </HBox>
        <ChartBox>
          <Chart>
            <Top>
              <ImgBox>
                <img src={require("../../../../assets/images/Pie_1.png")} />
              </ImgBox>
              <TextBox>
                <p>
                  발행 토큰
                  <br />
                  할당 계획
                </p>
              </TextBox>
            </Top>
            <Bottom>
              <ul>
                <li>
                  <b>◆</b>마케팅 5%
                </li>
                <li>
                  <b>◆</b>팀 (LOCKED) 7%
                </li>
                <li>
                  <b>◆</b>설립자 (LOCKED) 8%
                </li>
                <li>
                  <b>◆</b>커뮤니티 10%
                </li>
                <li>
                  <b>◆</b>개발사 투자 및 스테이킹 20%
                </li>
                <li>
                  <b>◆</b>토큰 세일 50%
                </li>
              </ul>
            </Bottom>
          </Chart>
          <Chart>
            <Top>
              <ImgBox>
                <img src={require("../../../../assets/images/Pie_2.png")} />
              </ImgBox>
              <TextBox>
                <p>
                  수익금
                  <br />
                  사용 계획
                </p>
              </TextBox>
            </Top>
            <Bottom>
              <ul>
                <li>
                  <b>◆</b>콘텐츠 소싱 18%
                </li>
                <li>
                  <b>◆</b>개발 38%
                </li>
                <li>
                  <b>◆</b>마케팅, 운영비 30%
                </li>
                <li>
                  <b>◆</b>법율대응 10%
                </li>
                <li>
                  <b>◆</b>자문위원 4%
                </li>
              </ul>
            </Bottom>
          </Chart>
        </ChartBox>
      </Container>
    </Section>
  );
};

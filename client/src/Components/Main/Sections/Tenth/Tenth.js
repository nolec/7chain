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
  width: 1162px;
  margin: 0 auto;
  padding-top: 45px;
  transition: all 0.1s, color 0.1s 0.1s;
  border-bottom: 1px #282828 solid;
  padding-bottom: 15px;
  margin-bottom: 55px;
  h2 {
    font-size: 40px;
    color: #fff;
  }
`;
const TimeList = styled.div`
  margin-bottom: -1.5em;
  .timeline {
    position: relative;
    padding: 0;
    list-style: none;
    height: 100%;
    ::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 26px;
      width: 2px;
      margin-left: -1.5px;
      content: "";
      background-color: #a9dede;
      left: 50%;
    }
    ::after {
      clear: both;
    }
    li {
      position: relative;
      margin-bottom: 40px;
      ::before {
        display: table;
        content: "";
      }
    }
    h3 {
      font-size: 80px;
      color: #fff;
      margin-bottom: 0.5rem;
      ::before {
        display: block;
        content: "";
        position: absolute;
        top: 40px;
        left: 0;
        width: calc(100% - 120px);
        height: 1px;
        background: #777;
      }
    }
    h4 {
      font-size: 23px;
      margin-bottom: 0;
      color: #a9dede;
    }
    p {
      font-size: 17px;
      margin-bottom: 0;
      color: #fff;
      padding-top: 15px;
    }
    .timeline-panel {
      float: left;
      width: 50%;
      padding-left: 0;
      display: block;
    }
    .timeline-panel.left {
      text-align: right;
      padding-right: 90px;
    }
    .timeline-panel.right {
      text-align: left;
      padding-left: 85px;
    }
    .year h3 {
      position: relative;
      margin-right: 60px;
    }
    .timeline-image {
      position: absolute;
      left: 0;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      z-index: 100;
      background-color: #a9dede;
      left: 50%;
      margin-left: -16px;
      ::after {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        margin: -6px 0 0 -6px;
        background: #1c1c1c;
        border-radius: 50%;
      }
    }
  }
`;
export default () => {
  return (
    <Section>
      <Container>
        <HBox>
          <h2>Roadmap</h2>
        </HBox>
        <TimeList>
          <ul class="timeline">
            <li class="year-p">
              <div class="timeline-panel left year">
                <h3>17</h3>
              </div>
              <div class="timeline-image"></div>
              <div class="timeline-panel right">
                <h4>2017년 4분기</h4>
                <p>주요 멤버 영입</p>
                <p>블록체인기술 R&amp;D</p>
              </div>
            </li>
          </ul>
        </TimeList>
        <TimeList>
          <ul class="timeline">
            <li class="year-p">
              <div class="timeline-panel left year">
                <h3>18</h3>
              </div>
              <div class="timeline-image"></div>
              <div class="timeline-panel right">
                <h4>2018년 1분기</h4>
                <p>Numbers21 PTE.LTD 싱가포르 법인 설립</p>
                <p>게임 플레이어 참여형 RNG 기술 개발</p>
                <p>7Chain 프로젝트 착수</p>
              </div>
            </li>
          </ul>
        </TimeList>
      </Container>
    </Section>
  );
};

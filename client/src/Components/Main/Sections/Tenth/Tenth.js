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
`;
const Timeline = styled.ul`
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
  li {
    position: relative;
    margin-bottom: 40px;
    display: flex;
    ::before {
      display: table;
      content: "";
    }
    h3 {
      position: relative;
      margin-right: 60px;
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
  }
  .timeline-panel {
    position: relative;
    width: 50%;
    text-align: left;
    padding-left: 0;
    &.left {
      text-align: right;
      padding-right: 90px;
    }
    &.right {
      text-align: left;
      padding-left: 85px;
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
  }
  .timeline-image {
    position: absolute;
    left: 50%;
    width: 32px;
    height: 32px;
    margin-left: -16px;
    border-radius: 100%;
    z-index: 100;
    background-color: #a9dede;
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
    &.small {
      width: 16px;
      height: 16px;
      margin-left: -9px;
      ::after {
        content: none;
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
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left year">
                <h3>17</h3>
              </div>
              <div className="timeline-image"></div>
              <div className="timeline-panel right">
                <h4>2017년 4분기</h4>
                <p>주요 멤버 영입</p>
                <p>블록체인기술 R&amp;D</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left year">
                <h3>18</h3>
              </div>
              <div className="timeline-image"></div>
              <div className="timeline-panel right">
                <h4>2018년 1분기</h4>
                <p>Numbers21 PTE.LTD 싱가포르 법인 설립</p>
                <p>게임 플레이어 참여형 RNG 기술 개발</p>
                <p>7Chain 프로젝트 착수</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2018년 4~5월</h4>
                <p>7Chain RNG v0.1 개발 완료</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right">
                <h4>2018년 6월</h4>
                <p>7Chain RNG v0.2 업데이트</p>
                <p>7Chain RNG v0.2 가 적용된 포커게임과 슬롯게임 MVP 공개</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2018년 7월</h4>
                <p>7Chain RNG v0.5 업데이트</p>
                <p>공식 홈페이지 오픈</p>
                <p>게임 플레이어 참여형 RNG, 한국 특허 출원</p>
                <p>Korea Blockchain Summit 2018 부스</p>
                <p className="sub-txt">- 아이템 가차, 아이템 인첸트 MVP 공개</p>
                <p>Nifty 2018 참가 및 7Chain 홍보</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right">
                <h4>2018년 8월</h4>
                <p>게임 플레이어 참여형 RNG, 국제 PCT 특허 출원</p>
                <p>일본 Subete-Games 미디어 파트너십 계약</p>
                <p>
                  일본 H2Interactive, 일본 내 RNG 솔루션 독점 총판 계약 체결
                </p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2018년 9월</h4>
                <p>Tokyo Game Show 참가, 7Chain 홍보</p>
                <p>뉴질랜드 Ziopops, 7Chain RNG 솔루션 공급 파트너십 체결</p>
                <p>공식 미디어 채널 개설</p>
                <p className="sub-txt">- 블로그, 트위터, 페이스북, 텔레그램</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right">
                <h4>2018년 10월</h4>
                <p>공식 홈페이지 리뉴얼 오픈</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2018년 11월</h4>
                <p>Gstar 2018 부스 참가, 7Chain 홍보</p>
                <p>
                  한국 최대 EOS 커뮤니티 KOREOS-미디오스 전략적 파트너십 체결
                </p>
                <p>KOREOS 내 7Chain 공식 채널 개설</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right">
                <h4>2018년 12월</h4>
                <p>
                  체인파트너스社의 한국 EOS 대표 BP, 이오시스 전략적 파트너십
                  체결
                </p>
                <p>한국 최고 보안회사, 스틸리언 전략적 파트너십 체결</p>
                <p>블록체인 게임 개발사, 노드브릭 전략적 파트너십 체결</p>
                <p>
                  EOS 개발자 밋업 및 7Chain 밋업 서울 개최 / 커뮤니티 지갑 7Chat
                  공개
                </p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left year">
                <h3>
                  <span>19</span>
                </h3>
              </div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image"></div>
              <div className="timeline-panel right">
                <h4>2019년 1분기</h4>
                <p>7Chain RNG v1.0 (EOS 메인-넷 기반) 공식 오픈</p>
                <p>생태계 참여 캠페인 1차</p>
                <p className="sub-txt">
                  - 커뮤니티 지원, 개발사 지원, 언론 홍보 등
                </p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2019년 2분기</h4>
                <p>7Chain RNG v1.5 업데이트</p>
                <p className="sub-txt">- 플레이어 간 아이템 자산 거래 지원</p>
                <p>3rd 파티 게임 출시</p>
                <p>생태계 참여 캠페인 2차</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right">
                <h4>2019년 3분기</h4>
                <p>7Chain RNG v2.0 업데이트 / 생태계 강화 단계</p>
                <p className="sub-txt">- 타 블록체인 플랫폼과 연동</p>
                <p className="sub-txt">- 빅데이터 기반 시스템</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2019년 4분기</h4>
                <p>7Chain RNG v3.0 업데이트 / 생태계 안정화 단계</p>
                <p className="sub-txt">- 빅데이터 리서치 프로그램 가동</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left year">
                <h3>
                  <span>20</span>
                </h3>
              </div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image"></div>
              <div className="timeline-panel right">
                <h4>2020년 1분기</h4>
                <p>디지털 자산 스테이킹 서비스 Alliance X Ver 1.0 출시</p>
                <p className="sub-txt">- 7Chain(VII) 스테이킹 지원</p>
                <p className="sub-txt">- Alliance X 소속 코인 지원</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2020년 2분기</h4>
                <p>7Chain 2차 Community 오픈</p>
                <p>7Chain Developers 지원 프로그램 개시</p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left blank">&nbsp;</div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right">
                <h4>2020년 3분기</h4>
                <p>Alliance X Ver 2.0 업데이트</p>
                <p className="sub-txt">- EOS dApp Browser 지원</p>
                <p className="sub-txt">- Payment Gateway 시스템 구축</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>2020년 4분기</h4>
                <p>7Chain RNG 4.0 업데이트 / 생태계 성숙 단계</p>
                <p className="sub-txt">
                  - 입점 및 제휴 dApp Membership 프로그램 강화
                </p>
                <p className="sub-txt">
                  - dApp 확장에 따른 스토리지 최적화 도입
                </p>
              </div>
              <div className="timeline-image small"></div>
              <div className="timeline-panel right blank">&nbsp;</div>
            </li>
          </Timeline>
        </TimeList>
      </Container>
    </Section>
  );
};

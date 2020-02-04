import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { device, minDevice } from "../../../../device";
import { LangContext } from "../../../../Context";
import Scene from "../../ScrollMagic";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
  margin-bottom: 55px;
`;

const TimeList = styled.div`
  margin-bottom: -1.5em;
`;
const Timeline = styled.ul`
  margin-bottom: 1rem;
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
    ${minDevice.minPC768`left : 50%;`}
  }
  li {
    position: relative;
    margin-bottom: 0;
    display: flex;
    ::before {
      display: table;
      content: "";
    }
    ::after {
      clear: both;
      display: table;
      content: "";
    }
    ${device.PC767`padding : 1em 0 1em 0`}
    ${minDevice.minPC768`margin-bottom: 40px;`}
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
    ${minDevice.minPC768`float : left;`}
    &.year {
      display: none;
      ${minDevice.minPC768`display : block;`}
    }
    &.left {
      position: relative;
      float: left;
      width: 100%;
      text-align: left;
      padding-left: 55px;
      ${minDevice.minPC768` 
          float: left;
    width: 50%;
    padding-left: 0;
    display: block; 
    text-align: right;
    padding-right: 90px;`}
    }
    &.right {
      position: relative;
      float: left;
      width: 100%;
      text-align: left;
      padding-left: 55px;
      ${minDevice.minPC768` 
      width : 50%;
    display: block; 
    text-align: left;
    padding-left: 85px;`}
    }
    &.blank {
      display: none;
      ${minDevice.minPC768`display : block;`}
    }
    h4 {
      font-size: 23px;
      margin-bottom: 0;
      color: #a9dede;
      ${minDevice.minPC768`    margin-bottom: 10px; `}
      ${device.PC600`font-size : 18px;`}
    }
    p {
      font-size: 17px;
      ${device.PC1199`font-size : 15px;`}
      margin-bottom: 0;
      color: #fff;
      padding-top: 15px;
      ${device.PC600`font-size : 14px;`}
      &.sub-txt {
        font-weight: 300;
        opacity: 0.8;
        ${device.PC600`font-size : 13px;`}
      }
    }
  }
  .timeline-image {
    position: absolute;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    z-index: 100;
    background-color: #a9dede;
    margin-left: 18px;
    ${minDevice.minPC768` 
    left: 50%;
    width: 32px;
    height: 32px;
    margin-left: -16px;`};
    ::after {
      ${minDevice.minPC768` 
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      margin: -6px 0 0 -6px;
      background: #1c1c1c;
      border-radius: 50%;`};
    }
    &.small {
      width: 16px;
      height: 16px;
      margin-left: 18px;
      font-size: 80%;
      font-weight: 400;
      ${minDevice.minPC768`margin-left: -9px;`}
      ::after {
        content: none;
      }
    }
  }
`;
export default () => {
  const { lang } = useContext(LangContext);
  const roadmap = useRef(null);
  useEffect(() => {
    Scene(roadmap.current.children, 0.7, "active");
  }, []);
  return (
    <Section id="roadmap">
      <Container ref={roadmap}>
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
                <h4>{lang.roadmap01}</h4>
                <p>{lang.roadmap02}</p>
                <p>{lang.roadmap03}</p>
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
                <h4>{lang.roadmap04}</h4>
                <p>{lang.roadmap05}</p>
                <p>{lang.roadmap06}</p>
                <p>{lang.roadmap07}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>{lang.roadmap08}</h4>
                <p>{lang.roadmap09}</p>
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
                <h4>{lang.roadmap10}</h4>
                <p>{lang.roadmap11}</p>
                <p>{lang.roadmap12}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>{lang.roadmap13}</h4>
                <p>{lang.roadmap14}</p>
                <p>{lang.roadmap15}</p>
                <p>{lang.roadmap16}</p>
                <p>{lang.roadmap17}</p>
                <p className="sub-txt">{lang.roadmap18}</p>
                <p>{lang.roadmap19}</p>
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
                <h4>{lang.roadmap20}</h4>
                <p>{lang.roadmap21}</p>
                <p>{lang.roadmap22}</p>
                <p>{lang.roadmap23}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>{lang.roadmap24}</h4>
                <p>{lang.roadmap25}</p>
                <p>{lang.roadmap26}</p>
                <p>{lang.roadmap27}</p>
                <p className="sub-txt">{lang.roadmap28}</p>
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
                <h4>{lang.roadmap29}</h4>
                <p>{lang.roadmap30}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>{lang.roadmap31}</h4>
                <p>{lang.roadmap32}</p>
                <p>{lang.roadmap33}</p>
                <p>{lang.roadmap34}</p>
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
                <h4>{lang.roadmap35}</h4>
                <p>{lang.roadmap36}</p>
                <p>{lang.roadmap37}</p>
                <p>{lang.roadmap38}</p>
                <p>{lang.roadmap39}</p>
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
                <h4>{lang.roadmap40}</h4>
                <p>{lang.roadmap41}</p>
                <p>{lang.roadmap42}</p>
                <p className="sub-txt">{lang.roadmap43}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4>{lang.roadmap44}</h4>
                <p>{lang.roadmap45}</p>
                <p className="sub-txt">{lang.roadmap46}</p>
                <p>{lang.roadmap47}</p>
                <p>{lang.roadmap48}</p>
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
                <h4> {lang.roadmap49}</h4>
                <p> {lang.roadmap50}</p>
                <p className="sub-txt"> {lang.roadmap51}</p>
                <p className="sub-txt"> {lang.roadmap52}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4> {lang.roadmap53}</h4>
                <p> {lang.roadmap54}</p>
                <p className="sub-txt"> {lang.roadmap55}</p>
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
                <h4> {lang.roadmap56}</h4>
                <p> {lang.roadmap57}</p>
                <p className="sub-txt"> {lang.roadmap58}</p>
                <p className="sub-txt"> {lang.roadmap59}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4> {lang.roadmap60}</h4>
                <p> {lang.roadmap61}</p>
                <p> {lang.roadmap62}</p>
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
                <h4> {lang.roadmap63}</h4>
                <p> {lang.roadmap64}</p>
                <p className="sub-txt"> {lang.roadmap65}</p>
                <p className="sub-txt"> {lang.roadmap66}</p>
              </div>
            </li>
          </Timeline>
        </TimeList>
        <TimeList>
          <Timeline>
            <li className="year-p">
              <div className="timeline-panel left">
                <h4> {lang.roadmap67}</h4>
                <p> {lang.roadmap68}</p>
                <p className="sub-txt">{lang.roadmap69}</p>
                <p className="sub-txt">{lang.roadmap70}</p>
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

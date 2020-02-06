import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import GraphAreaOne from "./Graph/AreaOne";
import GraphAreaTwo from "./Graph/AreaTwo";
import Scene from "../../ScrollMagic";
import { device } from "../../../../device";
import { LangContext } from "../../../../Context";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.defaultColor};
  ${device.PC768`padding-bottom : 60px;`}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const GraphBox = styled.div`
  position: relative;
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
    ${device.PC768`    font-size: 24px;`}
    color: #a7dede;
    ${device.PC450`font-size: 20px;`}
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${props => props.theme.file.arr}) 50% 70% no-repeat;
    }
    span {
      display: block;
      margin-top: 8px;
      font-size: 18px;
      ${device.PC450`font-size: 14px;`}
    }
  }
  p {
    margin: 25px 0 0 0;
    color: #fff;
    font-size: 20px;
    ${device.PC768`    font-size: 17px;`}
    ${device.PC450`font-size: 14px;`}
    b {
      color: #bfaa7b;
      font-weight: bolder;
    }
  }
`;
export default () => {
  const gsap = useRef(null);
  const { lang } = useContext(LangContext);
  useEffect(() => {
    Scene(gsap.current.children, 0.7, "active");
  }, []);
  return (
    <Section id="analysis">
      <Container ref={gsap}>
        <HBox>
          <h2>{lang.analysis01}</h2>
        </HBox>
        <GraphBox>
          <div>
            <h3>
              GLOBAL GAMES MARKET (Newzoo)
              <span>
                Revenues per Segment 2016-2021 with Compound annual Growth Rates
              </span>
            </h3>
            <p>
              <span>{lang.analysis02}</span>
            </p>
            <GraphAreaOne lang={lang} />
          </div>
          <div>
            <h3>GLOBAL iGAMING MARKET GROSS WIN (H2Gaming)</h3>
            <p>{lang.analysis04}</p>
            <GraphAreaTwo lang={lang} />
          </div>
        </GraphBox>
      </Container>
    </Section>
  );
};

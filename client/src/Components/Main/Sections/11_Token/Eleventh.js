import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import { LangContext } from "../../../../Context";
import Scene from "../../ScrollMagic";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(0, 120)}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
  margin-bottom: 55px;
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
  ${device.PC500`
  width: 400px;
  height: 400px;`}
  ${device.PC420`
  width: 350px;
  height: 350px;`}
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
      ${device.PC420`
  padding-bottom: 3px;
  font-size : 16px;`}
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
  const { lang } = useContext(LangContext);
  const token = useRef(null);
  useEffect(() => {
    Scene(token.current.children, 0.7, "active");
  }, []);
  return (
    <Section id="token">
      <Container ref={token}>
        <HBox>
          <h2>{lang.token01}</h2>
        </HBox>
        <ChartBox>
          <Chart>
            <Top>
              <ImgBox>
                <img
                  src={require("../../../../assets/images/Pie_1.png")}
                  alt="pie"
                />
              </ImgBox>
              <TextBox>
                <p>{lang.token03}</p>
              </TextBox>
            </Top>
            <Bottom>
              <ul>
                <li>
                  <b>◆</b>
                  {lang.token04}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token05}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token06}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token07}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token08}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token09}
                </li>
              </ul>
            </Bottom>
          </Chart>
          <Chart>
            <Top>
              <ImgBox>
                <img
                  src={require("../../../../assets/images/Pie_2.png")}
                  alt="pie"
                />
              </ImgBox>
              <TextBox>
                <p>{lang.token11}</p>
              </TextBox>
            </Top>
            <Bottom>
              <ul>
                <li>
                  <b>◆</b>
                  {lang.token12}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token13}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token14}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token15}
                </li>
                <li>
                  <b>◆</b>
                  {lang.token16}
                </li>
              </ul>
            </Bottom>
          </Chart>
        </ChartBox>
      </Container>
    </Section>
  );
};

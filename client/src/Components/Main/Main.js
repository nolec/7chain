import React, { useEffect, useContext } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import SectionOne from "./Sections/1_Video";
import SectionTwo from "./Sections/2_OverView";
import SectionThree from "./Sections/3_Graph";
import SectionFour from "./Sections/4_Why";
import SectionFifth from "./Sections/5_Tech";
import SectionSixth from "./Sections/6_Architecture";
import SectionSeventh from "./Sections/7_Strengths";
import SectionEighth from "./Sections/8_Compare";
import SectionNinth from "./Sections/9_Economic";
import SectionTenth from "./Sections/10_Roadmap";
import SectionEleventh from "./Sections/11_Token";
import SectionTwelfth from "./Sections/12_PressMedia";
import Join from "./Sections/13_Join";
import Partner from "./Sections/14_Partner";
import { withRouter } from "react-router-dom";
import { device } from "../../device";
import { LangContext } from "../../Context";
// import ReactCssTransitionGroup from "";

const Main = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
  button,
  input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  p {
    margin-bottom: 1rem;
  }
`;
const SectionStyle = (paddingTop, paddingBottom) => css`
  padding-top: ${paddingTop}px;
  padding-bottom: ${paddingBottom}px;
  margin: auto;
  overflow: hidden;
  ${device.PC770`padding-bottom : 60px;`}
`;
const ContainerStyle = (maxWidth, width) => css`
  max-width: ${maxWidth}px;
  width: ${width}px;
  margin: auto;
  ${device.PC`width : 95%;`}
`;
const GsapStyle = () => css`
  > div {
    opacity: 0;
    transition: all 0.3s ease-out;
  }
  .active {
    opacity: 1;
    transform: translateY(0);
  }
`;
const handleWhyBox = (width, padding, left, margin, image, position) => css`
  width: ${width}px;
  padding: ${padding};
  left: -${left}px;
  margin: ${margin};
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: ${position};
  background-size: contain;
`;
const HboxStyle = (paddingTop, paddingBottom) => css`
  position: relative;
  border-bottom: 1px #282828 solid;
  padding-top: ${paddingTop}px;
  padding-bottom: ${paddingBottom}px;
  margin: auto;
  transition: all 0.1s, color 0.1s 0.1s;
  h2 {
    font-size: 40px;
    color: #fff;
    ${device.PC768`font-size: 28px;`}
  }
`;
const Hbox2Style = (paddingTop, image) => css`
  padding-top: ${paddingTop}px;
  position: relative;
  margin-bottom: 0;
  font-size: 30px;
  h3 {
    color: #a7dede;
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${image}) 50% 70% no-repeat;
    }
  }
`;
const GraphArea = () => css`
  margin-top: 45px;
  position: relative;
  h4 {
    font-size: 36px;
    ${device.PC768`font-size: 32px;`}
    color: #5fdbff;
    ${device.PC450`font-size: 26px;`}
  }
  > div {
    margin-top: 25px;
  }
  * {
    transition: 1s linear;
    transform-origin: left;
  }
  .transform {
    transform: scaleX(1);
    transform-origin: left;
    opacity: 1 !important;
  }
`;
const GraphBox = (
  background_1,
  background_2,
  background_3,
  background_4
) => css`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 20px 0;
  width: calc(100% - 314px);
  ${device.PC768`width: calc(100% - 42px);
    padding-top: 50px;`}
  > div {
    position: relative;
    font-size: 18px;
    padding: 5px 0 0 2px;
    color: #a6a6a6;
  }
  > span {
    display: block;
    height: 15px;
    background-size: 100% 100% !important;
    transform: scaleX(0);
    background-repeat: no-repeat;
    background-position: 0 0;
    &:nth-of-type(1) {
      width: 100%;
      margin-top: 0;
      ${background_1}
    }
    &:nth-of-type(2) {
      width: 76.6%;
      margin-top: 45px;
      ${background_2}
    }
    &:nth-of-type(3) {
      width: 51.7%;
      margin-top: 45px;
      ${background_3}
    }
    &:nth-of-type(4) {
      width: 39.2%;
      margin-top: 45px;
      ${background_4}
    }
  }
`;
const GraphBox2 = () => css`
  display: inline-block;
  vertical-align: top;
  width: 272px;
  ${device.PC768`    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 25px;`}
  b {
    display: block;
    font-size: 42px;
    margin-left: 20px;
    letter-spacing: -0.1em;
    color: #5fdbff;
    letter-spacing: 1px;
    font-weight: bolder;
    ${device.PC768`    
    display: inline-block;
    margin-top: 20px;
    margin-left: 0;
    font-size: 36px;`}
    ${device.PC450`font-size: 30px;`}
  }
  span {
    display: block;
    font-size: 18px;
    margin-left: 25px;
    color: #fff;
    ${device.PC768`    
    display: inline-block;
    margin-left: 6px;`}
  }
`;
//Why - Fourth
const whyBoxStyle = (bSize, color, spanSize) => css`
  position: relative;
  display: inline-block;
  p {
    padding: 0;
    line-height: 1.5;
    margin-bottom: 1rem;
    b {
      font-size: ${bSize}px;
      color: ${color};
      font-weight: normal;
    }
    span {
      display: block;
      margin-top: 0px;
      padding-left: 11px;
      font-size: ${spanSize}px;
      opacity: 0.9;
      background: url(${props => props.theme.file.arrWhy}) 0 50% no-repeat;
    }
  }
  ${color === "#a7dede"
    ? [
        device.PC990`
        p b{font-size: 15.5px;}
        p span {font-size : 14px}
      `,
        device.PC770`
        p b{font-size: 18px;}`,
        device.PC490` p b {font-size: 15px;} p span {font-size : 12.5px}`,
        device.PC380` p b {font-size: 11.5px;} p span {font-size : 11px}`
      ]
    : [
        device.PC990`
        p b{font-size: 16px;}
        p span {font-size : 14px}
        `,
        device.PC770`
        p b{font-size: 18px;}`,
        device.PC490` p b {font-size: 15px;}`
      ]}
`;
export const theme = {
  css: {
    defaultColor: "transparent",
    evenColor: "#1c1c1c",
    fontWhite: "#fff",
    whyBcolor: "#a7dede",
    whyCcolor: "#5fdafe"
  },
  style: {
    SectionStyle,
    ContainerStyle,
    HboxStyle,
    Hbox2Style,
    GsapStyle,
    handleWhyBox,
    whyBoxStyle,
    GraphArea,
    GraphBox,
    GraphBox2
  },
  file: {
    man: require("../../assets/images/man_2.png"),
    arr: require("../../assets/images/ico_arr_r.png"),
    arrWhy: require("../../assets/images/arr_r_why.png"),
    equity: require("../../assets/images/Icon_Equity.png"),
    transparency: require("../../assets/images/Icon_Transparency.png"),
    blueOcean: require("../../assets/images/Icon_BlueOcean.png"),
    legacy: require("../../assets/images/Why_legacy.png"),
    blockChain: require("../../assets/images/Why_blockchain.png"),
    chainGray: require("../../assets/images/Why_7chain_gray.png"),
    rng: require("../../assets/images/Icon_DecentralizationRNG.png"),
    dapp: require("../../assets/images/Icon_Dapp.png"),
    view: require("../../assets/images/Icon_View.png"),
    architecture: require("../../assets/images/bg_7ChainArchitecture_h.png"),
    architecture_v: require("../../assets/images/bg_7ChainArchitecture_v.png"),
    b2b: require("../../assets/images/Icon_B2B.png"),
    collabo: require("../../assets/images/Icon_Collabo.png"),
    expansion: require("../../assets/images/Icon_Expansion.png"),
    graph_1_1: require("../../assets/images/graph/graph_1_1.jpg"),
    graph_1_2: require("../../assets/images/graph/graph_1_2.jpg"),
    graph_1_3: require("../../assets/images/graph/graph_1_3.jpg"),
    graph_1_4: require("../../assets/images/graph/graph_1_4.jpg"),
    graph_2_1: require("../../assets/images/graph/graph_2_1.jpg"),
    graph_3_1: require("../../assets/images/graph/graph_3_1.jpg"),
    graph_2_2: require("../../assets/images/graph/graph_2_2.jpg"),
    graph_2_4: require("../../assets/images/graph/graph_2_4.jpg"),
    graph_2_3: require("../../assets/images/graph/graph_2_3.jpg"),
    graph_3_3: require("../../assets/images/graph/graph_3_3.jpg"),
    graph_3_4: require("../../assets/images/graph/graph_3_4.jpg"),
    contact: require("../../assets/images/Icon_Contact.png")
  }
};

export default withRouter(({ location: { pathname } }) => {
  // const childRef = useRef(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     Scene(childRef.current.children, 0.7, "active");
  //   }, 500);
  //   console.log(childRef.current, "Parent Component");
  // }, [Scene]);
  // console.log(device.pc);
  const { languageSetting, korean } = useContext(LangContext);
  useEffect(() => {
    languageSetting();
  }, [korean, languageSetting]);
  return (
    <Main id="home">
      <ThemeProvider theme={theme}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFifth />
        <SectionSixth />
        <SectionSeventh />
        <SectionEighth />
        <SectionNinth />
        <SectionTenth />
        <SectionEleventh />
        <SectionTwelfth />
        <Join />
        <Partner />
      </ThemeProvider>
    </Main>
  );
});

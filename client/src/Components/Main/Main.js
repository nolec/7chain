import React, { useEffect, useRef } from "react";
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
import Scene from "./ScrollMagic";
import device from "../../device";

const Main = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    line-height: 1.2;
  }
  button,
  input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;
const SectionStyle = (paddingTop, paddingBottom) => css`
  padding-top: ${paddingTop}px;
  padding-bottom: ${paddingBottom}px;
  margin: auto;
  overflow: hidden;
`;
const ContainerStyle = (maxWidth, width) => css`
  max-width: ${maxWidth}px;
  width: ${width}px;
  margin: auto;
  @media ${device.pc} {
    width: 95%;
  }
`;
const GsapStyle = () => css`
  > div {
    opacity: 0;
    position: relative;
    top: -100px;
    transition: 0.3s linear;
  }
  .active {
    position: relative;
    opacity: 1;
    top: 0;
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
    ? device.PC990`
        p b{font-size: 15.5px;}
        p span {font-size : 14px}
      `
    : device.PC990`
        p b{font-size: 16px;}
        p span {font-size : 14px}
      `}
`;
const theme = {
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
    whyBoxStyle
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
    b2b: require("../../assets/images/Icon_B2B.png"),
    collabo: require("../../assets/images/Icon_Collabo.png"),
    expansion: require("../../assets/images/Icon_Expansion.png")
  }
};

export default withRouter(({ location: { pathname } }) => {
  const childRef = useRef(null);
  useEffect(() => {
    Scene(childRef.current.children, 0.7, "active");
    console.log(childRef.current, "Parent Component");
    return () => Scene(childRef.current.children);
  });
  console.log(device.pc);
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <SectionOne />
        <SectionTwo forwardedRef={childRef} />
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

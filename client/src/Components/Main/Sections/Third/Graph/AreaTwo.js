import React from "react";
import styled from "styled-components";

const GraphArea = styled.div`
  margin-top: 45px;
  h4 {
    font-size: 36px;
    color: #5fdbff;
  }
  > div {
    margin-top: 25px;
  }
`;
const BoxOne = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 20px 0;
  width: calc(100% - 314px);
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

    &:nth-of-type(1) {
      width: 100%;
      margin-top: 0;
      ${props =>
        props.count === "one"
          ? {
              background: `url(${require("../../../../../assets/images/graph/graph_2_1.jpg")})
        0 0 no-repeat`
            }
          : {
              background: `url(${require("../../../../../assets/images/graph/graph_3_1.jpg")})
        0 0 no-repeat`
            }}
    }
    &:nth-of-type(2) {
      width: 76.6%;
      margin-top: 45px;
      ${props =>
        props.count === "one"
          ? {
              background: `url(${require("../../../../../assets/images/graph/graph_2_2.jpg")})
        0 0 no-repeat`
            }
          : {
              background: `url(${require("../../../../../assets/images/graph/graph_2_4.jpg")})
        0 0 no-repeat`
            }}
      transition: width 1.5s;
      transition-delay: 0.5s;
    }
    &:nth-of-type(3) {
      width: 51.7%;
      margin-top: 45px;
      ${props =>
        props.count === "one"
          ? {
              background: `url(${require("../../../../../assets/images/graph/graph_2_3.jpg")})
        0 0 no-repeat`
            }
          : {
              background: `url(${require("../../../../../assets/images/graph/graph_3_3.jpg")})
        0 0 no-repeat`
            }}
      transition: width 1.5s;
      transition-delay: 1s;
    }
    &:nth-of-type(4) {
      width: 39.2%;
      margin-top: 45px;
      ${props =>
        props.count === "one"
          ? {
              background: `url(${require("../../../../../assets/images/graph/graph_2_4.jpg")})
        0 0 no-repeat`
            }
          : {
              background: `url(${require("../../../../../assets/images/graph/graph_3_4.jpg")})
        0 0 no-repeat`
            }}
      transition: width 1.5s;
      transition-delay: 1.5s;
    }
  }
`;
const BoxTwo = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 272px;
  b {
    display: block;
    font-size: 42px;
    margin-left: 20px;
    letter-spacing: -0.1em;
    color: #5fdbff;
    letter-spacing: 1px;
    font-weight: bolder;
  }
  span {
    display: block;
    font-size: 18px;
    margin-left: 25px;
    color: #fff;
  }
`;
export default () => {
  return (
    <>
      <GraphArea>
        <h4>Interactive (excl. Mobile)</h4>
        <div>
          <BoxOne count="one">
            <span></span>
            <div>2022</div>
            <span></span>
            <div>2019</div>
            <span></span>
            <div>2016</div>
            <span></span>
            <div>2013</div>
          </BoxOne>
          <BoxTwo>
            <b>$36.9BN</b>
            <span>2013년 대비 1.4배 성장</span>
          </BoxTwo>
        </div>
      </GraphArea>
      <GraphArea>
        <h4>Mobile</h4>
        <div>
          <BoxOne count="two">
            <span></span>
            <div>2022</div>
            <span></span>
            <div>2019</div>
            <span></span>
            <div>2016</div>
            <span></span>
            <div>2013</div>
          </BoxOne>
          <BoxTwo>
            <b>$34.5BN</b>
            <span>2013년 대비 4.6배 성장</span>
          </BoxTwo>
        </div>
      </GraphArea>
    </>
  );
};

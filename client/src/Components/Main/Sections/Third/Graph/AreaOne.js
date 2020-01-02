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
const FootNote = styled.div`
  position: absolute;
  right: 0;
  bottom: -15px;
  font-size: 0;
  margin-bottom: 15px;
  span {
    display: inline-block;
    margin-left: 20px;
    font-size: 18px;
    color: #a4a4a4;
    &::before {
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      margin-right: 7px;
    }
    &:nth-child(1)::before {
      background: #5fdbff;
    }
    &:nth-child(2)::before {
      background: #6695ff;
    }
    &:nth-child(3)::before {
      background: #b675ff;
    }
  }
`;
const BoxOne = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 20px 0;
  width: calc(100% - 314px);
  > div:not(:footnote) {
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
      background: url(${require("../../../../../assets/images/graph/graph_1_1.jpg")})
        0 0 no-repeat;
    }
    &:nth-of-type(2) {
      width: 76.6%;
      margin-top: 45px;
      background: url(${require("../../../../../assets/images/graph/graph_1_2.jpg")})
        0 0 no-repeat;
      transition: width 1.5s;
      transition-delay: 0.5s;
    }
    &:nth-of-type(3) {
      width: 51.7%;
      margin-top: 45px;
      background: url(${require("../../../../../assets/images/graph/graph_1_3.jpg")})
        0 0 no-repeat;
      transition: width 1.5s;
      transition-delay: 1s;
    }
    &:nth-of-type(4) {
      width: 39.2%;
      margin-top: 45px;
      background: url(${require("../../../../../assets/images/graph/graph_1_4.jpg")})
        0 0 no-repeat;
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
    <GraphArea>
      <h4>Mobile</h4>
      <div>
        <BoxOne>
          <span></span>
          <div>2021</div>
          <span></span>
          <div>2018</div>
          <span></span>
          <div>2015</div>
          <span></span>
          <div>2012</div>
          <FootNote>
            <span>Console</span>
            <span>PC</span>
            <span>Mobile</span>
          </FootNote>
        </BoxOne>
        <BoxTwo>
          <b>$180.1BN</b>
          <span>2012년 대비 2.6배 성장</span>
        </BoxTwo>
      </div>
    </GraphArea>
  );
};

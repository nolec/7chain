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
  span {
    display: block;
    height: 15px;
    width: 100%;
    transition: width 1.5s;
    transition-delay: 0s;
    background-size: 100% 100%;
  }
  span:nth-child(1) {
    margin-top: 0;
    background: url(${require("../../../../assets/images/graph/graph_1_1.jpg")})
      0 0 no-repeat;
  }
  span:nth-of-type(2) {
    width: 76.6%;
    margin-top: 45px;
    background: url(${require("../../../../assets/images/graph/graph_1_2.jpg")})
      0 0 no-repeat;
    background-size: 100% 100%;
    transition: width 1.5s;
    transition-delay: 0.5s;
  }
  span:nth-of-type(3) {
    width: 51.7%;
    margin-top: 45px;
    background: url(${require("../../../../assets/images/graph/graph_1_3.jpg")})
      0 0 no-repeat;
    background-size: 100% 100%;
    transition: width 1.5s;
    transition-delay: 1s;
  }
  span:nth-of-type(4) {
    width: 39.2%;
    margin-top: 45px;
    background: url(${require("../../../../assets/images/graph/graph_1_4.jpg")})
      0 0 no-repeat;
    background-size: 100% 100%;
    transition: width 1.5s;
    transition-delay: 1.5s;
  }
`;
const BoxTwo = styled.div``;
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
        </BoxOne>
        <BoxTwo></BoxTwo>
      </div>
    </GraphArea>
  );
};

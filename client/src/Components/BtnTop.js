import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Btn = styled.div`
  position: fixed;
  z-index: 100;
  right: 30px;
  bottom: 30px;
`;
const Blink = styled(Link)`
  display: block;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-position: center 18px;
  background-color: #a6a6a6;
  background-image: url(${props => props.back});
  background-repeat: no-repeat;
`;

export default () => {
  return (
    <Btn>
      <Blink
        to="/"
        back={require("../assets/images/bullet-arrow-top.png")}
      ></Blink>
    </Btn>
  );
};

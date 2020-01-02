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
  const handleClick = () => {
    const { top } = document.querySelector("body").getBoundingClientRect();

    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <Btn>
      <Blink
        onClick={handleClick}
        to="/"
        back={require("../assets/images/bullet-arrow-top.png")}
      ></Blink>
    </Btn>
  );
};

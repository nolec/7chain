import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";

const Btn = styled.div`
  position: fixed;
  z-index: 100;
  right: 30px;
  bottom: 30px;
`;
const Blink = styled.a`
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
  const handleClick = e => {
    console.log(e.target);
    const body = document.querySelector("body");
    TweenMax.to(window, 1, { scrollTo: body.offsetTop });
  };
  return (
    <Btn>
      <Blink
        onClick={handleClick}
        href="#window"
        back={require("../assets/images/bullet-arrow-top.png")}
      ></Blink>
    </Btn>
  );
};

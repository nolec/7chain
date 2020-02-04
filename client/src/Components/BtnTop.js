import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
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

export default withRouter(({ location }) => {
  const handleClick = e => {
    const body = document.querySelector("body");
    TweenMax.to(window, 1, { scrollTo: body.offsetTop });
  };
  useEffect(() => {
    setTimeout(() => {
      if (location.pathname !== "/") {
        const body = document.querySelector("body");
        TweenMax.to(window, 1, { scrollTo: body.offsetTop });
      }
    }, 1000);
  }, [location.pathname]);
  return (
    <Btn>
      <Blink
        onClick={handleClick}
        href="#window"
        back={require("../assets/images/bullet-arrow-top.png")}
      ></Blink>
    </Btn>
  );
});

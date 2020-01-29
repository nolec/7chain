import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBox from "./TopBox";
import BottomBox from "./BottomBox";
import { withRouter } from "react-router-dom";
import { TweenMax } from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;
const TopContainer = styled.div`
  display: flex;
  background-color: #202020;
  position: fixed;
  width: 100%;
`;
const BottomContainer = styled.div`
  background: rgba(5, 5, 5, 0.8);
  display: flex;
  position: fixed;
  width: 100%;
  top: 39px;
  z-index: -1;
  ${props =>
    props.border ? "border : none" : "border-bottom: 1px solid #282828;"}
`;

export default withRouter(({ history, location }) => {
  const plugins = [ScrollToPlugin];

  const [active, setActive] = useState(false);

  const handleGo = e => {
    const id = e.currentTarget.hash;
    setActive(false);

    e.preventDefault();
    console.log(e.currentTarget, id, "Go", location.pathname);
    if (location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        TweenMax.to(window, 1, { scrollTo: { y: id, offsetY: 70 } });
      }, 750);
    } else {
      TweenMax.to(window, 1, { scrollTo: { y: id, offsetY: 70 } });
    }
  };
  const handleClick = e => {
    const body = document.querySelector("body");
    console.log(e.target.hash);
    TweenMax.to(body, 1, { scrollTo: body.offsetTop });
  };
  //-----------------------------------------------------
  const handleToggle = () => {
    if (active) {
      console.log(active, "close");
      close();
    } else {
      console.log(active, "open");
      open();
    }
  };
  const open = () => {
    setActive(true);
  };
  const close = () => {
    setActive(false);
  };
  const [border, setBorder] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBorder(false);
      } else {
        setBorder(true);
      }
    });
  }, []);
  return (
    <Header>
      <TopContainer>
        <TopBox
          handleClick={handleClick}
          handleGo={handleGo}
          history={history}
          location={location}
          handleToggle={handleToggle}
          active={active}
        />
      </TopContainer>
      {(location && location.pathname === "/admin/press") ||
      location.pathname === "/admin/media" ? (
        "null"
      ) : (
        <BottomContainer border={border}>
          <BottomBox border={border} handleGo={handleGo} />
        </BottomContainer>
      )}
    </Header>
  );
});

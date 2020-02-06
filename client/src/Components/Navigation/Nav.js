import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBox from "./TopBox";
import BottomBox from "./BottomBox";
import { withRouter } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";
import ModalPage from "./Modal";

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

const plugins = [ScrollToPlugin];
export default withRouter(({ history, location, toggle, handleClose }) => {
  const [active, setActive] = useState(false);

  const handleGo = e => {
    const id = e.currentTarget.hash;
    e.preventDefault();
    if (location.pathname !== "/") {
      const time = () =>
        setTimeout(() => {
          history.push("/");
          TweenMax.to(window, 0.5, {
            scrollTo: { y: id, offsetY: 70 },
            ease: Power3.easeOut
          });
        }, 750);
      time();
    } else {
      TweenMax.to(window, 0.5, {
        scrollTo: { y: id, offsetY: 70 },
        ease: Power3.easeOut
      });
    }
    setActive(false);
  };
  const handleClick = e => {
    const body = document.querySelector("body");
    TweenMax.to(body, 1, { scrollTo: body.offsetTop });
  };
  //-----------------------------------------------------
  const handleToggle = () => {
    if (active) {
      close();
    } else {
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

  const scrollHandler = () => {
    if (window.scrollY > 0) {
      setBorder(false);
    } else {
      setBorder(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <Header>
        <TopContainer>
          <TopBox
            handleClick={handleClick}
            handleGo={handleGo}
            history={history}
            location={location}
            handleToggle={handleToggle}
            active={active}
            close={close}
          />
        </TopContainer>
        {(location && location.pathname === "/admin/press") ||
        location.pathname === "/admin/media" ? (
          "null"
        ) : (
          <BottomContainer border={border}>
            <BottomBox
              border={border}
              handleGo={handleGo}
              handleClose={handleClose}
              toggle={toggle}
            />
          </BottomContainer>
        )}
      </Header>
      <ModalPage />
    </>
  );
});

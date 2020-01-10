import React from "react";
import styled from "styled-components";
import TopBox from "./TopBox";
import BottomBox from "./BottomBox";
import { withRouter } from "react-router-dom";
import { TweenMax } from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";

const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`;
const TopContainer = styled.div`
  display: flex;
  background-color: #202020;
`;
const BottomContainer = styled.div`
  background: rgba(5, 5, 5, 0.8);
  display: flex;
`;

export default withRouter(({ history, location }) => {
  const handleGo = e => {
    const id = e.currentTarget.hash;
    e.preventDefault();
    TweenMax.to(window, 1, { scrollTo: { y: id, offsetY: 70 } });
  };
  const handleClick = e => {
    console.log(e.target);
    const body = document.querySelector("body");
    TweenMax.to(window, 1, { scrollTo: body.offsetTop });
  };
  return (
    <Header>
      <TopContainer>
        <TopBox
          handleClick={handleClick}
          handleGo={handleGo}
          history={history}
          location={location}
        />
      </TopContainer>
      {(location && location.pathname === "/admin/press") ||
      location.pathname === "/admin/media" ? (
        "null"
      ) : (
        <BottomContainer>
          <BottomBox handleGo={handleGo} />
        </BottomContainer>
      )}
    </Header>
  );
});

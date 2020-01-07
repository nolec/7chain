import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { TweenMax } from "gsap";
import ScrollToPlugin from "gsap/umd/ScrollToPlugin";

const TopBox = styled.div`
  max-width: 1162px;
  width: 100%;
  padding: 0px 5px 0;
  margin: auto;
  > div {
    display: flex;
  }
`;
const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  padding: 0;
  margin-left: 0;
  img {
    height: 32px;
  }
`;
const NavBar = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Ul = styled.ul`
  padding: 0;
  border: 0;
  margin: 0 20px 0 auto;
  background-color: transparent;
  display: flex;
`;
const Li = styled.li``;
const Alink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  padding: 0.6em 1.4em;
`;
const Util = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 0;
`;
const UtilBox = styled(Link)`
  font-size: 16px;
  color: #fff;
  i,
  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
export default ({ history, location }) => {
  const ul = useRef(null);
  const handleGo = e => {
    const id = e.currentTarget.hash;
    e.preventDefault();
    TweenMax.to(window, 1, { scrollTo: { y: id, offsetY: 70 } });
  };
  return (
    <TopBox>
      <div>
        <LogoBox to="/">
          <img
            src={require("../../assets/images/logo/7chain-logo-white.svg")}
            alt="logo"
          />
        </LogoBox>
        {(location && location.pathname === "/admin/press") ||
        location.pathname === "/admin/media" ? (
          <NavBar>
            <Ul>
              <Li>
                <Alink to="/admin/press">Press</Alink>
              </Li>
              <Li>
                <Alink to="/admin/media">Media</Alink>
              </Li>
            </Ul>
          </NavBar>
        ) : (
          <>
            <NavBar>
              <Ul ref={ul}>
                <Li>
                  <Alink onClick={handleGo} to="#overview">
                    <span>overview</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink to="#">
                    <span>Roadmap</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink to="#">
                    <span>Token Distribution</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink to="#">
                    <span>Press</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink to="#">
                    <span>Media</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink to="#">
                    <span>Contact</span>
                  </Alink>
                </Li>
              </Ul>
            </NavBar>
            <Util>
              <UtilBox to="/">
                <i className="flag-icon flag-icon-kr"></i>
                <span>Korean</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </UtilBox>
            </Util>
          </>
        )}
      </div>
    </TopBox>
  );
};

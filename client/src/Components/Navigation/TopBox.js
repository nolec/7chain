import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { device, minDevice } from "../../device";

const TopBox = styled.div`
  max-width: 1162px;
  width: 100%;
  margin: auto;
  padding: 0px 5px 0;
  > div {
    /* ${device.PC992`padding : 5px 5px;`} */
    ${minDevice.minPC992`    position: relative;
    display: flex;
    justify-content: space-between;`}
  }
`;
const LogoBox = styled(Link)`
  padding: 5px 0 0 0;
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  margin-left: 0;
  img {
    height: 32px;
  }
`;
const NavBar = styled.div`
  display: flex;
  flex-grow: 1;
  ${device.PC992`display : none`}
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
  padding: 0.6em 1em;
`;
const LanguageBox = styled.div`
  transition: 0.3s linear;
  :hover {
    opacity: 1;
    visibility: visible;
  }
  opacity: 0;
  visibility: hidden;
  max-height: 125px;
  width: 120px;
  position: absolute;
  top: 40px;
  right: 0px;
  background: #1c1c1c;
  border: 1px solid #a6a6a6;
  padding: 5px 5px 5px 5px !important;
  color: #000;
  z-index: 102;
  ul {
    padding: 0;
    right: 60px;
    li {
      padding: 2px;
      i {
        line-height: 0.9em;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
`;
const Util = styled.div`
  display: flex;
  align-items: center;
  ${device.PC992`  position: absolute; display : block`}
  right: 55px;
  top: 10px;
  padding: 0;
`;
const UtilBox = styled(Link)`
  font-size: 16px;
  color: #fff;
  i,
  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
  :hover + ${LanguageBox} {
    opacity: 1;
    visibility: visible;
  }
`;

const Language = styled(Link)`
  font-size: 16px !important;
  word-break: normal;
  color: #fff;
  opacity: 0.9;
  padding: 8px 0;
`;
const ToggleBox = styled.button`
  ${device.PC992`  position: absolute; display : block`}
  display : none;
  right: 0;
  top: 0;
  font-weight: 300;
  font-size: 32px;
  background-color: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.25rem 0.75rem;
  cursor: pointer;
`;
const Collapse = styled.div`
  /* display: none; */
  z-index: 100;
  /* margin-top: 13px; */
  transition: 0.4s linear;
  a {
    padding: 0.6em 1em;
    border-bottom: 1px solid #393939;
    font-size: 16px;
    :hover {
      background: #393939;
    }
  }
`;
const SubUl = styled.ul`
  background-color: transparent;
  border-top: 1px solid #e0e0e0;
  padding: 2px 0;
`;
export default ({ handleToggle, active, location, handleGo }) => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current !== null) {
  //     console.log(ref.current);
  //   }
  //   console.log(ref.current);
  // }, []);
  return (
    <>
      <TopBox>
        <div>
          <LogoBox onClick={handleGo} to="#home">
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
                <Ul>
                  <Li>
                    <Alink onClick={handleGo} to="#overview">
                      <span>Overview</span>
                    </Alink>
                  </Li>
                  <Li>
                    <Alink onClick={handleGo} to="#roadmap">
                      <span>Roadmap</span>
                    </Alink>
                  </Li>
                  <Li>
                    <Alink onClick={handleGo} to="#token">
                      <span>Token Distribution</span>
                    </Alink>
                  </Li>
                  <Li>
                    <Alink onClick={handleGo} to="#press">
                      <span>Press</span>
                    </Alink>
                  </Li>
                  <Li>
                    <Alink onClick={handleGo} to="#media">
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
                <LanguageBox>
                  <ul>
                    <li>
                      <Language to="/">
                        <i className="flag-icon flag-icon-kr"></i>
                        <span>Korean</span>
                      </Language>
                    </li>
                    <li>
                      <Language to="/eng">
                        <i className="flag-icon flag-icon-us"></i>
                        <span>English</span>
                      </Language>
                    </li>
                  </ul>
                </LanguageBox>
              </Util>
            </>
          )}
          <ToggleBox onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleBox>
          {active ? (
            <Collapse>
              <SubUl>
                <Li>
                  <Alink onClick={handleGo} to="#overview">
                    <span>Overview</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink onClick={handleGo} to="#roadmap">
                    <span>Roadmap</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink onClick={handleGo} to="#token">
                    <span>Token Distribution</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink onClick={handleGo} to="#press">
                    <span>Press</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink onClick={handleGo} to="#media">
                    <span>Media</span>
                  </Alink>
                </Li>
                <Li>
                  <Alink to="#">
                    <span>Contact</span>
                  </Alink>
                </Li>
              </SubUl>
            </Collapse>
          ) : null}
        </div>
      </TopBox>
    </>
  );
};

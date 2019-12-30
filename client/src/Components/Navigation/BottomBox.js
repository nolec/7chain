import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomBox = styled.div`
  max-width: 1162px;
  width: 100%;
  margin: auto;
  padding: 10px 5px 10px;
  border-bottom: 1px solid #282828;
  > div {
    display: flex;
  }
`;
const FontLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    vertical-align: middle;
    border-style: none;
    width: 70px;
  }
`;
const NavBar = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row-reverse;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  top: 5px;
  position: relative;
  font-size: 16px;
  padding-right: 28px;
  :last-child {
    padding-right: 0;
    position: relative;
    a {
      color: #fff;
      background: #3b9fe2;
      padding: 0px 7px 0px;
      border-radius: 5px;
      opacity: 1;
    }
  }
`;
const Alink = styled(Link)`
  color: #fff;
  opacity: 0.8;
`;
export default () => {
  return (
    <BottomBox>
      <div>
        <FontLogo>
          <img
            src={require("../../assets/images/logo/7chain-logofont-white.svg")}
          />
        </FontLogo>
        <NavBar>
          <Ul>
            <Li>
              <Alink to="#">
                <span>Roger Caillois</span>
              </Alink>
            </Li>
            <Li>
              <Alink to="#">
                <span>Global Gaming Market Analysis</span>
              </Alink>
            </Li>
            <Li>
              <Alink to="#">
                <span>Why 7Chain?</span>
              </Alink>
            </Li>
            <Li>
              <Alink to="#">
                <span>7Chain's Economics</span>
              </Alink>
            </Li>
            <Li>
              <Alink to="#">
                <span>White Paper</span>
              </Alink>
            </Li>
          </Ul>
        </NavBar>
      </div>
    </BottomBox>
  );
};

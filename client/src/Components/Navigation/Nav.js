import React from "react";
import styled from "styled-components";
import TopBox from "./TopBox";
import BottomBox from "./BottomBox";
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

export default () => {
  return (
    <Header>
      <TopContainer>
        <TopBox />
      </TopContainer>
      <BottomContainer>
        <BottomBox />
      </BottomContainer>
    </Header>
  );
};

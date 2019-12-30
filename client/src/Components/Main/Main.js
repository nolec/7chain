import React from "react";
import styled from "styled-components";
import SectionOne from "./Sections/first";
import SectionTwo from "./Sections/second";

const Main = styled.main``;

export default () => {
  return (
    <Main>
      <SectionOne />
      <SectionTwo />
    </Main>
  );
};

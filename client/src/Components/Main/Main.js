import React from "react";
import styled from "styled-components";
import SectionOne from "./Sections/first";
import SectionTwo from "./Sections/second";
import SectionThree from "./Sections/third";

const Main = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-family: inherit;
    line-height: 1.2;
  }
`;

export default () => {
  return (
    <Main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Main>
  );
};

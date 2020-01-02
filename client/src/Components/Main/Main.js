import React from "react";
import styled from "styled-components";
import SectionOne from "./Sections/First";
import SectionTwo from "./Sections/Second";
import SectionThree from "./Sections/Third";
import SectionFour from "./Sections/Fourth";
import SectionFifth from "./Sections/Fifth";
import SectionSixth from "./Sections/Sixth";
import SectionSeventh from "./Sections/Seventh";
import SectionEighth from "./Sections/Eighth";
import SectionNinth from "./Sections/Ninth";
import SectionTenth from "./Sections/Tenth";

const Main = styled.main`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
      <SectionFour />
      <SectionFifth />
      <SectionSixth />
      <SectionSeventh />
      <SectionEighth />
      <SectionNinth />
      <SectionTenth />
    </Main>
  );
};

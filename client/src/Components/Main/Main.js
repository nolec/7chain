import React, { useEffect, useRef } from "react";
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
import SectionEleventh from "./Sections/Eleventh";
import SectionTwelfth from "./Sections/Twelfth";
import Join from "./Sections/Join";
import Partner from "./Sections/Partner";
import { withRouter } from "react-router-dom";
import Scene from "./ScrollMagic";

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
  button,
  input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;

export default withRouter(({ location: { pathname } }) => {
  const childRef = useRef(null);
  useEffect(() => {
    Scene(childRef.current.children, 0.7, "active");
    console.log(childRef.current, "Parent Component");
    return () => Scene(childRef.current.children);
  });
  return (
    <Main>
      <SectionOne />
      <SectionTwo forwardedRef={childRef} />
      <SectionThree />
      <SectionFour />
      <SectionFifth />
      <SectionSixth />
      <SectionSeventh />
      <SectionEighth />
      <SectionNinth />
      <SectionTenth />
      <SectionEleventh />
      <SectionTwelfth />
      <Join />
      <Partner />
    </Main>
  );
});

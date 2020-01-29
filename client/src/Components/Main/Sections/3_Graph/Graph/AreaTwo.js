import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Scene from "../../../ScrollMagic";

const GraphArea = styled.div`
  ${props => props.theme.style.GraphArea()};
`;
const BoxOne = styled.div`
  ${props =>
    props.theme.style.GraphBox(
      `${
        props.count === "one"
          ? `background-image : url(${props.theme.file.graph_2_1})`
          : `background-image : url(${props.theme.file.graph_3_1})`
      }`,
      `${
        props.count === "one"
          ? `background-image : url(${props.theme.file.graph_2_2})`
          : `background-image : url(${props.theme.file.graph_2_4})`
      }`,
      `${
        props.count === "one"
          ? `background-image : url(${props.theme.file.graph_2_3})`
          : `background-image : url(${props.theme.file.graph_3_3})`
      }`,
      `${
        props.count === "one"
          ? `background-image : url(${props.theme.file.graph_2_4})`
          : `background-image : url(${props.theme.file.graph_3_4})`
      }`
    )};
`;
const BoxTwo = styled.div`
  ${props => props.theme.style.GraphBox2()}
`;
export default ({ lang }) => {
  const gsap = useRef(null);
  const gsap2 = useRef(null);

  useEffect(() => {
    Scene(gsap.current.children[0].children, 1, "transform");
    Scene(gsap2.current.children[0].children, 1, "transform");
  }, []);
  return (
    <>
      <GraphArea>
        <h4>Interactive (excl. Mobile)</h4>
        <div ref={gsap}>
          <BoxOne count="one">
            <span></span>
            <div>2022</div>
            <span></span>
            <div>2019</div>
            <span></span>
            <div>2016</div>
            <span></span>
            <div>2013</div>
          </BoxOne>
          <BoxTwo>
            <b>$36.9BN</b>
            <span>{lang.analysis05}</span>
          </BoxTwo>
        </div>
      </GraphArea>
      <GraphArea>
        <h4>Mobile</h4>
        <div ref={gsap2}>
          <BoxOne count="two">
            <span></span>
            <div>2022</div>
            <span></span>
            <div>2019</div>
            <span></span>
            <div>2016</div>
            <span></span>
            <div>2013</div>
          </BoxOne>
          <BoxTwo>
            <b>$34.5BN</b>
            <span>{lang.analysis06}</span>
          </BoxTwo>
        </div>
      </GraphArea>
    </>
  );
};

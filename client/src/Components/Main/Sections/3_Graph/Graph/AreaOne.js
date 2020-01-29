import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Scene from "../../../ScrollMagic";
import { device } from "../../../../../device";
const transform = keyframes`

`;
const GraphArea = styled.div`
  ${props => props.theme.style.GraphArea()};
`;
const FootNote = styled.div`
  position: absolute !important;
  right: 0;
  bottom: -15px;
  font-size: 0;
  margin-bottom: 15px;
  opacity: 0;
  span {
    display: inline-block;
    margin-left: 20px;
    font-size: 18px;
    color: #a4a4a4;
    &::before {
      display: inline-block;
      content: "";
      width: 10px;
      height: 10px;
      margin-right: 7px;
    }
    &:nth-child(1)::before {
      background: #5fdbff;
    }
    &:nth-child(2)::before {
      background: #6695ff;
    }
    &:nth-child(3)::before {
      background: #b675ff;
    }
  }
`;
const BoxOne = styled.div`
  ${props =>
    props.theme.style.GraphBox(
      `background-image : url(${props.theme.file.graph_1_1})`,
      `background-image : url(${props.theme.file.graph_1_2})`,
      `background-image : url(${props.theme.file.graph_1_3})`,
      `background-image : url(${props.theme.file.graph_1_4})`
    )};
`;

const BoxTwo = styled.div`
  ${props => props.theme.style.GraphBox2()}
`;
export default ({ lang }) => {
  const gsap = useRef(null);

  useEffect(() => {
    Scene(gsap.current.children[0].children, 1, "transform");
  }, []);
  return (
    <GraphArea>
      <h4>Mobile</h4>
      <div ref={gsap}>
        <BoxOne>
          <span></span>
          <div>2021</div>
          <span></span>
          <div>2018</div>
          <span></span>
          <div>2015</div>
          <span></span>
          <div>2012</div>
          <FootNote>
            <span>Console</span>
            <span>PC</span>
            <span>Mobile</span>
          </FootNote>
        </BoxOne>
        <BoxTwo>
          <b>$180.1BN</b>
          <span>{lang.analysis03}</span>
        </BoxTwo>
      </div>
    </GraphArea>
  );
};

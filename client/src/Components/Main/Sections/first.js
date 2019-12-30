import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  width: 100%;
  color: white;
  padding-top: 90px;
  padding: 0;
  background-color: #000;
`;
const Slider = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 52.1%;
  margin-top: 90px;
`;
const Item = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  video {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default () => {
  return (
    <Section>
      <Slider>
        <Item>
          <video autoPlay="autoplay" preload="auto" muted="muted" playsInline>
            <source
              src={require("../../../assets/videos/7ChainIntroMovie_Korean.mp4")}
              type="video/mp4"
            />
          </video>
        </Item>
      </Slider>
    </Section>
  );
};

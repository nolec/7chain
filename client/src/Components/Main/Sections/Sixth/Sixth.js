import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-bottom: 120px;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 1162px;
  font-size: 0;
  border-top: 1px dotted #a59f91;
  margin: auto;
`;
const Hbox = styled.div`
  padding-top: 40px;
  position: relative;
  margin-bottom: 0;
  font-size: 30px;
  h3 {
    color: #a7dede;
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${require("../../../../assets/images/ico_arr_r.png")}) 50%
        70% no-repeat;
    }
  }
`;
const ImgBox = styled.div`
  position: relative;
  margin-top: 40px;
  text-align: center;
  width: 100%;
  img {
    position: relative;
    width: 95%;
    display: inline;
  }
`;
export default () => {
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>7Chain 아키텍처</h3>
        </Hbox>
        <ImgBox>
          <img
            src={require("../../../../assets/images/bg_7ChainArchitecture_h.png")}
          />
        </ImgBox>
      </Container>
    </Section>
  );
};

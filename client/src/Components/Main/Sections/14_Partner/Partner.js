import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../device";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
  * {
    z-index: 2;
  }
  ${device.PC1000`padding : 0 0 30px`}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const Partners = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 0;
  text-align: center;
`;
const Item = styled.div`
  padding: 15px 0px;
  flex: 0 0 20%;
  max-width: 20%;
  ${device.PC767`flex : 0 0 50%; max-width : 50%;`}
  img {
    max-width: 100%;
  }
`;
export default () => {
  return (
    <Section>
      <Container>
        <HBox>
          <h2>Partners</h2>
        </HBox>
        <Partners>
          <Item>
            <a href="https://eosys.io/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Eosys.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="http://koreos.io/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Koreos.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="https://www.stealien.com/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Stealien.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="https://japanonlinegame.org/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Joga.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="http://h2interactive.co.jp/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_H2.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="https://www.nodebrick.com/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Nodebrick.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="http://www.ziopops.com/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Ziopops.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="https://www.subete-games.com/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Subete.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a href="http://www.fzhmsy.com.cn/" target="_blank">
              <img
                src={require("../../../../assets/images/partner/Logo_Fzhmsy.png")}
                alt="partner"
              />
            </a>
          </Item>
          <Item>
            <a>
              <img
                src={require("../../../../assets/images/partner/Logo_Devpot.png")}
                alt="partner"
              />
            </a>
          </Item>
        </Partners>
      </Container>
    </Section>
  );
};

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 0 0 60px;
  overflow: hidden;
  background: #1c1c1c;
  * {
    z-index: 2;
  }
`;
const Container = styled.div`
  max-width: 1162px;
  width: 1162px;
  margin: auto;
`;
const HBox = styled.div`
  position: relative;
  width: 1162px;
  margin: 0 auto;
  padding-top: 45px;
  transition: all 0.1s, color 0.1s 0.1s;
  border-bottom: 1px #282828 solid;
  padding-bottom: 15px;
  h2 {
    font-size: 40px;
    color: #fff;
  }
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

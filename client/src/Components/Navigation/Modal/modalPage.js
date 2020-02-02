import React, { useState, useRef } from "react";
import styled from "styled-components";

const ModalBox = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1050;
  width: 100%;
  display: ${props => (props.toggle ? "block" : "none")};
  height: ${props => (props.toggle ? "100%" : "0")};
  background-color: #0000008f;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
const Modal = styled.div`
  position: relative;
  width: 100%;
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 0 30px;
  color: #fff;
  background: #1f1f1f;
  border: 1px solid #282828;
`;
const Title = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 15px 15px;
  border-bottom: 1px solid #282828;
  h2 {
    font-size: 18px;
    color: #fff;
  }
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: transparent;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      transform: translate(0, -50%) rotate(45deg);
      background-color: #a6a6a6;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 100%;
      height: 1px;
      transform: translate(0, -50%) rotate(-45deg);
      background-color: #a6a6a6;
    }
  }
`;
const BodyContainer = styled.div`
  max-width: 1260px;
  padding-left: 0;
  padding-right: 0;
`;
const Body = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding: 30px 30px 0;
  > div {
    padding: 0px 10px;
    font-size: 18px;
    text-align: center;
    z-index: -1;
    > a {
      overflow: hidden;
      color: #fff;
      cursor: pointer;
      display: block;
      position: relative;
      border: 2px solid #a6dddd;
      margin: 30px auto 0;
      padding: 14px 15px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-radius: 0;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;
      &::before {
        content: "";
        position: absolute;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        background-color: #a6dddd;
        transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      }
      &:hover {
        color: #000;
      }
      &:hover::before {
        opacity: 1;
        width: 100%;
        z-index: -1;
      }
    }
    i {
      margin-right: 5px;
      line-height: 1em;
    }
  }
`;
const Korean = styled.div``;
const English = styled.div``;
export default () => {
  const [toggle, setToggle] = useState(true);
  const close = useRef(null);
  const handleClose = () => {
    setToggle(!toggle);
  };
  return (
    <ModalBox toggle={toggle}>
      <Container>
        <Modal>
          <Content>
            <Title>
              <h2>White Paper</h2>
            </Title>
            <Close ref={close} onClick={handleClose}>
              <div></div>
            </Close>
            <BodyContainer>
              <Body>
                <Korean>
                  <a href="#">
                    <i className="flag-icon flag-icon-kr"></i>
                    <span>Korean</span>
                  </a>
                </Korean>
                <English>
                  <a href="#">
                    <i className="flag-icon flag-icon-us"></i>
                    <span>English</span>
                  </a>
                </English>
              </Body>
            </BodyContainer>
          </Content>
        </Modal>
      </Container>
    </ModalBox>
  );
};

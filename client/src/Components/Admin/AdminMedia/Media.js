import React, { useEffect } from "react";
import styled from "styled-components";
import MediaUpload from "./MediaUpload";
import Content from "./Content";
import { useSelector, useDispatch } from "react-redux";
import { ipConfirm } from "../../../actions/ip";

const Section = styled.section`
  margin-top: 80px;
  padding: 0 0 60px;
  overflow: hidden;
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
  margin-bottom: 55px;
  h2 {
    font-weight: 700;
    font-size: 40px;
    color: #fff;
  }
`;

export default ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ipConfirm());
  }, []);
  return (
    <>
      <Section>
        <Container>
          <HBox>
            <h2>Media Upload</h2>
          </HBox>
          <MediaUpload />
        </Container>
      </Section>
      <Content history={history} />
    </>
  );
};

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPressAll } from "../../../actions/press";
import { Link, useLocation } from "react-router-dom";

const Section = styled.section`
  margin-top: 80px;
  padding: 0 0 120px;
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
const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  position: relative;
  margin-top: 40px;
  text-align: center;
  flex: 0 0 25%;
  max-width: 25%;
  padding-right: 15px;
  padding-left: 15px;
  a {
    color: #fff;
    overflow: hidden;
    figure {
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      background: #fff;
      overflow: hidden;
      border: 1px solid #fff;
    }
    p {
      text-align: left;
      margin: 0;
      padding: 20px 0 0;
      font-size: 20px;
      line-height: 1.5;
      display: -webkit-box;
      max-height: 260px;
      opacity: 0.9;
    }
  }
`;
const Logo = styled.div`
  position: absolute;
  left: 16px;
  top: 1px;
  margin: 0;
  padding: 2px 5px;
  background: #353434;
  width: 85px;
  height: 34px;
  opacity: 0.7;
  img {
    width: 75px;
    height: 30px;
  }
`;
const Sub = styled.div`
  text-align: left;
  margin: 0;
  padding: 14px 0 0;
  font-size: 15px;
  letter-spacing: 1px;
  vertical-align: text-bottom;
  span:first-child {
    font-weight: bold;
  }
  span:last-child {
    margin-left: 5px;
    opacity: 0.8;
    ::before {
      display: inline-block;
      content: "";
      width: 1px;
      height: 12px;
      margin-right: 11px;
      background: #fff;
      opacity: 0.8;
    }
  }
`;
const SeeMore = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 90px;
`;
const SLink = styled(Link)`
  padding: 10px 30px;
  background: #393939;
  color: #fff;
  font-size: 22px;
`;
export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { press, cnt } = useSelector(state => ({
    press: state.press.adminPress,
    cnt: state.press.cnt
  }));
  const dispatch = useDispatch();
  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };
  console.log(press, cnt, useLocation());
  useEffect(() => {
    dispatch(getPressAll(currentPage));
  }, [currentPage]);
  return (
    <Section>
      <Container>
        <HBox>
          <h2>Press</h2>
        </HBox>
        <Articles>
          {press &&
            press.map(pr => (
              <Item key={pr.no}>
                <a href={pr.media_link} target="_blank">
                  <figure src="#" alt="poster">
                    <Logo>
                      <img src="#" alt="logo" />
                    </Logo>
                  </figure>
                  <Sub>
                    <span>{pr.media_name}</span>
                    <span>{pr.reg_date}</span>
                  </Sub>
                  <p>{pr.title}</p>
                </a>
              </Item>
            ))}
        </Articles>
        <SeeMore>
          {cnt && press.length === cnt - 1 ? null : (
            <SLink to="#" onClick={handleClick}>
              더보기
            </SLink>
          )}
        </SeeMore>
      </Container>
    </Section>
  );
};

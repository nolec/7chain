import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPressAll, getPress7chain } from "../../actions/press";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(80, 120)}
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const MainArticle = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 0 20px;
  display: flex;
  color: #fff;
`;

const Poster = styled.div`
  position: relative;
  max-height: 470px;
  width: 60%;
  border: 1px solid #fff;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const MainContent = styled.div`
  padding-left: 20px;
  width: 40%;
  position: relative;
`;
const ContentMeta = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  span:nth-child(1) {
    position: relative;
    height: 52px;
    color: #bab1a4;
    width: 70%;
    text-align: left;
    font-size: 33px;
    font-weight: 800;
  }
  span:nth-child(2) {
    position: relative;
    opacity: 0.9;
    width: 30%;
    padding: 17px 15px 0;
    height: 52px;
    text-align: right;
  }
`;
const ContentTitle = styled.div`
  p {
    padding-top: 20px;
    color: #fff;
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1.5;
  }
`;
const ContentDesc = styled.div`
  p {
    color: #fff;
    font-size: 19px;
  }
`;
const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
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
      img {
        width: 100%;
        height: 12vw;
        max-height: 160px;
        transition: 0.3s ease-in-out;
      }
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
  const press = useSelector(state => state.press);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    dispatch(getPress7chain(currentPage));
  }, [currentPage]);
  return (
    <Section>
      <Container>
        <HBox>
          <h2>Press</h2>
        </HBox>
        <MainArticle>
          <Poster>
            <a
              href={
                press.chainPress.length > 0
                  ? press.chainPress[0].media_link
                  : undefined
              }
              target="_blank"
            >
              <img
                src={
                  press.chainPress.length > 0
                    ? `http://localhost:5000/${encodeURIComponent(
                        press.chainPress[0].poster_img_filename
                      )}`
                    : null
                }
              />
              <Logo>
                <img
                  style={{ width: "120px", height: "52px" }}
                  src={
                    press.chainPress.length > 0
                      ? `http://localhost:5000/${encodeURIComponent(
                          press.chainPress[0].poster_img_filename
                        )}`
                      : null
                  }
                  alt="logo"
                />
              </Logo>
            </a>
          </Poster>
          <MainContent>
            <ContentMeta>
              <span>
                {press.chainPress.length > 0 && press.chainPress[0].media_name}
              </span>
              <span>
                {press.chainPress.length > 0 && press.chainPress[0].reg_date}
              </span>
            </ContentMeta>
            <ContentTitle>
              <a
                href={
                  press.chainPress.length > 0
                    ? press.chainPress[0].media_link
                    : undefined
                }
                target="_blank"
              >
                <p>
                  {press.chainPress.length > 0 && press.chainPress[0].title}
                </p>
              </a>
            </ContentTitle>
            <ContentDesc>
              <a
                href={
                  press.chainPress.length > 0
                    ? press.chainPress[0].media_link
                    : undefined
                }
                target="_blank"
              >
                <p>
                  {press.chainPress.length > 0 && press.chainPress[0].content}
                </p>
              </a>
            </ContentDesc>
          </MainContent>
        </MainArticle>
        <Articles>
          {press.chainPress.map(pr => (
            <Item key={pr.no}>
              <a href={pr.media_link} target="_blank">
                <figure src="#" alt="poster">
                  <img
                    src={`http://localhost:5000/${encodeURIComponent(
                      pr.poster_img_filename
                    )}`}
                    alt="poster"
                  />
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
          {press.cnt && press.chainPress.length === press.cnt - 1 ? null : (
            <SLink to="#" onClick={handleClick}>
              더보기
            </SLink>
          )}
        </SeeMore>
      </Container>
    </Section>
  );
};

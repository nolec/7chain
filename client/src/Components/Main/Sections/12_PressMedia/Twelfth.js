import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getPress } from "../../../../actions/press";
import { Link } from "react-router-dom";
import { getMedia } from "../../../../actions/media";
import { device } from "../../../../device";
import { LangContext } from "../../../../Context";
import Scene from "../../ScrollMagic";

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
  margin-bottom: 55px;
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
      max-height: 160px;
      margin: 0;
      padding: 0;
      background: #fff;
      overflow: hidden;
      border: 1px solid #fff;
      img {
        height: 12vw;
        width: 100%;
        max-height: 160px;
        ${device.PC1199`height: 16vw; max-height : none;`}
        ${device.PC991`height: 25vw;`}
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
    width: 75px !important;
    height: 30px !important;
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
  const { press, media } = useSelector(
    state => ({ press: state.press, media: state.media }),
    []
  );
  const { lang } = useContext(LangContext);
  const mediaRef = useRef(null);
  const pressRef = useRef(null);
  useEffect(() => {
    Scene(mediaRef.current.children, 0.7, "active");
  }, [Scene]);
  useEffect(() => {
    Scene(pressRef.current.children, 0.7, "active");
  }, [Scene]);
  // const tags = useMemo(() => {
  //   return [dispatch(getPress()), dispatch(getMedia())];
  // }, [press.loading]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPress());
  }, []);
  useEffect(() => {
    dispatch(getMedia());
  }, []);
  return (
    <>
      <Section id="press">
        <Container ref={pressRef}>
          <HBox>
            <h2>Press</h2>
          </HBox>
          <Articles>
            {press.press.map((pr, i) => (
              <Item key={i}>
                <a href={pr.media_link} target="_blank">
                  <figure src="#" alt="poster">
                    <img
                      src={`/images/press/${pr.poster_img_filename}`}
                      alt="poster"
                    />
                    <Logo>
                      <img
                        src={`/images/press/${encodeURIComponent(
                          pr.logo_img_filename,
                          "euc-kr"
                        )}`}
                        alt="logo"
                      />
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
            <SLink to="/press">{lang.seeMore}</SLink>
          </SeeMore>
        </Container>
      </Section>
      <Section id="media">
        <Container ref={mediaRef}>
          <HBox>
            <h2>Media</h2>
          </HBox>
          <Articles>
            {media.media.map((me, i) => (
              <Item key={i}>
                <a href={me.media_link} target="_blank">
                  <figure src="#" alt="poster">
                    <img
                      src={`/images/media/${encodeURIComponent(
                        me.poster_img_filename,
                        "euc-kr"
                      )}`}
                      alt="poster"
                    />
                    {/* <Logo>
                      <img
                        src={`/images/media/${encodeURIComponent(
                          me.logo_img_filename,
                          "euc-kr"
                        )}`}
                        alt="logo"
                      />
                    </Logo> */}
                  </figure>
                  <Sub>
                    <span>{me.media_name}</span>
                    <span>{me.reg_date}</span>
                  </Sub>
                  <p>{me.title}</p>
                </a>
              </Item>
            ))}
          </Articles>
          <SeeMore>
            <SLink to="/media">{lang.seeMore}</SLink>
          </SeeMore>
        </Container>
      </Section>
    </>
  );
};

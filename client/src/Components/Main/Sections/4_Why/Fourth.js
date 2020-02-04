import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import Scene from "../../ScrollMagic";
import { LangContext } from "../../../../Context";
import { TweenMax, TimelineLite } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax);

const Section = styled.section`
${props => props.theme.style.SectionStyle(0, 120)}
  background: ${props => props.theme.css.evenColor};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)};
  ${props => props.theme.style.GsapStyle()}
`;
const HBox = styled.div`
  ${props => props.theme.style.HboxStyle(45, 15)}
`;
const ContentBox = styled.div`
  padding-bottom: 120px;
  margin-top: 40px;
  ${device.PC`text-align: center;`}
  ${device.PC770`padding-bottom: 60px;`}
  h3 {
    position: relative;
    margin-bottom: 0;
    font-size: 30px;
    text-align: left;
    color: #a7dede;
    ${device.PC450`font-size: 20px;`}
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${props => props.theme.file.arr}) 50% 70% no-repeat;
    }
  }
  > div {
    display: inline-block;
    width: 33.33%;
    vertical-align: top;
    text-align: left;
    color: #fff;
    ${device.PC`
      position: relative;
      width: auto;`};
    ${device.PC770`
    text-align: center;
    width: 95%;
    padding: 0px;`};
  }
`;
const Legacy = styled.div`
  ${props =>
    props.theme.style.handleWhyBox(
      420,
      "120px 0 0 140px",
      0,
      "210px 0 0",
      props.theme.file.legacy,
      "center top"
    )};
  ${props => props.theme.style.whyBoxStyle(18, props.theme.css.whyBcolor, 16)};
  ${device.PC`    
    padding: 140px 0 0 150px;
    left: 60px;
    margin: 100px 0px 0px;
    width: 460px;`}
  ${device.PC990`    
    padding: 100px 0 0 120px;
    top: 50px;
    left: 50px;
    margin: 70px 0px;
    width: 355px;`}
  ${device.PC770`    
    padding: 145px 0 0 165px;
    top: 0;
    left: 0px;
    margin: 70px 0 20px 0;
    width: 470px;
    background-position: center top;
    text-align: left;`}
  ${device.PC490`padding: 120px 0 0 105px; width: 350px;`};
  ${device.PC380`padding: 28% 0 0 32%; max-width: 100%;`};
`;
const BlockChain = styled.div`
  ${props =>
    props.theme.style.handleWhyBox(
      420,
      "200px 0 0 115px",
      42,
      "429px 0 0",
      props.theme.file.blockChain,
      "center top"
    )}
  ${props => props.theme.style.whyBoxStyle(18, props.theme.css.whyBcolor, 16)};
  ${device.PC`    
    padding: 230px 0 0 125px;
    left: -60px;
    margin: 100px 0px 0px;
    width: 460px;`}
  ${device.PC990`    
    padding: 190px 0 0 130px;
    top: 50px;
    left: -50px;
    margin: 70px 0px;
    width: 355px;`}
  ${device.PC770`    
    padding: 230px 0 0 140px;
    top: 10px;
    left: 0px;
    margin: 0px 0 20px 0;
    width: 470px;
    background-position: center top;
    text-align: left;`}
  ${device.PC490`padding: 180px 0 0 75px; width: 350px;`};
  ${device.PC380`padding: 46% 0 0 20%; max-width: 100%;`};
`;
const SevenChain = styled.div`
  ${props =>
    props.theme.style.handleWhyBox(
      500,
      "550px 0 0 140px",
      82,
      "70px 0 0",
      props.theme.file.chainGray,
      "center top"
    )}
  p b {
    font-size: 18.5px;
  }
  ${props =>
    props.theme.style.whyBoxStyle(18.5, props.theme.css.whyCcolor, 16.5)};
  ${device.PC`
    padding: 160px 0 0 420px;
    top: -150px;
    left: 0px;
    margin: 30px 0px 0px;
    width: 710px;
    background-size : 410px;
    background-position : left top;
    `}
  ${device.PC770`    
    padding: 460px 0 0 120px;
    top: 10px;
    left: 0px;
    margin: 0px 0 20px 0;
    width: 440px;
    background-position: center top;
    text-align: left;`}
  ${device.PC490`padding: 380px 0 0 60px; width: 350px; background-size : contain`};
  ${device.PC380`padding: 100% 0 0 12%; max-width: 90%;`};
`;
const SubBox = styled.div`
  color: #a7dede;
  width: 100%;
  text-align: left;
  padding-top: 40px;
  border-top: 1px dotted #a59f91;
  > div:not(:first-child) {
    margin-top: 40px;
  }
`;
const SubContent = styled.div`
  position: relative;
  padding-left: 200px;
  width: 100%;
  height: 142px;
  ${device.PC770`    
    padding: 0 10px 0 140px;
    height: auto;`}
  ${device.PC450`padding: 0;`}
  > div {
    position: absolute;
    top: 0;
    left: 0px;
    width: 180px;
    height: 142px;
    background-image: ${props => {
      if (props.name === "first") return `url(${props.theme.file.equity})`;
      else if (props.name === "second")
        return `url(${props.theme.file.transparency})`;
      else if (props.name === "third")
        return `url(${props.theme.file.blueOcean})`;
    }};
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 180px 142px;
    ${device.PC770`    
width: 120px;
    height: 91px;
    background-size: 120px 91px;`}
    ${device.PC490`top: 0px;
    left: 0px;`}
    ${device.PC450`display: none;`}
  }
  h4 {
    font-size: 24px;
    color: #a9dede;
    padding-top: 20px;
    ${device.PC770`    
font-size: 20px;
    padding-top: 10px;`}
    ${device.PC490`font-size: 16px;`}
    ${device.PC450`font-size: 16px;`}
  }
  p {
    font-size: 20px;
    color: #fff;
    opacity: 0.9;
    ${device.PC770`    
    font-size: 15px;`}
  }
`;
export default () => {
  const why = useRef(null);
  const sevenChain = useRef(null);
  const { lang } = useContext(LangContext);
  useEffect(() => {
    Scene(why.current.children, 0.7, "active");
  }, []);
  useEffect(() => {
    const tween = new TimelineLite();
    tween
      .fromTo(
        sevenChain.current,
        0.7,
        {
          scale: 0.8,
          opacity: 0
        },
        { scale: 1.2, opacity: 1 }
      )
      .fromTo(
        sevenChain.current,
        0.7,
        {
          scale: 1.2
        },
        { scale: 1 }
      )
      .fromTo(
        sevenChain.current,
        0.7,
        {
          scale: 1
        },
        { scale: 1.2 }
      )
      .fromTo(
        sevenChain.current,
        0.7,
        {
          scale: 1.2
        },
        { scale: 1 }
      );
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: sevenChain.current,
      offset: 50,
      triggerHook: 0.5,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);
  }, []);
  return (
    <Section id="why">
      <Container ref={why}>
        <HBox>
          <h2>{lang.why01}</h2>
        </HBox>
        <ContentBox>
          <h3>{lang.why02}</h3>
          <div>
            <Legacy>
              <p>
                <b> {lang.legacy01}</b>
                <br />
                <span>{lang.legacy02}</span>
              </p>
              <p>
                <b>{lang.legacy03}</b>
                <br />
                <span>{lang.legacy04}</span>
              </p>
              <p>
                <b>{lang.legacy05}</b>
                <span>{lang.legacy06}</span>
              </p>
            </Legacy>
          </div>
          <div>
            <BlockChain>
              <p>
                <b>{lang.blockChain01}</b>
                <br />
                <span>{lang.blockChain02}</span>
              </p>
              <p>
                <b>{lang.blockChain03}</b>
                <span>{lang.blockChain04}</span>
              </p>
              <p>
                <b>{lang.blockChain05}</b>
                <span>{lang.blockChain06}</span>
              </p>
              <p>
                <b>{lang.blockChain07}</b>
              </p>
              <p>
                <b>{lang.blockChain08}</b>
              </p>
            </BlockChain>
          </div>
          <div>
            <SevenChain ref={sevenChain}>
              <p>
                <b>{lang.sevenChain01}</b>
                <br />
                <span>{lang.sevenChain02}</span>
              </p>
              <p>
                <b>{lang.sevenChain03}</b>
                <br />
                <span>{lang.sevenChain04}</span>
              </p>
              <p>
                <b>{lang.sevenChain05}</b>
                <br />
                <span>{lang.sevenChain06}</span>
              </p>
              <p>
                <b>{lang.sevenChain07}</b>
              </p>
              <p>
                <b>{lang.sevenChain08}</b>
              </p>
              <p>
                <b>{lang.sevenChain09}</b>
                <span id="lblWhy7Chain024">{lang.sevenChain10}</span>
              </p>
            </SevenChain>
          </div>
        </ContentBox>
        <SubBox>
          <SubContent name="first">
            <div></div>
            <h4>{lang.whysub01}</h4>
            <p>{lang.whysub02}</p>
          </SubContent>
          <SubContent name="second">
            <div></div>
            <h4>{lang.whysub03}</h4>
            <p>{lang.whysub04}</p>
          </SubContent>
          <SubContent name="third">
            <div></div>
            <h4>{lang.whysub05}</h4>
            <p>{lang.whysub06}</p>
          </SubContent>
        </SubBox>
      </Container>
    </Section>
  );
};

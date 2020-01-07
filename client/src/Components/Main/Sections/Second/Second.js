import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ScrollMagic from "scrollmagic";

const Section = styled.section`
  padding-bottom: 120px;
  background: #1c1c1c;
  margin: auto;
`;
const Container = styled.div`
  max-width: 1260px;
  width: 1162px;
  margin: auto;
  > div {
    opacity: 0;
    position: relative;
    top: -100;
    transition: 0.3s linear;
  }
  .active {
    position: relative;
    opacity: 1;
    top: 0;
  }
`;
const HBox = styled.div`
  position: relative;
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
const ContentBox = styled.div`
  margin-top: 0px;
  padding-left: 92px;
  position: relative;
`;
const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 450px;
  background: url(${props => props.back}) center 0 no-repeat;
  background-size: contain;
  margin-top: 60px;
  p {
    padding: 390px 0 0 0px;
    margin: 0 0 0 -50px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    opacity: 1;
  }
`;
const TextBox = styled.div`
  padding: 80px 30px 0 300px;
  p {
    font-size: 20px;
    color: #fff;
    opacity: 0.9;
  }
`;
export default () => {
  const controller = new ScrollMagic.Controller();
  const gsap = useRef(null);
  console.log("second 실행");
  useEffect(() => {
    const Scene = () => {
      for (let i = 0; i < gsap.current.children.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: gsap.current.children[i],
          offset: 50,
          triggerHook: 0.7
        })
          .setClassToggle(gsap.current.children[i], "active")
          .addTo(controller);
      }
    };
    Scene();

    return () => Scene();
  }, []);
  return (
    <Section id="overview">
      <Container ref={gsap}>
        <HBox>
          <h2>탈중앙화된 확률의 중요성</h2>
        </HBox>
        <ContentBox>
          <ImgBox back={require("../../../../assets/images/man_2.png")}>
            <p>
              로제 카이와 - 사회학자, 문학평론가
              <br />
              (1913년 3월 3일 ~ 1978년 12월 21일)
            </p>
          </ImgBox>
          <TextBox>
            <p>
              프랑스의 사회학자이자 평론가인 ‘로제카이와(Roger Caillois)’는
              1958년 그의 저서 '인간과 놀이'에서 “게임은 역할과 경쟁 그리고 운,
              이 3가지 재미요소를 통해 궁극적인 몰입 단계에 이른다.”라고
              정의하고 있습니다.
              <br />
              <br />
              현 시대의 디지털 게임 또한 그가 정의한 3가지 재미요소로 구성되어
              있으며, 특히 운은 게임 전체에 영향을 주기 때문에 핵심 요소로
              작용하고 있습니다.
              <br />
              <br />
              하지만 운 즉, 확률은 중앙화 되어 있는 구조로 인해 악의적인 조작
              여부와 관계없이 여전히 불신의 영역으로 남아 있으며 현재까지도 많은
              분쟁이 발생하고 있습니다.
              <br />
              <br />
              이제 7Chain을 통해 이러한 분쟁은 사라질 것 입니다.
            </p>
          </TextBox>
        </ContentBox>
      </Container>
    </Section>
  );
};

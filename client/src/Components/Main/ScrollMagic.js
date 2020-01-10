import ScrollMagic from "scrollmagic";

const controller = new ScrollMagic.Controller();
const Scene = gsap => {
  console.log(gsap.current);
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
export default Scene;

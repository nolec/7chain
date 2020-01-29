import ScrollMagic from "scrollmagic";

const controller = new ScrollMagic.Controller({ addIndicators: true });
const Scene = (gsap, trigger, className) => {
  for (let i = 0; i < gsap.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: gsap[i],
      offset: -50,
      triggerHook: trigger
    })
      .setClassToggle(gsap[i], className)
      .addTo(controller);
  }
};
export default Scene;

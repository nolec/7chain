import { TweenLite } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenLite);

const controller = new ScrollMagic.Controller();
const Loadmap = (gsap, trigger) => {
  for (let i = 0; i < gsap.length; i++) {
    const tl = TweenLite.fromTo(
      gsap[i],
      0.5,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0 }
    );
    let loadmap = ScrollMagic.Scene({
      triggerElement: gsap[i],
      offset: -50,
      triggerHook: trigger,
      reverse: false
    }).setTween(tl);
    controller.addScene(loadmap);
  }
};
export default Loadmap;

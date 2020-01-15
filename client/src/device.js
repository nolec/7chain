const maxSize = {
  PC767: 767,
  PC768: 768,
  PC770: 770,
  PC860: 860,
  PC920: 920,
  PC990: 990,
  PC991: 991,
  PC992: 992,
  PC1000: 1000,
  PC1199: 1199,
  PC: 1200
};
const minSize = {
  minPC768: 768,
  minPC992: 992,
  minPC: 1200
};
export const device = Object.keys(maxSize).reduce((acc, key) => {
  acc[key] = style => `
    @media (max-width: ${maxSize[key]}px) {
      ${style};
    }
  `;
  return acc;
}, {});
export const minDevice = Object.keys(minSize).reduce((acc, key) => {
  acc[key] = style => `
  @media (min-width: ${minSize[key]}px) {
    ${style};
  }`;
  return acc;
}, {});
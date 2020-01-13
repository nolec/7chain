const breakPoint = {
  PC: 1200,
  PC920: 920,
  PC990: 990,
  MOBILE: 768
};
const device = Object.keys(breakPoint).reduce((acc, key) => {
  acc[key] = style => `
      @media (max-width: ${breakPoint[key]}px) {
        ${style};
      }
    `;
  return acc;
}, {});
export default device;

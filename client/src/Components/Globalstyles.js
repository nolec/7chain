import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};
@font-face {
    font-family: notopen_numbers;
    src:url(${require("../assets/fonts/notopen_numbers.ttf")}) format('opentype');
    text-rendering: optimizeLegibility;
}

*,::before,::after{
    box-sizing : border-box;
}
body {
    width: 100%;
    overflow-x: hidden;
    padding: 0;
    word-break: break-word;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-color: #000;
    font-family : 'notopen_numbers', sans-serif;
}

p {
    line-height: 1.75;
}

a {
  color: #fed136;
  cursor:pointer;
  text-decoration : none;
}

a:hover {text-decoration:none !important;color:#bfab7c;}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;color:#333;
}
`;
export default globalStyles;

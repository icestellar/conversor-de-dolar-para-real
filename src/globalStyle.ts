import { createGlobalStyle } from 'styled-components';
import logo from "./Assets/Images/Mask.png";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Arial";
    src: url("../Assets/Fonts/Roboto.ttf");
  }
  html  {
    display: flex;
    flex-direction: column;
    background: url(${logo}) fixed no-repeat bottom right;
    background-size: contain;
    font-family: "Roboto" ,sans-serif;
  }
`;
 
export default GlobalStyle;
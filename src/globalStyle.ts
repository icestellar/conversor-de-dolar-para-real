import { createGlobalStyle } from 'styled-components';
import Logo from "./Assets/Images/Mask.png";

const GlobalStyle = createGlobalStyle`
  html  {
    display: flex;
    flex-direction: column;
    background: url(${Logo}) fixed no-repeat bottom right;
    background-size: contain;
    padding: 3em 3em;
    @media (max-width: 950px){
        background: none;
    }
  }
 
`;
 
export default GlobalStyle;
import { createGlobalStyle,  } from 'styled-components';
import Mask from "../Assets/Images/Mask.png";

const GlobalStyle = createGlobalStyle`
  body  {
    font-family: 'Roboto', sans-serif;
    
    display: flex;
    flex-direction: column;
    background: url(${Mask}) fixed no-repeat bottom right;
    background-size: contain;
    padding: 3em 3em;
    @media (max-width: 950px){
        background: none;
    }
    h1, h2 ,h3 , p{
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
    }
    span{
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    }
  }
 
`;
 
export default GlobalStyle;
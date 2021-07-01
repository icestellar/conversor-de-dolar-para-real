import React from 'react';
import { ContainerDiv, Img, ContainerText } from './Style';
import Logo from "../../Assets/Images/Logo.svg"
function Header() {
  return (
    <ContainerDiv>
        <Img src={Logo}></Img>
        <ContainerText>
            <p className="main text"> DATA | HORARIO UTC</p>
            <p className="info-text"> Dados de câmbio disponibilizados pela Morningstar.</p>
        </ContainerText>
    </ContainerDiv>
  );
}

export default Header;

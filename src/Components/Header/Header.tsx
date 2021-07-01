import React, { Component} from 'react';
import { ContainerDiv, Img, ContainerText } from './Style';
import Logo from "../../Assets/Images/Logo.svg"
interface  iProps{
    day: string, 
    hour: string
}
class Header extends Component<iProps>{

  render() {
    return (
        <ContainerDiv>
            <Img src={Logo}></Img>
            <ContainerText>
                <p className="main-text">{this.props.day} &emsp;| &emsp; {this.props.hour} UTC</p>
                <p className="info-text"> Dados de câmbio disponibilizados pela Morningstar.</p>
            </ContainerText>
        </ContainerDiv>
      );
    };
}

export default Header;

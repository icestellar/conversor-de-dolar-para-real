import { ContainerDiv, Img, ContainerText } from './Style';
import Logo from "../../Assets/Images/Logo.svg"

interface  iProps{
    day: string, 
    hour: string
}
const Header = (props:iProps) =>{
    return (
        <ContainerDiv>
            <Img src={Logo}></Img>
            <ContainerText>
                <p className="main-text">{props.day} &emsp;| &emsp; {props.hour} UTC</p>
                <p className="info-text"> Dados de câmbio disponibilizados pela Morningstar.</p>
            </ContainerText>
        </ContainerDiv>
      );
    };

export default Header;

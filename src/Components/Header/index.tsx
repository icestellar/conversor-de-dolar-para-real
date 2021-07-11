import Grid from '@material-ui/core/Grid';
import { Img, ContainerText, MainBox, Info, InfoMorning} from './Style';
import Logo from "../../Assets/Images/Logo.svg"

interface  iProps{
    day: string, 
    hour: string
}
const Header = (props:iProps) =>{
    return (
        <>
           <MainBox>
           <Grid container>
                <Grid item xs={12} md={2} lg={2}>
                    <Img src={Logo}></Img>
                </Grid>
                <Grid item xs={12} md={8} lg={4} style={{paddingRight: "40px"}}>
                   <ContainerText>
                    <Info>{props.day} | {props.hour} </Info>
                    <InfoMorning>Dados de câmbio disponibilizados pela Morningstar.</InfoMorning>
                   </ContainerText>
                </Grid>
            </Grid>
           </MainBox>
        </>
      );
    };

export default Header;

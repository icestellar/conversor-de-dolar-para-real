import Grid from '@material-ui/core/Grid';
import { Img, ContainerText, MainBox, Info, InfoMorning } from './Style';
import Logo from "../../Assets/Images/Logo.svg"
import { ReturnFormatted } from '../../Functions/Utils/TextValidation';

interface iProps {
    day: string,
    hour: string,
    currentValue: Number
}
const Header = (props: iProps) => {
    return (
        <>
            <MainBox>
                <Grid container>
                    <Grid item xs={12} md={2} lg={2}>
                        <Img src={Logo}></Img>
                    </Grid>
                    <Grid item xs={12} md={8} lg={4}>
                        <InfoMorning>
                            <ContainerText>
                                <Info>$ {ReturnFormatted(props.currentValue.toString())} | {props.day} | {props.hour}</Info>
                                <InfoMorning>Dados de câmbio disponibilizados pela Morningstar.</InfoMorning>
                            </ContainerText>
                        </InfoMorning>
                    </Grid>
                </Grid>
            </MainBox>
        </>
    );
};

export default Header;

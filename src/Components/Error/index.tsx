import { BackButtonStyled } from "../Buttons/Style"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ErrorBox, ErrorText, Img } from "./Style";
import Logo from "../../Assets/Images/Logo.svg"
const Error = () => {

    return (
        <>
            <Img src={Logo}></Img>
            <ErrorBox>
                <BackButtonStyled
                    variant="contained"
                    size="large"
                    startIcon={<ArrowBackIcon />} onClick={() => { document.location.reload() }}>&nbsp;Recarregar</BackButtonStyled>
                <ErrorText>Uh, algo deu errado :/</ErrorText>
            </ErrorBox>
        </>
    );
};
export default Error
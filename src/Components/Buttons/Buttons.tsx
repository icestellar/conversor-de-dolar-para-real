import { Button } from '@material-ui/core';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
interface iProps{
    btnName: string
    btnClicked:boolean,
    btnkClickedHandler: Function,

}

const ConvertButtonStyled = withStyles(() => ({
    root: {
      color: "#fff",
      backgroundColor: "#00AB63",
      textTransform: "capitalize",
      padding: "16px",
      fontSize: "16px",
      '&:hover': {
        backgroundColor: "#00AB63",
      },
    },
  }))(Button);

  const BackButtonStyled = withStyles(() => ({
    root: {
      color: "#2E3742",
      backgroundColor: "#fff",
      textTransform: "capitalize",
      padding: "16px",
      fontSize: "16px",
      '&:hover': {
        backgroundColor: "#ececec",
      },
    },
  }))(Button);

const BackButton = (props:iProps) =>{
    return(
        <BackButtonStyled 
        variant="contained"
        size="large"
        startIcon={<ArrowBackIcon />}onClick={() => {document.location.reload()}}>{props.btnName}</BackButtonStyled>
    )
}
const ConvertButton = (props:iProps) =>{
    return(
        <ConvertButtonStyled
        variant="contained"
        size="large"
        startIcon={<SwapHorizIcon />}
        onClick={() => props.btnkClickedHandler(!props.btnClicked)}>{props.btnName}</ConvertButtonStyled>

    )
}
export { BackButton, ConvertButton}
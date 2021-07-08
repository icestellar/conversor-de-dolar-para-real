import { Button } from '@material-ui/core';
interface iProps{
    btnName: string
    btnClicked:boolean,
    btnkClickedHandler: Function
}
const BackButton = (props:iProps) =>{
    return(
        <Button onClick={() => props.btnkClickedHandler(props.btnClicked)}>{props.btnName}</Button>
    )
}
const ConvertButton = (props:iProps) =>{
    return(
        <Button onClick={() => props.btnkClickedHandler(!props.btnClicked)}>{props.btnName}</Button>
    )
}
export { BackButton, ConvertButton}
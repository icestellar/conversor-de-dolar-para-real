import { Button } from '@material-ui/core';
import ReturnConversion from '../../Functions/Utils/Conversion'
import {BackButton} from '../Buttons/Buttons'
interface iProps{
    dollarAmount: any, 
    percentage: any,
    dollarCurrentValue: Number, 
    paymentMethod: string,
    backClicked:boolean,
    backClickedHandler: Function 
}
const Result = (props:iProps) => {

    return (
        <>
        <BackButton btnClicked={props.backClicked} btnkClickedHandler={props.backClickedHandler} btnName={"Voltar"}/>
        <h2>O resultado do cálculo é:</h2>
        <h2>R$ {ReturnConversion(props.dollarAmount, props.percentage, props.dollarCurrentValue, props.paymentMethod)}</h2>
        <h4>Compra no {props.paymentMethod} e taxa de {props.percentage} %</h4>
        <h4>Cotação do dólar: $1,00 = R$ {Number(props.dollarCurrentValue).toFixed(2)}</h4>
        </>
        

      );
  }
  export default Result
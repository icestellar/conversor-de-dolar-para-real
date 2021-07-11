import Conversion from '../../Functions/Utils/Conversion'
import {BackButton} from '../Buttons'
import {TitleText, ConvertText, InfoText} from './Style'
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
        <TitleText>O resultado do cálculo é:</TitleText>
        <ConvertText>R$ {Conversion(props.dollarAmount, props.percentage, props.dollarCurrentValue, props.paymentMethod)}</ConvertText>
        <InfoText><b>Compra no {props.paymentMethod} e taxa de</b> {props.percentage} %</InfoText>
        <InfoText><b>Cotação do dólar: </b> $1,00 = R$ {Number(props.dollarCurrentValue).toFixed(2)}</InfoText>
        </>
      );
  }
  export default Result
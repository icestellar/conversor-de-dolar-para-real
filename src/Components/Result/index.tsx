import {Conversion} from '../../Functions/Utils/Conversions'
import {BackButton} from '../Buttons'
import MoneyInfo from '../MoneyInfo'
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
    const convertedDollarValue = Conversion(props.dollarAmount, props.percentage, props.dollarCurrentValue, props.paymentMethod); 
    return (
        <>
        <BackButton btnClicked={props.backClicked} btnkClickedHandler={props.backClickedHandler} btnName={"Voltar"}/>
        <TitleText>O resultado do cálculo é:</TitleText>
        <ConvertText>R$ {convertedDollarValue}</ConvertText>
        <InfoText><b>Compra no {props.paymentMethod} e taxa de</b> {props.percentage} %</InfoText>
        <InfoText><b>Cotação do dólar: </b> $1,00 = R$ {Number(props.dollarCurrentValue).toFixed(2)}</InfoText>
        <MoneyInfo dollarAmount={props.dollarAmount} dollarCurrentValue={props.dollarCurrentValue} paymentMethod={props.paymentMethod} percentage={props.percentage} realConvertedValue={convertedDollarValue}/>
        </>
      );
  }
  export default Result
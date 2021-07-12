import { TaxDetails } from '../../Functions/Utils/Conversions';
import MoneyInfoBox from './Style';

interface iProps {
    paymentMethod: string,
    dollarAmount: Number,
    percentage: Number,
    dollarCurrentValue: Number,
    realConvertedValue: any
}

const MoneyInfo = (props: iProps) => {
    const taxDetails = TaxDetails(props.dollarAmount, props.percentage, props.dollarCurrentValue, props.paymentMethod)
    return (
        <MoneyInfoBox>
            <p>Alíquota IOF: {taxDetails.paymentMethod} %</p>
            <p>Dólar sem imposto: $ {props.dollarAmount}</p>
            <p>Dólar com imposto: $ {taxDetails.dollarValueWithTax}</p>
            <p>Real sem imposto: R$ {taxDetails.realValueWithoutTax}</p>
            <p>Real com imposto: R$ {props.realConvertedValue}</p>
            <p>Consultado preço com impostos sobre {taxDetails.paymentMethodName}</p>
        </MoneyInfoBox>
    );
}
export default MoneyInfo
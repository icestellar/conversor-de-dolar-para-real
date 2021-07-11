import { withStyles } from '@material-ui/core/styles';
import { FormControl, FormControlLabel, RadioGroup, Radio, RadioProps } from '@material-ui/core';
import { Label, PaymentBox } from './Style'
interface iProps {
  paymentMethod: string,
  paymentMethodHandler: Function
}

const PaymentMethod = (props: iProps) => {

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return ((event.target as HTMLInputElement).value);
  };

  const GreenRadio = withStyles({
    root: {
      color: "#808080",
      '&$checked': {
        color: "#008B57",
      },
    },
    checked: {},
  })((props: RadioProps) => <Radio color="default" {...props} />);

  return (
    <PaymentBox>
      <FormControl component="fieldset">
        <Label>Tipo de Compra</Label>
        <RadioGroup aria-label="PaymentMethod" name="PaymentMethod" value={props.paymentMethod} onChange={(event:any) => { props.paymentMethodHandler(handlePaymentChange(event)) }} row>
          <FormControlLabel value="dinheiro" control={<GreenRadio />} label="Dinheiro" />
          <FormControlLabel value="cartao" control={<GreenRadio />} label="Cartão" />
        </RadioGroup>
      </FormControl>
    </PaymentBox>
  );
}
export default PaymentMethod
import { withStyles } from '@material-ui/core/styles';
import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, RadioProps } from '@material-ui/core';

interface iProps{
  paymentMethod: any, 
  paymentMethodHandler: any
}

const PaymentMethod = (props:iProps) => {

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
    <FormControl component="fieldset">
    <FormLabel component="legend">Payment Method</FormLabel>
    <RadioGroup aria-label="PaymentMethod" name="PaymentMethod" value={props.paymentMethod} onChange={(event) => {props.paymentMethodHandler(handlePaymentChange(event))}} row>
      <FormControlLabel value="1" control={<GreenRadio />} label="Dinheiro"/>
      <FormControlLabel value="2" control={<GreenRadio />} label="Cartão"/>
    </RadioGroup>
  </FormControl>
    );
}
export default PaymentMethod
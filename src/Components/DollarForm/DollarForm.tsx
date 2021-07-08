import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import ConvertButton from '../Buttons/ConvertButton';
interface iProps{
  dollarAmount: any, 
  percentage: any,
  paymentMethod: string, 
  convertClicked: boolean, 
  paymentMethodHandler: Function, 
  dollarAmountHandler: Function,
  percentageHandler: Function,
  convertClickedHandler: Function
}
const GreenTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#008B57',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#008B57',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#D7E0EB',
      },
      '&:hover fieldset': {
        borderColor: '#008B57',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#008B57',
      },
    },
  },
})(TextField);
const DollarForm = (props:iProps) => {
  return(
    <>
    <form>
      <GreenTextField
        variant="outlined"
        margin="normal"
        name="dollarAmount"
        label="Dólar"
        id="dollarAmount"
        autoFocus
        required
        type="number"
        value={props.dollarAmount}
        onChange={(event) => {props.dollarAmountHandler(event.target.value)}}
        onBlur={(event) => {props.dollarAmountHandler(Number(event.target.value).toFixed(2))}}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
      <GreenTextField
        variant="outlined"
        margin="normal"
        name="taxState"
        required
        label="Taxa do estado"
        id="password"
        type="number"
        value={props.percentage}
        onChange={(event) => {props.percentageHandler(event.target.value)}}
        onBlur={(event) => {props.percentageHandler(Number(event.target.value).toFixed(2))}}
        InputProps={{
          startAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
      />
      <PaymentMethod paymentMethod={props.paymentMethod} paymentMethodHandler={props.paymentMethodHandler}/>
      <ConvertButton convertClicked={props.convertClicked} convertClickedHandler={props.convertClickedHandler} nameButton={"Converter"}/>
      </form>
    </>
  )
}


export default DollarForm
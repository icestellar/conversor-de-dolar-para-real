import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import { ConvertButton } from '../Buttons/Buttons';
import { FormBox } from '../DollarForm/Style';

interface iProps {
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
const DollarForm = (props: iProps) => {
  return (
    <>
        <FormBox>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={2} style={{paddingRight: "30px"}}>

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
              onChange={(event) => { props.dollarAmountHandler(event.target.value) }}
              onBlur={(event) => { props.dollarAmountHandler(Number(event.target.value).toFixed(2)) }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
              }}
            />
          </Grid>

            
          <Grid item xs={12} sm={12} md={4} lg={2} style={{paddingRight: "30px"}}>
            <GreenTextField
              variant="outlined"
              margin="normal"
              name="taxState"
              required
              label="Taxa do estado"
              id="password"
              type="number"
              value={props.percentage}
              onChange={(event) => { props.percentageHandler(event.target.value) }}
              onBlur={(event) => { props.percentageHandler(Number(event.target.value).toFixed(2)) }}
              InputProps={{
                startAdornment: <InputAdornment position="start">%</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
      </FormBox>
        <PaymentMethod paymentMethod={props.paymentMethod} paymentMethodHandler={props.paymentMethodHandler} />
        <Grid>
        <ConvertButton btnClicked={props.convertClicked} btnkClickedHandler={props.convertClickedHandler} btnName={"Converter"} />
        </Grid>
        
    </>
  )
}


export default DollarForm
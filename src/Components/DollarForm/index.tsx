import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import PaymentMethod from '../PaymentMethod';
import { ConvertButton } from '../Buttons';
import { FormBox, TextFieldBox, Label, GreenTextField } from './Style';
import { ReturnFormatted, ReturnPositive, ReturnValidPercentage } from '../../Functions/Utils/TextValidation';

interface iProps {
  dollarAmount: any,
  percentage: any,
  paymentMethod: string,
  convertClicked: boolean,
  enabledButton: boolean,
  paymentMethodHandler: Function,
  dollarAmountHandler: Function,
  percentageHandler: Function,
  convertClickedHandler: Function
}


const DollarForm = (props: iProps) => {
  return (
    <>
      <FormBox>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <TextFieldBox>
              <Label>Dólar</Label>
              <GreenTextField
                variant="outlined"
                margin="normal"
                name="dollarAmount"
                id="dollarAmount"
                autoFocus
                required
                type="number"
                value={ReturnPositive(props.dollarAmount)}
                onChange={(event: any) => { props.dollarAmountHandler(event.target.value) }}
                onBlur={(event: any) => { props.dollarAmountHandler(ReturnFormatted(event.target.value)) }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
              />
            </TextFieldBox>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <TextFieldBox>
              <Label>Taxa do estado</Label>
              <GreenTextField
                variant="outlined"
                margin="normal"
                name="taxState"
                required
                type="number"
                value={ReturnValidPercentage(props.percentage)}
                onChange={(event: any) => { props.percentageHandler(event.target.value) }}
                onBlur={(event: any) => { props.percentageHandler(ReturnFormatted(event.target.value)) }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
              />
            </TextFieldBox>
          </Grid>
        </Grid>
      </FormBox>
      <PaymentMethod paymentMethod={props.paymentMethod} paymentMethodHandler={props.paymentMethodHandler} />
      <Grid>
        <ConvertButton btnClicked={props.convertClicked} btnkClickedHandler={props.convertClickedHandler} btnName={"Converter"} btnEnabled={props.enabledButton} />
      </Grid>

    </>
  )
}


export default DollarForm
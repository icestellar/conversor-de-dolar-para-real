import { TextField } from '@material-ui/core';


interface iProps{
  dolarAmount: any, 
  percentage: any,
  dolarAmountHandler: any,
  percentageHandler: any
}

const DolarForm = (props:iProps) => {
  
  return(
    <>
    <TextField
        variant="outlined"
        margin="normal"
        required
        name="dolarAmount"
        label="Dolar"
        id="dolarAmount"
        autoFocus
        type="number"
        value={props.dolarAmount}
        onChange={(event) => {props.dolarAmountHandler(event.target.value)}}
        onBlur={(event) => {props.dolarAmountHandler(Number(event.target.value).toFixed(2) === "0.00" ? "" : Number(event.target.value).toFixed(2))}}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        name="taxState"
        label="Taxa do estado"
        id="password"
        autoFocus
        type="number"
        value={props.percentage}
        onChange={(event) => {props.percentageHandler(event.target.value)}}
        onBlur={(event) => {props.percentageHandler(Number(event.target.value).toFixed(2) === "0.00" ? "" : Number(event.target.value).toFixed(2))}}
      />
      
    </>
  )
}


export default DolarForm
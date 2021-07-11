const CheckIfInputIsValid = (value:string, percentage:string) => {
    return Number(value) > 0  && Number(percentage) > 0
}
const ReturnFormatted = (text:string) => {
    return Number(text).toFixed(2) != "0.00" ? Number(text).toFixed(2) : "" 
}

const ReturnPositive = (text:string) =>{
    return Number(text) >= 0 ? text : - text
}

const ReturnValidPercentage = (text:string) => {
    return Number(text) >= 0 && Number(text) < 10000 ? text : ""
}
export { CheckIfInputIsValid, ReturnFormatted, ReturnPositive, ReturnValidPercentage}
const CheckIfInputIsValid = (value:string, percentage:string) => {
    return value && percentage
}
const ReturnFormatted = (number:string) => {
    return Number(number).toFixed(2) != "0.00" ? Number(number).toFixed(2) : "" 
}

const ReturnPositive = (number:string) =>{
    return Number(number) >= 0 ? number : - number
}
export { CheckIfInputIsValid, ReturnFormatted, ReturnPositive}
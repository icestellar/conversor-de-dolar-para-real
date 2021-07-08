const ReturnConversion = (dollarAmount : any, percentage : any, dollarCurrentValue: any, paymentMethod:  String) => {
    switch (paymentMethod){
        case "dinheiro":
            var result = ((dollarAmount * (1 + percentage / 100)) + (dollarCurrentValue * (1 + 1.10/100))).toFixed(2)
            return result
        case "cartao":
            var result = (((dollarAmount * (1+ percentage / 100))*dollarCurrentValue)*(1 + 6.38/100)).toFixed(2)
            return result
        default:
            return 0
    }
}
export default ReturnConversion

const Conversion = (dollarAmount: any, percentage: any, dollarCurrentValue: any, paymentMethod: String) => {
    switch (paymentMethod) {
        case "dinheiro":
            var result = ((dollarAmount * (1 + (1.10 / 100))) * (dollarCurrentValue * (1 + (percentage / 100)))).toFixed(2)
            return result
        case "cartao":
            var resultCard = ((dollarAmount * (1 + ((percentage / 100) + 6.38 / 100))) * (dollarCurrentValue)).toFixed(2)
            return resultCard
        default:
            return 0
    }
}
const TaxDetails = (dollarAmount: any, percentage: any, dollarCurrentValue: any, paymentMethod: string) => {
    var dollarValueWithTax = ((1 + (percentage / 100)) * dollarAmount)
    var realValueWithoutTax = (dollarAmount * dollarCurrentValue * (1 + (percentage / 100)))
    return {
        paymentMethod: paymentMethod == "dinheiro" ? 1.10 : 6.38,
        dollarValueWithTax: dollarValueWithTax.toFixed(2),
        realValueWithoutTax: realValueWithoutTax.toFixed(2),
        paymentMethodName: paymentMethod == "dinheiro" ? "Dinheiro" : "Cartão"
    }
}

export { Conversion, TaxDetails }
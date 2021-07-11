import { CheckIfInputIsValid, ReturnFormatted, ReturnPositive, ReturnValidPercentage} from '../Functions/Utils/TextValidation'
test("Testando o método CheckIfInputIsValid", () => {
    expect(CheckIfInputIsValid("","")).toBe(false)
    expect(CheckIfInputIsValid("0","14.00")).toBe(false)
    expect(CheckIfInputIsValid("0","0")).toBe(false)
    expect(CheckIfInputIsValid("12.00","14.00")).toBe(true)
});

test("Testando o método ReturnFormatted", () => {
    expect(ReturnFormatted("0.00")).toBe("")
    expect(ReturnFormatted("2")).toBe("2.00")
});

test("Testando o método ReturnPositive", () => {
    expect(ReturnPositive("-12")).toBe(12)
    expect(ReturnPositive(-12)).toBe(12)
});

test("Testando o método ReturnValidPercentage", () => {
    expect(ReturnValidPercentage("10000")).toBe("")
    expect(ReturnValidPercentage("-10000")).toBe("")
});
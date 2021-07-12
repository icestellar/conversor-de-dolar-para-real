import {Conversion} from '../Functions/Utils/Conversions'
test("Testando metodo Conversion", () => {
    expect(Conversion("12", "12", 5.2614, "dinheiro")).toBe("71.49")
    expect(Conversion("12", "12", 5.2614, "cartao")).toBe("74.74")
});
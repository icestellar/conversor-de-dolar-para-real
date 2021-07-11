import { FormatDate } from "../Functions/Utils/FormatDate";
test("Testando o método FormatDate", () => {
    expect(FormatDate(undefined)).toStrictEqual({
        day: "Dia da cotação indisponível",
        hour: "Horário da cotação indisponível"
    });
    expect(FormatDate("2021-07-08 21:00:02")).toStrictEqual({
        day: "8 de julho de 2021",
        hour: "21:00 UTC"
    });
});
export const FormatDate = (date : string) => {
    if(!date) return {
        day: "Dia da cotação indisponível",
        hour: "Horário da cotação indisponível"
    }
    return {
        day: new Date(date.split(" ")[0]).toLocaleDateString("pt-br", {year: 'numeric', month: "long", day: "numeric", timeZone: "UTC"}),
        hour: date.split(" ")[1].substring(0,5) + " UTC"
    }
}
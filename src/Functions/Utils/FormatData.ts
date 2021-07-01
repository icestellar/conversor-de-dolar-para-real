export const formatDate = (date : string) => {
    return {
        day: new Date(date.split(" ")[0]).toLocaleDateString("pt-br", {year: 'numeric', month: "long", day: "numeric", timeZone: "UTC"}),
        hour: date.split(" ")[1].substring(0,5)
    }
}
import dayjs from "dayjs";

export function handleDiferrenceDates(date: Date | string) {
  const differenceDays = dayjs(date).diff(new Date(), 'days')

  if (differenceDays === 0) {
    return dayjs(date).format('HH[:]mm')
  }

  if (differenceDays === -1) {
    return 'Ontem'
  }

  if (differenceDays > -7) {
    const str = dayjs(date).locale('pt').format('dddd')
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return dayjs(date).format('DD[/]MM[/]YYYY')
}
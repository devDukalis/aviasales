import { format, add } from "date-fns"
import { ru } from "date-fns/locale"

export const generateUniqueKey = () => {
  return self.crypto.randomUUID()
}

export const formatFlightPrice = (price: number) => price.toLocaleString("ru-RU") + " Р"

export const formatFlightTime = (date: string) => format(new Date(date), "HH:mm", { locale: ru })

export const calculateFlightArrivalTime = (date: string, duration: number) =>
  format(add(new Date(date), { minutes: duration }), "HH:mm", { locale: ru })

export const formatFlightDuration = (duration: number) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60

  return `${hours}ч ${minutes}м`
}

export const formatFlightTransfers = (count: number) => {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return "пересадок"
  if (lastDigit === 1) return "пересадка"
  if (lastDigit >= 2 && lastDigit <= 4) return "пересадки"

  return "пересадок"
}

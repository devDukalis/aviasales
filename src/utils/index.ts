import { format, add } from "date-fns"
import { ru } from "date-fns/locale"

import { Ticket, TicketSortFilterKeys } from "@/models"
import { FlightTransferFiltersState } from "@/redux/features/tickets"

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

export const filterTicketsByTransfers = (
  tickets: Ticket[],
  filters: FlightTransferFiltersState,
): Ticket[] => {
  return tickets.filter((ticket) => {
    const transferCounts = ticket.segments.map((segment) => segment.stops.length)

    if (filters.all) {
      return true
    }

    const noTransfers = filters.noTransfers && transferCounts.every((count) => count === 0)
    const oneTransfer = filters.oneTransfer && transferCounts.some((count) => count === 1)
    const twoTransfers = filters.twoTransfers && transferCounts.some((count) => count === 2)
    const threeTransfers = filters.threeTransfers && transferCounts.some((count) => count === 3)

    return noTransfers || oneTransfer || twoTransfers || threeTransfers
  })
}

export const sortTickets = (tickets: Ticket[], sortBy: TicketSortFilterKeys): Ticket[] => {
  const sortedTickets = [...tickets]

  if (sortBy === "cheapest") {
    sortedTickets.sort((a, b) => a.price - b.price)
  } else if (sortBy === "fastest") {
    sortedTickets.sort((a, b) => {
      const totalDurationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
      const totalDurationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0)

      return totalDurationA - totalDurationB
    })
  } else if (sortBy === "optimal") {
    // Находим максимумы для нормализации
    const maxPrice = Math.max(...sortedTickets.map((t) => t.price))
    const maxDuration = Math.max(
      ...sortedTickets.map((t) => t.segments.reduce((sum, s) => sum + s.duration, 0)),
    )

    sortedTickets.sort((a, b) => {
      // Нормализованные значения (0-1)
      const normPriceA = a.price / maxPrice
      const normDurationA = a.segments.reduce((sum, s) => sum + s.duration, 0) / maxDuration
      const scoreA = normPriceA * 0.7 + normDurationA * 0.3 // Веса: цена 70%, длительность 30%

      const normPriceB = b.price / maxPrice
      const normDurationB = b.segments.reduce((sum, s) => sum + s.duration, 0) / maxDuration
      const scoreB = normPriceB * 0.7 + normDurationB * 0.3

      return scoreA - scoreB
    })
  }

  return sortedTickets
}

export type Segment = {
  origin: string // Код города (iata)
  destination: string // Код города (iata)
  date: string // Дата и время вылета туда или обратно
  stops: string[] // Массив кодов (iata) городов с пересадками
  duration: number // Общее время перелёта в минутах
}

export interface Ticket {
  id: string
  price: number // Цена в рублях
  carrier: string // Код авиакомпании (iata)
  segments: Segment[] // Массив перелётов
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
}

export type FlightTransferFilterKeys =
  | "all"
  | "noTransfers"
  | "oneTransfer"
  | "twoTransfers"
  | "threeTransfers"

export type TicketSortFilterKeys = "cheapest" | "fastest" | "optimal"

export type SearchId = string

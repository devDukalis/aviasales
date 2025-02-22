import { FlightTransferFilterKeys, TicketSortFilterKeys } from "@/models"

export const ticketFilters: { key: TicketSortFilterKeys; label: string }[] = [
  { key: "cheapest", label: "Самый дешевый" },
  { key: "fastest", label: "Самый быстрый" },
  { key: "optimal", label: "Оптимальный" },
]

export const borderRadiusValues = ["5px 0 0 5px", "0", "0 5px 5px 0"]

export const transferFilters: { key: FlightTransferFilterKeys; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "noTransfers", label: "Без пересадок" },
  { key: "oneTransfer", label: "1 пересадка" },
  { key: "twoTransfers", label: "2 пересадки" },
  { key: "threeTransfers", label: "3 пересадки" },
]

export const queries = ["375px", "570px"]

export const baseUrlImage = "https://pics.avs.io/110/36/"

export const pollingInterval = 30000

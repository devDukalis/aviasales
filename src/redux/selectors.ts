import { createSelector } from "reselect"

import { RootState } from "@/redux/store"
import { filterTicketsByTransfers, sortTickets } from "@/utils"

const selectTickets = (state: RootState) => state.tickets.tickets
const selectSortBy = (state: RootState) => state.tickets.sortBy
const selectTransferFilters = (state: RootState) => state.tickets.filters
export const selectVisibleTickets = (state: RootState) => state.tickets.visibleTickets

export const selectSortedAndFilteredTickets = createSelector(
  [selectTickets, selectSortBy, selectTransferFilters],
  (tickets, sortBy, transferFilters) => {
    const filteredTickets = filterTicketsByTransfers(tickets, transferFilters)

    return sortTickets(filteredTickets, sortBy)
  },
)

export const selectAreFiltersActive = createSelector([selectTransferFilters], (filters) => {
  return (
    filters.all ||
    filters.noTransfers ||
    filters.oneTransfer ||
    filters.twoTransfers ||
    filters.threeTransfers
  )
})

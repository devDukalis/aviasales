import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Ticket, TicketSortFilterKeys, FlightTransferFilterKeys, SearchId } from "@/models"

export type FlightTransferFiltersState = {
  all: boolean
  noTransfers: boolean
  oneTransfer: boolean
  twoTransfers: boolean
  threeTransfers: boolean
}

export type TicketsState = {
  tickets: Array<Ticket>
  sortBy: TicketSortFilterKeys
  filters: FlightTransferFiltersState
  visibleTickets: number
  searchId: SearchId
  stop: boolean
  hasError: boolean
}

const initialState: TicketsState = {
  tickets: [],
  sortBy: "cheapest",
  filters: {
    all: false,
    noTransfers: true,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  visibleTickets: 5,
  searchId: "",
  stop: false,
  hasError: false,
}

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets: (state, action: PayloadAction<Array<Ticket>>) => {
      state.tickets = action.payload
    },
    setSortBy: (state, action: PayloadAction<TicketSortFilterKeys>) => {
      state.sortBy = action.payload
    },
    increaseVisibleTickets: (state) => {
      state.visibleTickets += 5
    },
    setFilterBy: (state, action: PayloadAction<FlightTransferFilterKeys>) => {
      const filter = action.payload

      if (filter === "all") {
        const newAll = !state.filters.all
        state.filters.all = newAll

        if (newAll) {
          state.filters.noTransfers = true
          state.filters.oneTransfer = true
          state.filters.twoTransfers = true
          state.filters.threeTransfers = true
        } else {
          state.filters.noTransfers = false
          state.filters.oneTransfer = false
          state.filters.twoTransfers = false
          state.filters.threeTransfers = false
        }
      } else {
        state.filters[filter] = !state.filters[filter]

        if (state.filters.all) {
          state.filters.all = false
        }

        const allChecked =
          state.filters.noTransfers &&
          state.filters.oneTransfer &&
          state.filters.twoTransfers &&
          state.filters.threeTransfers
        if (allChecked) {
          state.filters.all = true
        }
      }
    },
    setSearchId: (state, action: PayloadAction<SearchId>) => {
      state.searchId = action.payload
    },
    setStop: (state, action: PayloadAction<boolean>) => {
      state.stop = action.payload
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload
    },
  },
})

export const {
  setTickets,
  setSortBy,
  increaseVisibleTickets,
  setFilterBy,
  setSearchId,
  setStop,
  setHasError,
} = ticketsSlice.actions
export default ticketsSlice.reducer

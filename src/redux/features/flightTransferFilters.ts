import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type FlightTransferFiltersState = {
  all: boolean
  noTransfers: boolean
  oneTransfer: boolean
  twoTransfers: boolean
  threeTransfers: boolean
}

const initialState: FlightTransferFiltersState = {
  all: false,
  noTransfers: true,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
}

const flightTransferFiltersSlice = createSlice({
  name: "flightTransferFilters",
  initialState,
  reducers: {
    toggleAll(state) {
      const newAll = !state.all
      state.all = newAll

      if (newAll) {
        state.noTransfers = true
        state.oneTransfer = true
        state.twoTransfers = true
        state.threeTransfers = true
      } else {
        state.noTransfers = false
        state.oneTransfer = false
        state.twoTransfers = false
        state.threeTransfers = false
      }
    },
    toggleFilter(state, action: PayloadAction<Exclude<keyof FlightTransferFiltersState, "all">>) {
      const filter = action.payload
      state[filter] = !state[filter]

      if (state.all) {
        state.all = false
        return
      }

      const allChecked =
        state.noTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers
      if (allChecked) {
        state.all = true
      }
    },
  },
})

export const { toggleAll, toggleFilter } = flightTransferFiltersSlice.actions
export default flightTransferFiltersSlice.reducer

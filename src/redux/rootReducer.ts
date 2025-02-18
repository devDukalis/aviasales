import { combineReducers } from "@reduxjs/toolkit"

import flightTransferFilters from "@/redux/features/flightTransferFilters"
import tickets from "@/redux/features/tickets"

const rootReducer = combineReducers({
  flightTransferFilters: flightTransferFilters,
  tickets: tickets,
})

export default rootReducer

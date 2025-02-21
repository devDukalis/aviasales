import { combineReducers } from "@reduxjs/toolkit"

import tickets from "@/redux/features/tickets"
import aviasalesApi from "@/services/api"

const rootReducer = combineReducers({
  tickets,
  [aviasalesApi.reducerPath]: aviasalesApi.reducer,
})

export default rootReducer

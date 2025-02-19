import { combineReducers } from "@reduxjs/toolkit"

import tickets from "@/redux/features/tickets"

const rootReducer = combineReducers({
  tickets,
})

export default rootReducer

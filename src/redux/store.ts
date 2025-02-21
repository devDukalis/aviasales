import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "@/redux/rootReducer"
import aviasalesApi from "@/services/api"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(aviasalesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSelector } from "reselect"

import { RootState } from "@/redux/store"

const selectTickets = (state: RootState) => state.tickets.tickets
const selectSortBy = (state: RootState) => state.tickets.sortBy

export const selectSortedTickets = createSelector(
  [selectTickets, selectSortBy],
  (tickets, sortBy) => {
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
      sortedTickets.sort((a, b) => {
        const totalDurationA = a.segments.reduce((sum, segment) => sum + segment.duration, 0)
        const totalDurationB = b.segments.reduce((sum, segment) => sum + segment.duration, 0)
        const priceA = a.price
        const priceB = b.price

        return totalDurationA + priceA - (totalDurationB + priceB)
      })
    }

    return sortedTickets
  },
)

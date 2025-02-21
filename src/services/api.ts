import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Ticket } from "@/models"
import { generateUniqueKey } from "@/utils"

const aviasalesApi = createApi({
  reducerPath: "aviasalesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
  endpoints: (builder) => ({
    getSearchId: builder.query<string, void>({
      query: () => "/search",
      transformResponse: (response: { searchId: string }) => response.searchId,
    }),
    getTicketsBySearchId: builder.query<{ tickets: Ticket[]; stop: boolean }, string>({
      query: (searchId) => `/tickets?searchId=${searchId}`,
      transformResponse(response: { tickets: Ticket[]; stop: boolean }) {
        return {
          ...response,
          tickets: response.tickets.map((ticket) => ({
            ...ticket,
            id: generateUniqueKey(),
          })),
        }
      },
    }),
  }),
})

export default aviasalesApi
export const { useGetSearchIdQuery, useGetTicketsBySearchIdQuery } = aviasalesApi

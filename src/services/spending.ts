import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Create an API definition with two actions
 * @uses tags ["Spendings"] to cache / invalidat the data
 */
export const spendingApi = createApi({
  reducerPath: "spendingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shielded-depths-43687-bb049deacd16.herokuapp.com/",
  }),
  tagTypes: ["Spending"],
  endpoints: (builder) => ({
    getSpendingsList: builder.query({
      query: (arg) => {
        const { order = "", currency = "" } = arg;
        return {
          url: "spendings/",
          params: {
            // spendings/?order=spent_at&currency=HUF
            order,
            currency,
          },
        };
      },
      providesTags: ["Spending"],
    }),

    addSpending: builder.mutation({
      query: (body) => ({
        url: "spendings/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Spending"], // invalidate the cache, refetch
    }),
  }),
});

export const { useGetSpendingsListQuery, useAddSpendingMutation } = spendingApi;

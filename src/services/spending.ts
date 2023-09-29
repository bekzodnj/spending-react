import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spendingApi = createApi({
  reducerPath: "spendingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shielded-depths-43687-bb049deacd16.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getSpendingsList: builder.query({
      query: (arg) => {
        const { order = "" } = arg;
        console.log("order:", order);
        return {
          url: "spendings/",
          params: {
            order,
          },
        };
      },
    }),
  }),
});

export const { useGetSpendingsListQuery } = spendingApi;

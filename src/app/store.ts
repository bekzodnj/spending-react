import { configureStore } from "@reduxjs/toolkit";

// RTKQ specific imports
import { setupListeners } from "@reduxjs/toolkit/query";
import { spendingApi } from "../services/spending";

export const store = configureStore({
  reducer: {
    [spendingApi.reducerPath]: spendingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spendingApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

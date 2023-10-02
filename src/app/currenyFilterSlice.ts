import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrencyFilterState {
  value: string;
}

const initialState: CurrencyFilterState = {
  value: "ALL",
};

/**
 * Reducer slice for storing currently selected currency value:
 * e.g ALL || HUF || USD
 */
export const currencyFilterSlice = createSlice({
  name: "currencyFilter",
  initialState,
  reducers: {
    updateCurrencyFilter: (state, action: PayloadAction<string>) => {
      // Redux Toolkit helps write immumatable code that looks mutable like below (e.g. Immer)
      state.value = action.payload;
    },
  },
});

export const { updateCurrencyFilter } = currencyFilterSlice.actions;
export default currencyFilterSlice.reducer;

import { createSlice, isAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CurrencyFilterState {
  value: string;
}

const initialState: CurrencyFilterState = {
  value: "ALL",
};

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
import { useGetSpendingsListQuery } from "../../services/spending";
import { useState } from "react";
import { CurrencyFilter } from "../form/Filters";
import { SpendingCard } from "./SpendingCardItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

interface Spending {
  id: number;
  amount: number;
  description: string;
  spent_at: string;
  key: number;
  currency: string;
}

export function SpendingsList() {
  const [orderBy, setOrderBy] = useState("-spent_at");
  const selectedCurrency = useSelector(
    (state: RootState) => state.currencyFilterReducer.value,
  );

  // fetch the data initially
  // re-fetches when query params change
  const { data, error, isLoading, isFetching } = useGetSpendingsListQuery({
    order: orderBy,
    currency: selectedCurrency,
  });

  return (
    <section>
      <div className="flex justify-between">
        <select
          className="rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value="-spent_at">Sort by Date descending (auto)</option>
          <option value="spent_at">Sort by Date ascending</option>
          <option value="-amount">Sort by Amount descending</option>
          <option value="amount">Sort by Amount ascending</option>
        </select>

        <CurrencyFilter />
      </div>

      <div>
        {error ? (
          <p>
            <>Oh no, there was an error</>
          </p>
        ) : isLoading || isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          <>
            {data.map((spending: Spending) => (
              <SpendingCard key={spending.id} spending={spending} />
            ))}
          </>
        ) : null}
      </div>
    </section>
  );
}

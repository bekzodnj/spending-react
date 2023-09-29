import { useGetSpendingsListQuery } from "../../services/spending";
import { useState } from "react";

interface Spending {
  id: number;
  amount: number;
  description: string;
  spent_at: string;
}

export function SpendingsList() {
  const [orderBy, setOrderBy] = useState("-spent_at");
  const { data, error, isLoading, isFetching } = useGetSpendingsListQuery({
    order: orderBy,
  });

  return (
    <div>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5"
        value={orderBy}
        onChange={(e) => setOrderBy(e.target.value)}
      >
        <option value="-spent_at">Sort by Date descending (auto)</option>
        <option value="spent_at">Sort by Date ascending</option>
        <option value="-amount">Sort by Amount descending</option>
        <option value="amount">Sort by Amount ascending</option>
      </select>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading || isFetching ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((spending: Spending) => (
            <div key={spending.id} className="border mb-1">
              <h2>{spending.description}</h2>
              <p>{spending.spent_at}</p>
              <p>{spending.amount}</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

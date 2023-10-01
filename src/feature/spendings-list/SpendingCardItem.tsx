import { ReactNode } from "react";
import { IconClose } from "../../assets/IconClose";
import { IconEdit } from "../../assets/IconEdit";
import {
  getFormattedAmount,
  getFormattedDate,
  getFormattedTime,
} from "./utils/utils";

interface Spending {
  id: number;
  amount: number;
  description: string;
  spent_at: string;
  key: number;
  currency: string;
}

interface ISpending {
  spending: Spending;
}

export function SpendingCard({
  spending: { description, amount, currency, spent_at },
}: ISpending) {
  return (
    <div className="mb-1 mt-2 flex items-center justify-between rounded-lg border bg-white p-3 shadow-sm">
      <div className="flex gap-3">
        <div
          data-label="icon"
          className="inline-block self-start rounded-lg bg-[#d1e7fb] p-2 px-4 text-2xl font-normal text-[#307ccc]"
        >
          <span>$</span>
        </div>

        <div data-label="spending-info">
          <h2 className="font-bold text-[#2e2e2e]">{description}</h2>
          <p className="text-sm text-[#adadad]">
            {getFormattedTime(spent_at)} -{" "}
            <span>{getFormattedDate(spent_at)}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <p className="font-semibold">
            {getFormattedAmount(amount.toString(), currency)}
          </p>
        </div>

        <Button>
          <IconEdit width="1.2em" height="1.2em" />
        </Button>

        <Button
          onClick={() => confirm(`Do you really want to delete ${description}`)}
        >
          <IconClose />
        </Button>
      </div>
    </div>
  );
}

export function Button(props: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className="rounded-lg bg-[#f5f7fd] p-2 text-[#b4b8c3] hover:bg-gray-200 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {props.children}
    </button>
  );
}

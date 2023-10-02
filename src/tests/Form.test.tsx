import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpendingCard } from "../feature/spendings-list/SpendingCardItem";

describe("Spending Item test", () => {
  test("Should Spending Item", () => {
    const spendingItemInfo = {
      id: 100,
      description: "Test item",
      amount: 1000,
      spent_at: new Date().toISOString(),
      key: 999,
      currency: "HUF",
    };

    render(<SpendingCard spending={spendingItemInfo} />);
    const formElement = screen.getByTestId("spending-info");
    expect(formElement).toBeInTheDocument();
  });

  test("should the correct currency", () => {
    const spendingItemInfo = {
      id: 100,
      description: "Test item",
      amount: 1000,
      spent_at: new Date().toISOString(),
      key: 999,
      currency: "HUF",
    };

    render(<SpendingCard spending={spendingItemInfo} />);
    expect(screen.getByText(/HUF/i)).toBeDefined();
  });
});

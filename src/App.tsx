import { Form } from "./feature/form/Form";
import { SpendingsList } from "./feature/spendings-list/SpendingsList";

/**
 * App structure:
 *
 * --- Form:
 * --- SpendingList:
 * ----- SortDropdown
 * ----- CurrencyFilters
 * ----- SpengingCardItem
 *
 */
function App() {
  return (
    <>
      <div className="mx-auto min-h-screen rounded-md bg-[#f2f1f6] p-4 sm:w-3/4 sm:px-10 sm:py-4">
        <Form />
        <SpendingsList />
      </div>
    </>
  );
}

export default App;

import { Form } from "./feature/form/Form";
import { SpendingsList } from "./feature/spendings-list/SpendingsList";

function App() {
  return (
    <>
      <div className="mx-auto rounded-md bg-[#f2f1f6] px-10 py-4 sm:w-4/6">
        <Form />
        <hr />
        <SpendingsList />
      </div>
    </>
  );
}

export default App;

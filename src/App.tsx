import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "./feature/form/Form";
import { SpendingsList } from "./feature/spendings-list/SpendingsList";
import { CurrencyFilter } from "./feature/form/Filters";

function App() {
  return (
    <>
      <div className="bg-[#f2f1f6] w-2/3 mx-auto p-4">
        <Form />
        <hr />
        <CurrencyFilter />
        <SpendingsList />
      </div>
    </>
  );
}

export default App;

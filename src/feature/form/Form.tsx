import { useForm, SubmitHandler } from "react-hook-form";
import { useAddSpendingMutation } from "../../services/spending";

type Inputs = {
  description: string;
  amount: string;
  currency: string;
  spent_at: string;
};

/**
 * This widget handles submitting the form
 * @uses addSpending() Redux action
 *
 * @returns Form element
 */
export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [addSpending, { isLoading }] = useAddSpendingMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.spent_at = new Date().toISOString();
    await addSpending(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 flex flex-col items-start justify-between gap-1 sm:flex-row sm:gap-3"
      >
        <div className="flex grow flex-col items-start self-stretch">
          <input
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-gray-900 shadow focus:border-blue-500 focus:ring-blue-500"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">The description is required</span>
          )}
        </div>

        <div className="basis-30 flex flex-col items-start self-stretch sm:grow-0">
          <input
            className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-gray-900 shadow focus:border-blue-500 focus:ring-blue-500"
            placeholder="0"
            {...register("amount", {
              required: true,
              valueAsNumber: true,
              validate: (value) => Number(value) > 0,
            })}
          />
          {errors.amount && (
            <span className="text-red-500">
              Required field, should be number
            </span>
          )}
        </div>

        <select
          {...register("currency")}
          className="rounded-md border border-gray-300 bg-gray-50 p-3 text-sm font-bold text-gray-900 shadow focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="USD">USD</option>
          <option value="HUF">HUF</option>
        </select>

        <input
          type="submit"
          className="text-md bg-blue-10 mb-2 mr-2 block rounded-lg bg-[#0bb783] px-5 py-2.5 font-bold text-white shadow hover:bg-[#48a88b] focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-[#439b81]"
          value={isLoading ? "Saving" : "Save"}
        />
      </form>
    </>
  );
}

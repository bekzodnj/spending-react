import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  description: string;
  amount: string;
  currency: string;
};

export function Form() {
  /** colors
 * 
 * 
 / #0bb783 - green
  // #d1e7fb - light blue text icon bg
  // #307ccc - dark blue text icon text
  // light gray - #f2f1f6 background
  // #f5f7fd - light gray icon bg
  // #b4b8c3 - light gray text
 */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start">
            <input
              className="border border-gray-400 mr-1 flex-grow-0"
              defaultValue="product"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">The description is required</span>
            )}
          </div>

          <div className="flex flex-col items-start">
            <input
              className="border border-gray-400 mr-1"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-red-500">The amount value is required</span>
            )}
          </div>

          <select {...register("currency")}>
            <option value="USD">USD</option>
            <option value="HUF">HUF</option>
          </select>

          <input type="submit" className="block" />
        </form>
      </div>
    </>
  );
}

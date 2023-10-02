import { updateCurrencyFilter } from "../../app/currenyFilterSlice";
import type { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";

const BTNS = ["ALL", "HUF", "USD"];

/**
 *  This widget handles Currency Select Filter buttons.
 *  e.g "ALL" || "HUF" || "USD"
 *  @uses updateCurrencyFilter() Redux action
 *
 * @returns Array of Buttons inside the div
 */
export function CurrencyFilter() {
  const activeBtn = useSelector(
    (state: RootState) => state.currencyFilterReducer.value,
  );
  const dispatch = useDispatch();

  const handleBtnClick = (btnName: string) => {
    dispatch(updateCurrencyFilter(btnName));
  };
  const activeBtnClass = " bg-blue-100 text-[#307ccc] font-bold";

  return (
    <div>
      {BTNS.map((btnName) => (
        <button
          className={`text-md mb-2 mr-2 rounded-lg px-5 py-2 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            btnName === activeBtn ? activeBtnClass : " bg-white"
          }`}
          key={btnName}
          onClick={() => handleBtnClick(btnName)}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
}

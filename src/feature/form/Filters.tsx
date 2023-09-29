import { useState } from "react";

export function CurrencyFilter() {
  const [activeBtn, setActiveBtn] = useState("ALL");

  const handleBtnClick = (btnName: string) => {
    setActiveBtn(btnName);
  };

  const activeBtnClass = " bg-[#d1e7fb] font-bold";
  const btns = ["ALL", "HUF", "USD"];
  return (
    <>
      {btns.map((btnName) => (
        <button
          className={`py-2 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg  hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ${
            btnName === activeBtn ? activeBtnClass : ""
          }`}
          key={btnName}
          onClick={() => handleBtnClick(btnName)}
        >
          {btnName}
        </button>
      ))}

      {/* <button
        type="button"
        className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-[#307ccc] focus:outline-none bg-[#d1e7fb] rounded-lg  hover:bg-blue-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        ALL
      </button>

      <button className="py-2 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg  hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
        HUF
      </button>
      <button className="py-2 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg  hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
        USD
      </button> */}
    </>
  );
}

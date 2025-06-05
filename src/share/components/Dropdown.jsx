import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Dropdown({ optionsList, text }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex relative flex-row items-center cursor-pointer justify-between gap-2"
    >
      <span>More Options</span>
      <KeyboardArrowDownIcon />
      {isVisible && (
        <>
          <div className="h-10 min-h-10 bg-transparent absolute top-0 w-full"></div>
          <div className="absolute py-2 z-10 top-10 bg-white border border-red-500 rounded-sm w-auto whitespace-nowrap min-w-full">
            {optionsList.map((option, index) => (
              <div
                className="py-2 px-3 w-full hover:bg-red-100 duration-100 text-black"
                key={index}
                onClick={option.handler}
              >
                {option.text}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

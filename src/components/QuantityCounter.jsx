import React from "react";

const QuantityCounter = ({
  quantity,
  handleMinusQuantity,
  handlePlusQuantity,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-thin mr-4">Quantity : </h4>
      </div>
      <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center gap-x-1.5">
          <button
            type="button"
            className={`size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ${
              quantity === 1 ? "cursor-not-allowed" : ""
            }`}
            onClick={handleMinusQuantity}
            disabled={quantity === 1}
            aria-label="Decrease"
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <span className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0">
            {quantity}
          </span>
          <button
            type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            onClick={handlePlusQuantity}
            aria-label="Increase"
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;

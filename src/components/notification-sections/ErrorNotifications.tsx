import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const DEFAULT_NUMBER_RENDER = 2;

const ErrorNotifications = () => {
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_NUMBER_RENDER);

  const errors = [
    {
      details: "Error 1: check leakage",
      date: "12/12/2023",
      status: "success",
    },
    {
      details: "Error 2: usage bundles depleted",
      date: "24/12/2023",
      status: "pending",
    },
    {
      details: "Error 2: usage bundles depleted",
      date: "10/12/2023",
      status: "success",
    },
    { details: "Error 1: check leakage", date: "12/12/2023", status: "error" },
    {
      details: "Error 1: check leakage",
      date: "12/12/2023",
      status: "success",
    },
  ];

  const showmore = () => {
    setItemsToShow(errors.length);
  };

  const showless = () => {
    setItemsToShow(DEFAULT_NUMBER_RENDER);
  };

  return (
    <>
      <div className="text-slate-700 flex flex-row items-center justify-between w-full px-2">
        <p>Errors</p>
        <div>
          <button
            onClick={itemsToShow <= DEFAULT_NUMBER_RENDER ? showmore : showless}
            className="flex bg-white rounded-full p-2 cursor-pointer"
          >
            {itemsToShow <= DEFAULT_NUMBER_RENDER ? (
              <EllipsisHorizontalIcon height={16} width={16} />
            ) : (
              <XMarkIcon height={16} width={16} />
            )}
          </button>
        </div>
      </div>
      {errors.slice(0, itemsToShow).map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 border-l-8 border-red-600 "
        >
          {item.details}
        </div>
      ))}
    </>
  );
};

export default ErrorNotifications;

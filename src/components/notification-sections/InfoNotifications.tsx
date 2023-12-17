import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {};

const DEFAULT_NUMBER_RENDER = 2;

const InfoNotifications = (props: Props) => {
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_NUMBER_RENDER);

  const infos = [
    {
      details: "TIP: Turn off tap when not in use",
      date: "12/12/2023",
      status: "success",
    },
    {
      details: "TIP: Take short showers to save water",
      date: "24/12/2023",
      status: "pending",
    },
    {
      details: "TIP: Collect rain water for gardening or landscaping",
      date: "10/12/2023",
      status: "success",
    },
    {
      details: "TIP: Repair dripping faucets",
      date: "12/12/2023",
      status: "error",
    },
    {
      details: "TIP: Furn off faucets when brushing teeth",
      date: "12/12/2023",
      status: "success",
    },
  ];

  const showmore = () => {
    setItemsToShow(infos.length);
  };

  const showless = () => {
    setItemsToShow(DEFAULT_NUMBER_RENDER);
  };
  return (
    <>
      <div className="text-slate-700 flex flex-row items-center justify-between w-full px-2">
        <p>Info</p>
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
      {infos.slice(0, itemsToShow).map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 border-l-8 border-blue-600 "
        >
          {item.details}
        </div>
      ))}
    </>
  );
};

export default InfoNotifications;

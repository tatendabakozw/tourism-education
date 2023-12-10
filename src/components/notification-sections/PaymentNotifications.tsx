import React, { useState } from "react";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";

const DEFAULT_NUMBER_RENDER = 2;

type Props = {};

const PaymentNotifications = (props: Props) => {
  const [itemsToShow, setItemsToShow] = useState(DEFAULT_NUMBER_RENDER);

  const payments = [
    { details: "Payment Done", date: "12/12/2023", status: "success" },
    { details: "Payment Pending", date: "24/12/2023", status: "pending" },
    { details: "Payment Done", date: "10/12/2023", status: "success" },
    { details: "Payment Refused", date: "12/12/2023", status: "error" },
    { details: "Payment Done", date: "12/12/2023", status: "success" },
  ];

  const showmore = () => {
    setItemsToShow(payments.length);
  };

  const showless = () => {
    setItemsToShow(DEFAULT_NUMBER_RENDER);
  };
  return (
    <>
      <div className="text-slate-700 flex flex-row items-center justify-between w-full px-2">
        <p>Payments</p>
        <div>
          <div
            onClick={itemsToShow <= DEFAULT_NUMBER_RENDER ? showmore : showless}
            className="flex bg-white rounded-full p-2 cursor-pointer"
          >
            {itemsToShow <= DEFAULT_NUMBER_RENDER ? (
              <EllipsisHorizontalIcon height={16} width={16} />
            ) : (
              <XMarkIcon height={16} width={16} />
            )}
          </div>
        </div>
      </div>
      {payments.slice(0, itemsToShow).map((item, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg p-4 border-l-8 border-green-600"
        >
          <div
            className={`${
              item.status === "success"
                ? "bg-green-600 "
                : item.status === "pending"
                ? "bg-blue-700 "
                : "bg-red-700 "
            } absolute p-1 w-1 right-5 top-5 rounded-full`}
          ></div>
          <p className="text-lg font-bold text-slate-900">{item.details}</p>
          <p className="text-sm text-slate-400 font-medium">{item.date}</p>
        </div>
      ))}
    </>
  );
};

export default PaymentNotifications;

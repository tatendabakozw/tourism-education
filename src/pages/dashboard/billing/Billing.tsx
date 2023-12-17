import DashboardLayout from "@layouts/DashboardLayout";
import visa from "@assets/visa.png";
import mastercard from "@assets/card.png";
import { EllipsisHorizontalIcon, PlusIcon } from "@heroicons/react/24/outline";

type Props = {};

function Billing({}: Props) {
  return (
    <DashboardLayout>
      <div className="flex max-w-7xl w-full mx-auto flex-col space-y-6 px-4 py-16">
        <p className="text-xl font-bold text-slate-900">Plan & Billing</p>
        <div className="flex flex-col bg-white rounded-xl divide-y-[1px] divide-slate-200">
          <div className="grid grid-cols-3 gap-4 items-center p-8 w-full ">
            <div className="flex flex-col col-span-1">
              <p className="text-sm text-slate-400">Plan</p>
              <p className="text-xl font-semibold">Water Payment</p>
            </div>
            <div className="flex flex-col col-span-1">
              <p className="text-sm text-slate-400">Payment</p>
              <p className="text-xl font-semibold">
                $29{" "}
                <span className="text-sm text-slate-700 font-normal">
                  per month
                </span>
              </p>
            </div>
            <div className="flex flex-col col-span-1">
              <p className="text-sm text-slate-700">Cancel subscription</p>
              {/* <p className="text-xl font-semibold">Water Payment</p> */}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center p-8 w-full ">
            <div className="flex flex-col col-span-1">
              <p className="text-sm text-slate-400">Plan</p>
              <p className="text-xl font-semibold">Water Payment</p>
            </div>
            <div className="flex flex-col col-span-1">
              <p className="text-sm text-slate-400">Payment</p>
              <p className="text-xl font-semibold">
                $29{" "}
                <span className="text-sm text-slate-700 font-normal">
                  per month
                </span>
              </p>
            </div>
            <div className="flex flex-col col-span-1">
              <p className="text-sm text-slate-700">Cancel subscription</p>
              {/* <p className="text-xl font-semibold">Water Payment</p> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-xl p-8 space-y-6 ">
          <p className=" text-slate-900 font-medium">Payment Methods</p>
          <div className="border border-slate-200 rounded-lg divide-y-[1px] divide-slate-200">
            <div className="py-4 px-6 flex flex-row items-center space-x-4">
              <div className="h-4 w-4 border-4 border-blue-600 rounded-full"></div>
              <div className="py-[1px] px-2 rounded-lg border border-slate-200">
                <img src={visa} alt="visa icon" className="w-8" />
              </div>
              <div className="flex flex-col flex-1 space-y-1">
                <p className="flex flex-row text-xs font-medium">
                  {[1, 2, 3, 4].map((item) => (
                    <span>&bull;</span>
                  ))}
                  <div className="pr-1"></div>
                  {[1, 2, 3, 4].map((item) => (
                    <span>&bull;</span>
                  ))}
                  <div className="pr-1"></div>
                  {[1, 2, 3, 4].map((item) => (
                    <span>&bull;</span>
                  ))}
                  <div className="pr-1"></div>
                  9373
                </p>
                <p className="text-xs font-medium text-slate-400">
                  Expiry 3/2025
                </p>
              </div>
              <EllipsisHorizontalIcon
                height={20}
                width={20}
                className="text-slate-700"
              />
            </div>
            <div className="py-4 px-6 flex flex-row items-center space-x-4">
              <div className="h-4 w-4 border border-slate-500 rounded-full"></div>
              <div className="py-[1px] px-2 rounded-lg border border-slate-200">
                <img src={mastercard} alt="visa icon" className="w-8" />
              </div>
              <div className="flex flex-col flex-1 space-y-1">
                <p className="flex flex-row text-xs font-medium">
                  {[1, 2, 3, 4].map((item) => (
                    <span>&bull;</span>
                  ))}
                  <div className="pr-1"></div>
                  {[1, 2, 3, 4].map((item) => (
                    <span>&bull;</span>
                  ))}
                  <div className="pr-1"></div>
                  {[1, 2, 3, 4].map((item) => (
                    <span>&bull;</span>
                  ))}
                  <div className="pr-1"></div>
                  9373
                </p>
                <p className="text-xs font-medium text-slate-400">
                  Expiry 3/2025
                </p>
              </div>
              <EllipsisHorizontalIcon
                height={20}
                width={20}
                className="text-slate-700"
              />
            </div>
          </div>
          <div className="flex">
            <div className="border flex flex-row items-center space-x-2 py-2 px-3 border-slate-200">
              <PlusIcon height={16} width={16} />
              <p className="text-sm ">New Payment method</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Billing;

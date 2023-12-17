import AdminHomeGraphs from "@components/graphs/AdminHomeGraphs";
import WaterCotrol from "@components/water-control/WaterCotrol";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import { useState } from "react";

type Props = {};

const WaterWorksDashboard = (props: Props) => {
  const [consumption_mode, setConsumptionMode] = useState("normal");

  const consumption_modes = [
    { name: "economical" },
    { name: "normal" },
    { name: "extended" },
  ];
  return (
    <AdminDashboardLayout>
      <div className="max-w-7xl grid grid-cols-3 mx-auto w-full py-8 gap-4 h-full">
        {/* left side */}
        <div className="col-span-2  ">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 border border-slate-200/70 rounded-xl p-4 bg-white flex flex-col">
              <p>Temperature</p>
              <p className="text-7xl font-medium pt-8">17</p>
            </div>
            <div className="col-span-1 border border-slate-200/70 rounded-xl p-4 bg-white flex flex-col">
              <p>Pressure</p>
              <p className="text-7xl font-medium pt-8">50 PSL</p>
            </div>
            <div className="col-span-1 border border-slate-200/70 rounded-xl p-4 bg-white flex flex-col">
              <p>Water Quality</p>
              <p className="text-7xl font-medium pt-8">20 TSD</p>
            </div>
            <div className="col-span-3 border border-slate-200/70 rounded-xl p-4 bg-white h-full">
              <div className="flex flex-row items-center justify-between">
                <p className="text-lg font-medium text-slate-700">
                  CONSUMPTION
                </p>
                <div>
                  <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Main Valve
                  </label>
                </div>
              </div>
              <AdminHomeGraphs />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="col-span-1 space-y-4">
          <div className="border border-slate-200/70 rounded-xl p-4 bg-white flex flex-col">
            <p className="uppercase text-xl">Consumption mode</p>
            {/* <p className="text-7xl font-medium pt-8">20 TSD</p> */}
            <div className="flex flex-row items-center justify-between pt-20">
              {consumption_modes.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setConsumptionMode(item.name)}
                  className={`${
                    item.name === consumption_mode
                      ? "border border-slate-200 bg-slate-200 "
                      : " "
                  } text-sm  font-medium text-slate-700 uppercase p-2 rounded-full`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="border border-slate-200/70 rounded-xl p-4 bg-white flex flex-col">
            <div className="flex space-x-2">
              <p className="uppercase text-xl">Leakages</p>{" "}
              <p className="bg-green-100 rounded-full text-xs text-green-600 px-4 py-2">
                Healthy
              </p>
            </div>
            <div className="flex pt-8">
              <p className="text-7xl font-medium border-4 border-blue-500 rounded-full px-6 py-8">
                2%
              </p>
            </div>
            <p className="text-sm pt-20 font-medium">NORMAL</p>
          </div>
          <WaterCotrol />
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default WaterWorksDashboard;

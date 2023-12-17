import { LineGraph } from "@components/graphs/LineGraph";
import { DoughnutChart } from "@components/graphs/DoughnutChart";
import { HomeIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "@layouts/DashboardLayout";
import React from "react";
import { BarChart } from "@components/graphs/BarChart";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="flex max-w-7xl w-full mx-auto px-4 py-16 space-y-8 flex-col">
        <div className="grid grid-cols-4 gap-8 w-full">
          <div className="col-span-2 bg-white p-4 rounded-lg">
            <LineGraph />
          </div>
          <div className="col-span-2 p-4 bg-white grid grid-cols-2 gap-4 rounded-lg">
            <div className="col-span-1">
              <DoughnutChart />
            </div>
            <div className="col-span-1 grid items-center">
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-[#0284c7] text-white p-2 rounded-full">
                  <HomeIcon height={24} width={24} />
                </div>
                <p>Toilet</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-[#0e7490] p-2 rounded-full text-white">
                  <HomeIcon height={24} width={24} />
                </div>
                <p>Kitchen</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-[#67e8f9] p-2 rounded-full">
                  <HomeIcon height={24} width={24} />
                </div>
                <p>Bathroom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-3 bg-white p-4 rounded-lg">
            <BarChart />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

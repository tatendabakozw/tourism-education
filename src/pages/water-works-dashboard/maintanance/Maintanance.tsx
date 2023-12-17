import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import React from "react";

type Props = {};

const Maintanance = (props: Props) => {
  return (
    <AdminDashboardLayout>
      <div className="flex max-w-7xl w-full mx-auto py-16 space-y-4 flex-col">
        <p className="text-lg font-semibold text-slate-900">Meter health</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 border border-slate-200/80 rounded-lg bg-white flex flex-col space-y-2">
            <p className="text-slate-900 font-semibold text-lg">83002</p>
            <p className="text-sm text-slate-500 font-medium">Total Members</p>
          </div>
          <div className="p-4 border border-slate-200/80 rounded-lg bg-white flex flex-col space-y-2">
            <p className="text-slate-900 font-semibold text-lg">4</p>
            <p className="text-sm text-slate-500 font-medium">
              Need replacement
            </p>
          </div>
          <div className="p-4 border border-slate-200/80 rounded-lg bg-white flex flex-col space-y-2">
            <p className="text-slate-900 font-semibold text-lg">15</p>
            <p className="text-sm text-slate-500 font-medium">Flagged Meters</p>
          </div>
          <div className="p-4 border border-slate-200/80 rounded-lg bg-white flex flex-col space-y-2">
            <p className="text-slate-900 font-semibold text-lg">6</p>
            <p className="text-sm text-slate-500 font-medium">
              Scheduled Visits
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 space-y-4">
          <p className="text-lg font-semibold text-slate-900">Manage Meters</p>
          <div className="p-2 rounded-xl border  border-slate-200/80 grid grid-cols-6 text-sm font-semibold text-slate-900">
            <p>Account name</p>
            <p>meter id</p>
            <p>meter status</p>
            <p>consumption</p>
            <p>address</p>
            <p>action</p>
          </div>
          {[1,2,3,4,5].map((item, index)=>(
             <div key={index} className="p-2 rounded-xl grid grid-cols-6 text-sm text-slate-500">
             <p>Account name</p>
             <p>meter id</p>
             <p>meter status</p>
             <p>2gal/hr - $15</p>
             <p>address</p>
             <div className="flex flex-row text-xs font-medium items-center space-x-2">
              <button className="bg-green-600 text-white rounded p-1 hover:bg-green-600">ON</button>
              <button className="bg-red-600 text-white rounded p-1 hover:bg-red-600">OFF</button>
             </div>
           </div>
          ))}
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default Maintanance;

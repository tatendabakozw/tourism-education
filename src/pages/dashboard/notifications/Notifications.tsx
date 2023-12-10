import PaymentNotifications from "@components/notification-sections/PaymentNotifications";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import DashboardLayout from "@layouts/DashboardLayout";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto w-full py-16">
        <>
          <PaymentNotifications />
        </>
        <div className="text-slate-700 flex flex-row items-center justify-between w-full px-2">
          <p>Errors</p>
          <div>
            <div className="flex bg-white rounded-full p-2 cursor-pointer">
              <EllipsisHorizontalIcon height={16} width={16} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-8 border-red-600 ">
          sadjhlkds
        </div>
        <div className="bg-white rounded-lg p-4 border-l-8 border-red-600">
          sadjhlkds
        </div>
        <div className="text-slate-700 flex flex-row items-center justify-between w-full px-2">
          <p>Info</p>
          <div>
            <div className="flex bg-white rounded-full p-2 cursor-pointer">
              <EllipsisHorizontalIcon height={16} width={16} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-8 border-blue-600 ">
          sadjhlkds
        </div>
        <div className="bg-white rounded-lg p-4 border-l-8 border-blue-600">
          sadjhlkds
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;

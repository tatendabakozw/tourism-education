import PaymentNotifications from "@components/notification-sections/PaymentNotifications";
import ErrorNotifications from "@components/notification-sections/ErrorNotifications";
import InfoNotifications from "@components/notification-sections/InfoNotifications";
import DashboardLayout from "@layouts/DashboardLayout";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto w-full py-16">
        <>
          <PaymentNotifications />
        </>
        <>
          <ErrorNotifications />
        </>

        <>
          <InfoNotifications />
        </>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;

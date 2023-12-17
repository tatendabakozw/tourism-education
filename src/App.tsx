import Notifications from "@pages/dashboard/notifications/Notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/dashboard/Dashboard";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";
import Billing from "@pages/dashboard/billing/Billing";
import WaterWorksDashboard from "@pages/water-works-dashboard/WaterWorksDashboard";
import Maintanance from "@pages/water-works-dashboard/maintanance/Maintanance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-admin" element={<WaterWorksDashboard />} />
        <Route path="/maintanance" element={<Maintanance />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

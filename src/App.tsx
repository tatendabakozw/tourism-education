import Notifications from "@pages/dashboard/notifications/Notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "@pages/dashboard/Dashboard";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

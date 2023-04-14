import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";
import Dashboard from "@pages/dashboard/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

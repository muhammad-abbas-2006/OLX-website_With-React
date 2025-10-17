import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import DashboardLayout from "../Components/Dashboard/Dashboard";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard routes */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

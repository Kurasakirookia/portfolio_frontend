// src/components/AdminRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const AdminRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // check role from token (you must include it in backend while generating JWT)
    if (decoded.role !== "admin") {
      return <Navigate to="/login" replace />;
    }

    // Token expiry check (optional)
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }

    return <Outlet />; // renders child routes
  } catch (error) {
    console.error("Invalid token", error);
    return <Navigate to="/login" replace />;
  }
};

export default AdminRoute;

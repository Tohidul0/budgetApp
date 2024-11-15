import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import Home from "./Home";

function PrivateRoute(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? <Outlet /> : <Navigate to="/"></Navigate>;
}

export default PrivateRoute;

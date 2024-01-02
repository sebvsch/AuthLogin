import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function PrivateRoutesAfterAuth() {

  const auth = useAuth()

  return !auth.Authentication ? <Outlet /> : <Navigate to="/dashboard" />
}
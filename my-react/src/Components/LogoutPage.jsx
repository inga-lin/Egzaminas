import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logout } from '../Functions/auth';
//505 reikalingas admino paskyrai su slaptazodziu
function LogoutPage() {
    useEffect(() => logout(), []);
    return (
      <Navigate to="/login" replace />
    )
  }

export default LogoutPage;
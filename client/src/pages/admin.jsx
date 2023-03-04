import AdminLogin from "@/components/admin/AdminLogin";
import AdminPanel from "@/components/admin/AdminPanel";
import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const { admin } = useSelector((state) => state.admin);

  return admin ? <AdminPanel /> : <AdminLogin />;
};

export default Admin;

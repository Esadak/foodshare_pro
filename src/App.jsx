import React from "react";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import DeleteAccount from "@/pages/DeleteAccount";

export default function App() {
  const path = window.location.pathname;

  if (path === "/privacy") {
    return <Privacy />;
  }
  
  if (path === "/terms") {
    return <Terms />;
  }

  if (path === "/delete-account") {
    return <DeleteAccount />;
  }

  return <Home />;
}
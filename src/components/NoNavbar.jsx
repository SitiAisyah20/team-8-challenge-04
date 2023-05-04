import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NoNavbar({ children }) {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default NoNavbar;

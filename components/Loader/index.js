"use client";
import { useState, useEffect } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return !loading && <>{children}</>;
};

export default Loader;

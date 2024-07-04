"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [spinnerIndex, setSpinnerIndex] = useState<number>(0);
  const spinnerChars = ["|", "/", "-", "\\"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinnerIndex((prevIndex) => (prevIndex + 1) % spinnerChars.length);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return <span>{spinnerChars[spinnerIndex]}</span>;
};

export default Loader;

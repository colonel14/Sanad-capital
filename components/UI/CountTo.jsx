"use client";

import { useEffect, useState } from "react";

export default function CountTo({ start, end }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>{count <= end ? count : end}</div>;
}

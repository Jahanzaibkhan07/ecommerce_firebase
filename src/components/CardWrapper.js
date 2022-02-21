import React from "react";
export default function CardWrapper({ children, padding, margin }) {
  return (
    <div
      className={`rounded-lg bg-white shadow-md  border border-gray-200 ${
        padding ? "px-8 py-8" : ""
      } ${margin ? "m-8" : ""}`}
    >
      {children}
    </div>
  );
}

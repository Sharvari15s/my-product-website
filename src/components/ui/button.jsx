import React from "react";

export default function Button({ children, onClick, type = "button", className = "" }) {
  const base = "bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:opacity-95";
  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}

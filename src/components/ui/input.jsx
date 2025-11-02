import React from "react";

export default function Input({ name, placeholder, value, onChange, type = "text" }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
    />
  );
}

import React from "react";

export default function Card({ title, body }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">💠</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{body}</p>
        </div>
      </div>
    </div>
  );
}

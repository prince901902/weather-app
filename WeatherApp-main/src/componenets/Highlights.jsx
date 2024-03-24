import React from "react";

function Highlights({ stats }) {
  return (
    <div className="p-6 text-gray-200 flex flex-col justify-start items-center rounded-lg shadow-md">
      <h2 className="text-black text-xl font-semibold">{stats.title}</h2>
      <div className="mt-4 flex items-center">
        <div className="rounded-full bg-gray-700 w-12 h-12 flex items-center justify-center">
          <span className="text-2xl font-bold">{stats.value}</span>
        </div>
        <span className="text-lg ml-2 text-black">{stats.unit}</span>
      </div>
      {stats.direction && (
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3 9l-3 3M20 12l-3-3-3 3M10 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V6a2 2 0 012-2z"
            />
          </svg>
          <div className="text-sm ml-2 text-black">{stats.direction}</div>
        </div>
      )}

      {stats.title === "Humidity" && (
        <div className="w-full mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Highlights;

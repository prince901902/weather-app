import React, { useState } from "react";

function Temperature({ setCity, stats, city }) {
  const [inputChange, setInputChange] = useState(city);
  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputChange);
  };

  return (
    <>
      <div className="flex align-middle justify-center">
        <div className=" p-4 rounded-lg shadow-md text-white backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between mb-4"
          >
            <input
              type="text"
              placeholder="Enter City Name"
              value={inputChange}
              onChange={handleChange}
              className="bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-gray-400 px-4 py-2 rounded-lg w-full mr-2"
            />
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="backdrop-blur-sm shadow-md mt-4 pb-4 ">
        <div className="flex justify-center">
          {stats.isDay !== 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 text-yellow-300 mt-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-slate-700 mt-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </div>

        <div className="flex justify-center items-center text-slate-700 mt-8">
          <p className="font-semibold text-[55px] ">
            {stats.temp}
            <span className="text-[33px]">°C</span>
          </p>
        </div>

        <div className="flex justify-center text-slate-700 mt-8 text-[25px] ">
          {stats.condition}
        </div>

        <div className="flex justify-center text-slate-700 mt-5 text-[15px]">
          Today &#183; {stats.time} | {stats.location}
        </div>
      </div>
    </>
  );
}

export default Temperature;

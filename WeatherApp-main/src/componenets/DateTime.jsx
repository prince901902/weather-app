import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      console.log(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5 w-64 rounded-lg p-4 shadow-md backdrop-blur-sm">
      <p className="text-xl font-bold mb-2">
        {currentTime.toLocaleTimeString()}
      </p>
      <p className="text-base">{currentTime.toDateString()}</p>
    </div>
  );
};

export default DateTime;

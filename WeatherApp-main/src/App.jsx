import React, { useEffect, useState } from "react";
import Temperature from "./componenets/Temperature";
import Highlights from "./componenets/Highlights";
import bgImage from "./bg-img.jpg";
import DateTime from "./componenets/DateTime";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchCityName(latitude, longitude);
      },
      (error) => {
        console.error("Error getting user's location:", error);
        setCity("New Delhi");
      }
    );
  }, []);

  const fetchCityName = (latitude, longitude) => {
    const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get city name");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCity(data.city);
      })
      .catch((error) => {
        console.error("Error fetching city name:", error);
        setCity("New Delhi");
      });
  };

  useEffect(() => {
    if (city) {
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=2070263ab54241e69ad83225241803&q=${city}&aqi=no`;

      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not get data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);

  return (
    <div
      className="min-h-screen flex justify-around items-start"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <DateTime className="max-w-[250px]"></DateTime>
      <div className="w-[40%] mt-16">
        {weatherData && (
          <Temperature
            setCity={setCity}
            city={city}
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
            }}
          />
        )}
      </div>
      <div className="w-1/2 mt-16 p-8 grid grid-cols-2 gap-4">
        <h1 className="text-gray-700 text-2xl col-span-2">
          Today's Highlights
        </h1>
        {weatherData && (
          <>
            <Highlights
              stats={{
                title: "Feels like",
                value: weatherData.current.feelslike_c,
                unit: "°C",
              }}
            />
            <Highlights
              stats={{
                title: "Wind Status",
                value: weatherData.current.wind_mph,
                unit: "mph",
                direction: weatherData.current.wind_dir,
              }}
            />
            <Highlights
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: "%",
              }}
            />
            <Highlights
              stats={{
                title: "Visibility",
                value: weatherData.current.vis_miles,
                unit: "miles",
              }}
            />
            <Highlights
              stats={{
                title: "Air Pressure",
                value: weatherData.current.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

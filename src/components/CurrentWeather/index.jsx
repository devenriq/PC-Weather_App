import React, { useEffect, useState } from "react";
import { ListDays } from "../ListDays";

export const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}weather?lat=24.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="currentWeather text-gray-200 bg-slate-800 w-auto h-full rounded-lg m-2 p-2 flex justify-evenly">
      <div className="currentWeather--details ">
        <h1>{weather.timezone}</h1>
        <h2>Actual Temp</h2>
        <span>{(weather.main.temp - 273).toFixed(2)} °C</span>
        <ul className="currentWeather--stats">
          <li>
            <span>Wind </span>
            <span>{weather.wind.speed} km/h</span>
          </li>
          <li>
            <span>Humidity: </span>
            <span>{weather.main.humidity}%</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
          {weather.weather.map((type) => (
            <h3 key={type.id}>{type.main}</h3>
          ))}
        </div>
      </div>
      <div className="currentWeather--imgs">
        <img src="" alt="Weather" />
      </div>
      {/* <ListDays days={weather} /> */}
    </section>
  );
};

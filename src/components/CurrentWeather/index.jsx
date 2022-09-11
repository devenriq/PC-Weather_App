import React from "react";
import { useApi } from "../../context/ApIContext";
import { ListDays } from "../ListDays";

export const CurrentWeather = () => {
  const weather = useApi();

  console.log(weather);

  if (weather === null) {
    return (
      <section className="currentWeather text-gray-200 bg-slate-800 w-auto h-full rounded-lg m-2 p-2 flex justify-evenly">
        <h2>Loading...</h2>
      </section>
    );
  } else {
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
  }
};

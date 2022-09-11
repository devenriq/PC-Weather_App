import React, { useEffect } from "react";

export const CurrentWeather = () => {
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section className="currentWeather">
      <div className="currentWeather--details">
        <h2>Actual Temp</h2>
        <span>0°</span>
        <ul className="currentWeather--stats">
          <li>
            <span>Wind</span>
            <span>5 km/h</span>
          </li>
          <li>
            <span>Humidity</span>
            <span>24%</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
          <h3>Raining</h3>
        </div>
        <div className="currentWeather--actual">
          <h3>Raining</h3>
        </div>
        <div className="currentWeather--actual">
          <h3>Raining</h3>
        </div>
        <div className="currentWeather--actual">
          <h3>Raining</h3>
        </div>
        <div className="currentWeather--actual">
          <h3>Raining</h3>
        </div>
      </div>
      <div className="currentWeather--imgs"></div>
    </section>
  );
};

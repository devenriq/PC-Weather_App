import React, { useEffect, useState } from "react";

export const Day = () => {
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
    <p>Loading...</p>;
  }

  return (
    <li>
      <h3>{weather.weather[0].main}</h3>
    </li>
  );
};

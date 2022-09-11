import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext({});

export const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}weather?lat=24.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((weather) => {
        setData(weather);
      });
  }, []);

  return <APIContext.Provider value={data}>{children}</APIContext.Provider>;
};

export const useApi = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    return "Context isn't defined";
  }

  return context;
};

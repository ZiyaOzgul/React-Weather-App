import React, { createContext, useState } from "react";
import weatherData from "../data/weatherData.json";
import defaultDaily from "../data/defaultDaily.json";
import dataOfWeek from "../data/weatherWeek.json";

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const defaultCity = "tokyo";
  const [unit, setUnit] = useState("metric");
  const [cityName, setCityName] = useState(defaultCity);
  const defaultData = weatherData;
  // const defaultDaily = {
  //   cod: "200",
  //   message: 0,
  //   cnt: 96,
  //   list: [
  //     {

  //       dt: 1661875200,
  //       main: {
  //         temp: 296.34,
  //         feels_like: 296.02,
  //         temp_min: 296.34,
  //         temp_max: 298.24,
  //         pressure: 1015,
  //         sea_level: 1015,
  //         grnd_level: 933,
  //         humidity: 50,
  //         temp_kf: -1.9,
  //       },
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: {
  //         all: 97,
  //       },
  //       wind: {
  //         speed: 1.06,
  //         deg: 66,
  //         gust: 2.16,
  //       },
  //       visibility: 10000,
  //       pop: 0.32,
  //       rain: {
  //         "1h": 0.13,
  //       },
  //       sys: {
  //         pod: "d",
  //       },
  //       dt_txt: "2022-08-30 16:00:00",
  //     },
  //     {
  //       dt: 1661878800,
  //       main: {
  //         temp: 296.31,
  //         feels_like: 296.07,
  //         temp_min: 296.2,
  //         temp_max: 296.31,
  //         pressure: 1015,
  //         sea_level: 1015,
  //         grnd_level: 932,
  //         humidity: 53,
  //         temp_kf: 0.11,
  //       },
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10d",
  //         },
  //       ],
  //       clouds: {
  //         all: 95,
  //       },
  //       wind: {
  //         speed: 1.58,
  //         deg: 103,
  //         gust: 3.52,
  //       },
  //       visibility: 10000,
  //       pop: 0.4,
  //       rain: {
  //         "1h": 0.24,
  //       },
  //       sys: {
  //         pod: "d",
  //       },
  //       dt_txt: "2022-08-30 17:00:00",
  //     },
  //     {
  //       dt: 1661882400,
  //       main: {
  //         temp: 294.94,
  //         feels_like: 294.74,
  //         temp_min: 292.84,
  //         temp_max: 294.94,
  //         pressure: 1015,
  //         sea_level: 1015,
  //         grnd_level: 931,
  //         humidity: 60,
  //         temp_kf: 2.1,
  //       },
  //       weather: [
  //         {
  //           id: 500,
  //           main: "Rain",
  //           description: "light rain",
  //           icon: "10n",
  //         },
  //       ],
  //       clouds: {
  //         all: 93,
  //       },
  //       wind: {
  //         speed: 1.97,
  //         deg: 157,
  //         gust: 3.39,
  //       },
  //       visibility: 10000,
  //       pop: 0.33,
  //       rain: {
  //         "1h": 0.2,
  //       },
  //       sys: {
  //         pod: "n",
  //       },
  //       dt_txt: "2022-08-30 18:00:00",
  //     },

  //     {
  //       dt: 1662217200,
  //       main: {
  //         temp: 294.14,
  //         feels_like: 293.99,
  //         temp_min: 294.14,
  //         temp_max: 294.14,
  //         pressure: 1014,
  //         sea_level: 1014,
  //         grnd_level: 931,
  //         humidity: 65,
  //         temp_kf: 0,
  //       },
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       clouds: {
  //         all: 100,
  //       },
  //       wind: {
  //         speed: 0.91,
  //         deg: 104,
  //         gust: 1.92,
  //       },
  //       visibility: 10000,
  //       pop: 0.53,
  //       sys: {
  //         pod: "d",
  //       },
  //       dt_txt: "2022-09-03 15:00:00",
  //     },
  //   ],
  //   city: {
  //     id: 3163858,
  //     name: "Zocca",
  //     coord: {
  //       lat: 44.34,
  //       lon: 10.99,
  //     },
  //     country: "IT",
  //     population: 4593,
  //     timezone: 7200,
  //     sunrise: 1661834187,
  //     sunset: 1661882248,
  //   },
  // };

  const [data, setData] = useState(defaultData);
  const [dailyData, setdailyData] = useState(defaultDaily.list);
  const defaultWeeklyData = dataOfWeek;
  const [weeklyData, setWeeklyData] = useState(defaultWeeklyData);
  const KEY = "32f408218d01bffee2d4c418e9cb9034";
  const [currentType, setCurrentType] = useState(
    "mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400"
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const values = {
    data,
    setData,
    setUnit,
    unit,
    cityName,
    setCityName,
    KEY,
    setdailyData,
    days,
    dailyData,
    weeklyData,
    setWeeklyData,
    currentType,
    setCurrentType,
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
};

export default weatherContext;

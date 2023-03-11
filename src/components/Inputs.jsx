import React, { useContext, useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import weatherContext from "../services/weatherContext";
import axios from "axios";
// import GetWeatherData from "../services/getWeather";

function Inputs() {
  const hot =
    "mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-red-700 to-orange-700 h-fit shadow-xl shadow-gray-400";
  const cold =
    "mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400";
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(0);
  const {
    setData,
    setUnit,
    cityName,
    setCityName,
    KEY,
    unit,
    setdailyData,
    setWeeklyData,
    setCurrentType,
    currentType,
  } = useContext(weatherContext);
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=${unit}`
    )
      .then((res) => {
        setData(res.data);
        unit === "metric"
          ? res.data.main.temp.toFixed() <= 0
            ? setCurrentType(cold)
            : setCurrentType(hot)
          : res.data.main.temp.toFixed() <= 32
            ? setCurrentType(cold)
            : setCurrentType(hot);

        console.log(res.data.main.temp.toFixed());
        console.log(currentType);
      })

      .catch((err) => console.log(err));
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${KEY}&units=${unit}&cnt=5`
    ).then((res) => {
      setdailyData(res.data.list);
    });
    // https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=6d0dda5f2a2e8b0e723ab2ad060b1860&units=metric
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${KEY}&units=${unit}`
    )
      .then((res) => {
        setWeeklyData(res.data);
      })
      .catch((err) => console.log(err));
  }, [clicked, cityName]);

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          placeholder="Search Your City..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize "
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setCityName(input);
            setClicked(clicked + 1);
            setInput("");
          }}
        >
          <UilSearch
            size={25}
            className="text-white transition-all ease-in-out hover:scale-125 cursor-pointer"
          />
        </button>
        {/* <UilLocationPoint
          size={25}
          className="text-white transition-all ease-in-out hover:scale-125 cursor-pointer"
        /> */}
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center text-white">
        <button
          name="metric"
          onClick={() => {
            setUnit("metric");
            setClicked(clicked + 1);
          }}
          className="text-xl font-light transition-all ease-in-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-xl mx-1">|</p>
        <button
          name="imperial"
          onClick={() => {
            setUnit("imperial");
            setClicked(clicked + 1);
          }}
          className="text-xl font-light transition-all ease-in-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;

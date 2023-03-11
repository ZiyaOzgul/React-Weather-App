import React, { useContext } from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import weatherContext from "../services/weatherContext";

export const timeFormatter = (time) => {
  let unix_timestamp = time;
  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};
function Daily() {
  const { data, unit, currentType } = useContext(weatherContext);

  return (
    <div>
      <div
        className={
          currentType ===
          "mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-red-700 to-orange-700 h-fit shadow-xl shadow-gray-400"
            ? "flex flex-col items-center justify-center py-6 text-xl text-red-300"
            : "flex flex-col items-center justify-center py-6 text-xl text-cyan-300"
        }
      >
        <p>{data.weather[0].main}</p>
        <p>{data.weather[0].description}</p>
      </div>
      <div className="flex  flex-row items-center justify-between text-white py-3">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          className="w-20 "
        />
        <p className="text-5xl">
          {data.main.temp.toFixed()}
          {unit === "metric" ? "°C" : "°F"}
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">
              {data.main.feels_like.toFixed()}
              {unit === "metric" ? "°C" : "°F"}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity
            <span className="font-medium ml-1">{data.main.humidity}%</span>
          </div>
          <div className="flex">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {data.wind.speed}
              km/h
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">
            {timeFormatter(data.sys.sunrise)}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">
            {timeFormatter(data.sys.sunset)}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">
            {data.main.temp_max.toFixed()}
            {unit === "metric" ? "°C" : "°F"}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">
            {data.main.temp_min.toFixed()}
            {unit === "metric" ? "°C" : "°F"}
          </span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default Daily;

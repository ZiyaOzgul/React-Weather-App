import React, { useContext } from "react";
import weatherContext from "../services/weatherContext";

function Week() {
  const { dailyData, unit, days, weeklyData } = useContext(weatherContext);

  const dateFunc = (dateTime) => {
    let a = new Date(dateTime);
    // return days[a.getDay()];
    return a.getHours() === 0 ? a.getHours() + "0:00" : a.getHours() + ":00";
  };
  const day = new Date().getDay;
  const forecastDays = days.slice(day, days.length).concat(days.slice(0, day));
  return (
    <div>
      <div className="flex items-center justify-start mt-6 text-white">
        <p className="font-medium uppercase">Hourly Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-start justify-center my-6 ">
        {dailyData.map((item, id) => (
          <div
            className="flex flex-col items-center justify-start text-white w-1/5"
            key={id}
          >
            <p className="font-light">{`${dateFunc(item.dt_txt)}`}</p>

            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              className="w-12 my-1"
              alt=""
            />

            <p className="font-light">
              {item.main.temp.toFixed()}
              {unit === "metric" ? "°C" : "°F"}
            </p>
          </div>
        ))}
      </div>
      {/* //! weekly Forecast */}
      <div className="flex items-center justify-start mt-6 text-white">
        <p>Weekly Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-start justify-center my-6 ">
        {weeklyData.list.splice(0, 7).map((item, id) => (
          <div
            className="flex flex-col items-center justify-start text-white w-1/5"
            key={id}
          >
            <p className="font-light">{forecastDays[id]}</p>

            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              className="w-12 my-1"
              alt=""
            />

            <p className="font-light">
              {item.main.temp.toFixed()}
              {unit === "metric" ? "°C" : "°F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Week;

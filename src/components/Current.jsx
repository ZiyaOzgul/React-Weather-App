import React, { useContext } from "react";
import weatherContext from "../services/weatherContext";
import { timeFormatter } from "./Daily";

function Current() {
  const { data, days } = useContext(weatherContext);
  const a = new Date(data.dt * 1000);

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {`${days[a.getDay()]}, ${a.getDay()} ${
            a.getMonth() < 10 ? `0${a.getMonth()}` : `${a.getMonth()}`
          } ${a.getFullYear()} | Local time:  ${timeFormatter(data.dt)}`}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white font-medium text-3xl">
          {data.name},{data.sys.country}
        </p>
      </div>
    </div>
  );
}

export default Current;

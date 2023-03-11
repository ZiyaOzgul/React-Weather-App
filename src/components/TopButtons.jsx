import React, { useContext } from "react";
import "../index.css";
import weatherContext from "../services/weatherContext";

function TopButtons() {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Tokyo",
    },
    {
      id: 3,
      name: "Sydney",
    },
    {
      id: 4,
      name: "Toronto",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];
  const { setCityName } = useContext(weatherContext);
  const buttonFunc = (e) => {
    setCityName(cities[e.target.name-1].name);
  };
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          className="text-white text-lg font-medium transition-all ease-in-out hover:scale-110"
          key={city.id}
          name={city.id}
          onClick={buttonFunc}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;

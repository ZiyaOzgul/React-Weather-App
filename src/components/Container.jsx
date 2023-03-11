import React, { useContext } from "react";
import TopButtons from "./TopButtons";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Inputs from "./Inputs";
import Current from "./Current";
import Daily from "./Daily";
import Week from "./Week";
import weatherContext, { WeatherProvider } from "../services/weatherContext";

function Container() {
  const { currentType } = useContext(weatherContext);
  return (
    <div className={currentType}>
      <TopButtons />
      <Inputs />
      <Current />
      <Daily />
      <Week />
    </div>
  );
}

export default Container;

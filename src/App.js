import TopButtons from "./components/TopButtons";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Inputs from "./components/Inputs";
import Current from "./components/Current";
import Daily from "./components/Daily";
import Week from "./components/Week";
import weatherContext, { WeatherProvider } from "./services/weatherContext";

import Container from "./components/Container";

function App() {
  

  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;

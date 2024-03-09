import { useState } from "react";
import "./index.css";

import Background from "./components/Background";

import Search from "./components/Search/AramaCubugu";

import Output from "./components/Output";
import Fivecity from "./components/Citys/fivecity";

function App() {
  const [havaDurumu, setHavaDurumu] = useState({});
  console.log("🚀 ~ file: App.js:15 ~ App ~ havaDurumu:", havaDurumu);

  return (
    <div className="Uygulama">
      <Background arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />

      <div id="baslik"> Hava Durumu</div>

      <Search setHavaDurumu={setHavaDurumu} />
      <Output hava={havaDurumu} />

      {!havaDurumu.weather && <Fivecity />}
    </div>
  );
}

export default App;

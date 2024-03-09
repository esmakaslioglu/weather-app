import React, { useEffect, useState } from "react";

const Fivecity = ({hava}) => {
  const locations = [
    {
      city: "Antalya",
      lat: "36.89938946274279",
      lon: "30.694273610528292",
    },


    {
        city: "İstanbul",
        lat: "41.03840011812076",
        lon: "28.969377023631104",
    },


    {
        city: "Ankara",
        lat: "39.93134845317637",
        lon: "32.85882738184686",
    },

    {
        city: "Adana",
        lat: "37.023071482866534",
        lon: "35.15346682834425",
    },


    {
        
        city: "Bursa",
        lat: "40.190620962459256",
        lon: "29.053558600540356",
    },


  ];
  const api = {
    key: "f7505d23c7297dfe79a87ec8e3b23bec",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const [sehirlerAnt, setSehirlerAnt] = useState("");
  console.log("🚀 ~ file: fivecity.js:7 ~ Fivecity ~ sehirler:", sehirlerAnt);
  useEffect(() => {
    fetch(`${api.base}?lat=${locations[0].lat}&lon=${locations[0].lon}&units=metric&lang=tr&appid=${api.key}
    `)
      .then((res) => res.json())
      .then((data) => setSehirlerAnt(data));
  }, []);



  const [sehirlerIst, setSehirlerIst] = useState("");
  console.log("🚀 ~ file: fivecity.js:7 ~ Fivecity ~ sehirler:", sehirlerIst);
  useEffect(() => {
    fetch(`${api.base}?lat=${locations[1].lat}&lon=${locations[1].lon}&units=metric&lang=tr&appid=${api.key}
    `)
      .then((res) => res.json())
      .then((data) => setSehirlerIst(data));
  }, []);


  const [sehirlerAnk, setSehirlerAnk] = useState("");
  console.log("🚀 ~ file: fivecity.js:7 ~ Fivecity ~ sehirler:", sehirlerAnk);
  useEffect(() => {
    fetch(`${api.base}?lat=${locations[2].lat}&lon=${locations[2].lon}&units=metric&lang=tr&appid=${api.key}
    `)
      .then((res) => res.json())
      .then((data) => setSehirlerAnk(data));
  }, []);


  const [sehirlerAd, setSehirlerAd] = useState("");
  console.log("🚀 ~ file: fivecity.js:7 ~ Fivecity ~ sehirler:", sehirlerAd);
  useEffect(() => {
    fetch(`${api.base}?lat=${locations[3].lat}&lon=${locations[3].lon}&units=metric&lang=tr&appid=${api.key}
    `)
      .then((res) => res.json())
      .then((data) => setSehirlerAd(data));
  }, []);

  const [sehirlerBur, setSehirlerBur] = useState("");
  console.log("🚀 ~ file: fivecity.js:7 ~ Fivecity ~ sehirler:", sehirlerBur);
  useEffect(() => {
    fetch(`${api.base}?lat=${locations[4].lat}&lon=${locations[4].lon}&units=metric&lang=tr&appid=${api.key}
    `)
      .then((res) => res.json())
      .then((data) => setSehirlerBur(data));
  }, []);

  return (
    <div>
      <div className="container">

      <div className="sehir-container">
        <h2>{locations[0].city}</h2>
          {sehirlerAnt.main && (
            <div>
              <p>Sıcaklık: {Math.round(sehirlerAnt.main.temp)} °C</p>
              <p>Nem: %{Math.round(sehirlerAnt.main.humidity)}</p>
              <img src={`https://openweathermap.org/img/wn/${sehirlerAnt.weather[0].icon}@2x.png`} alt="icon" />
              <p>{sehirlerAnt.weather[0].description}</p>
            </div>
          )}
</div>

        <div className="sehir-container">
        <h2>{locations[1].city}</h2>
          {sehirlerIst.main && (
            <div>
              <p>Sıcaklık: {Math.round(sehirlerIst.main.temp)} °C</p>
              <p>Nem: %{Math.round(sehirlerIst.main.humidity)}</p>
              <img src={`https://openweathermap.org/img/wn/${sehirlerIst.weather[0].icon}@2x.png`} alt="icon" />
              <p>{sehirlerIst.weather[0].description}</p>
            </div>
          )}
          
        </div>

        <div className="sehir-container">
            
        <h2>{locations[2].city}</h2>
          {sehirlerAnk.main && (
            <div>
              <p>Sıcaklık: {Math.round(sehirlerAnk.main.temp)} °C</p>
              <p>Nem: %{Math.round(sehirlerAnk.main.humidity)}</p>
              <img src={`https://openweathermap.org/img/wn/${sehirlerAnk.weather[0].icon}@2x.png`} alt="icon" />
              <p>{sehirlerAnk.weather[0].description}</p>
            </div>
          )}
        
        </div>





        <div className="sehir-container">

        <h2>{locations[3].city}</h2>
          {sehirlerAd.main && (
            <div>
              <p>Sıcaklık: {Math.round(sehirlerAd.main.temp)} °C</p>
              <p>Nem: %{Math.round(sehirlerAd.main.humidity)}</p>
             <img src={`https://openweathermap.org/img/wn/${sehirlerAd.weather[0].icon}@2x.png`} alt="icon" /> 
             <p>{sehirlerAd.weather[0].description}</p>
              
            </div>
          )}


        </div>

        <div className="sehir-container"><h2>{locations[4].city}</h2>
          {sehirlerBur.main && (
            <div>
              <p>Sıcaklık: {Math.round(sehirlerBur.main.temp)} °C</p>
              <p>Nem: %{Math.round(sehirlerBur.main.humidity)}</p>
              <img src={`https://openweathermap.org/img/wn/${sehirlerBur.weather[0].icon}@2x.png`} alt="icon" />
              <p>{sehirlerBur.weather[0].description}</p>
              
            </div>
          )}
</div>
      </div>
    </div>
  );
};

export default Fivecity;

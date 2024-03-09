function index({hava}) {
    return (

        <>

        { typeof hava.main != "undefined" &&(
        <div className="output">
            <div className="sehir">{hava.name},{hava.sys.country} </div>
        <div className="detay"> 
        <div className="statu">
            
            <img src={`https://openweathermap.org/img/wn/${hava.weather[0].icon}@2x.png`} alt="icon" />
            
            <div className="statu">{hava.weather[0].description}</div>
            </div>
            <div className="detay-container">
            <div className="alt-container"> Sıcaklık: {Math.round(hava.main.temp)}  °C </div>
            <div className="alt-container">Hissedilen Sıcaklık: {Math.round(hava.main.feels_like)} °C </div>
           <div className="alt-container"> Nem Oranı: %{hava.main.humidity}</div>
            
            </div>
        </div>
        </div>
       ) }

      { hava.cod === "404" ? 
      ( <p className="error">Şehir Bulunamadı... </p> ): 

        (<>  </>)
        
        
        }


        
        </>
    );
}

export default index;
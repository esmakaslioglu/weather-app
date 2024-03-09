import {useState} from "react";
import weathericon from "../../Images/weather-icon.png";
function AramaCubugu({setHavaDurumu}) {

    const api={
key:"f7505d23c7297dfe79a87ec8e3b23bec",
base:"https://api.openweathermap.org/data/2.5/weather",
    }

    const [data,setData]=useState("");
        
    const ara =(e)=>{
        
           fetch(`${api.base}?q=${data}&units=metric&lang=tr&appid=${api.key}`)
           .then((veri)=>veri.json())
           .then((Output)=> {

            setData("");
            setHavaDurumu(Output);
            console.log(Output);
           });
        
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        ara();
    }

    return (
       
    
    <div className="arama"> 
    <form onSubmit={handleSubmit}>
        <input 
        className="arama-input" 
        type="text"
        placeholder="Şehir"
        onChange={(e)=>setData(e.target.value)}

        value={data}
        required
        
        >

        </input>
          <button className="search-button" onClick={ara}>
       <img className="weather-img" src={weathericon} alt="arama">
       </img></button>
        </form>
      
       
        </div>
    
    );
}

export default AramaCubugu;
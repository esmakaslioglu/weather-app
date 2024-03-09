import rainy from "../../Images/yagmurlu.jpg";
import cloudy from "../../Images/bulutlu.jpg";
import foggy from "../../Images/foggy-forest.jpeg";
import snowy from "../../Images/snowy-city.jpeg";
import stormy from "../../Images/tornado.jpg";
import background from "../../Images/pagebackground.jpg";
import sunny from "../../Images/gunesli.jpg";
import drizzle from "../../Images/drizzle.jpeg";

function ResimCek({durum})
{
    switch(durum)

    {
        case "Rain":
        return <img className="arkaplan-resim" src={rainy} alt ="yağmurlu"></img>;
        
        case "Drizzle":
        return <img className="arkaplan-resim" src={drizzle} alt ="çiseli"></img>;


        case "Clear":
        return <img className="arkaplan-resim" src={sunny} alt ="güneş"></img>;


        case "Mist":
        return <img className="arkaplan-resim" src={foggy} alt ="sis"></img>;


        case "Snow":
        return <img className="arkaplan-resim" src={snowy} alt ="kar"></img>;
        
        case "Storm":
        return <img className="arkaplan-resim" src={stormy} alt ="fırtına"></img>;

        case "Clouds":
            return <img className="arkaplan-resim" src={cloudy} alt ="varsayılan"></img>;

            default:
                return <img src={background} alt ="varsayilan arkaplan"></img>;
    }
}

export default ResimCek;
import React,{useState} from "react";
import Conditions from "../conditions/Conditions";
import classes from "./Forecast.module.css";


const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let[city, setCity] = useState('');
    let[Unit, setUnit] = useState('imperial');
   
   
    const uriEncodedCity = encodeURIComponent(city);
    
    
    let getForecast = (e) => {
        e.preventDefault();
        
       
       
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${Unit}&q=${uriEncodedCity}` , {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "1973b68a0emshca5185b750ce3fep1151d7jsn205d0ad73d9f"
            }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
   }

    return (
        <div className={(typeof responseObj.main != "undefined") ? ((responseObj.main.temp < 20) ? 'App warm' : 'App') : 'App'}>
        
            <h2 style={{color:"white"}}> Find Current Weather Conditions
            </h2>
            {/* <div>
                {JSON.stringify(responseObj)}
            </div> */}
            <form onSubmit={getForecast} class="form">
                <input 
                type="text"
                placeholder = "Enter City"
                maxLength= "50"
                value={city}
                onChange={(e) => setCity(e.target.value)}
               
                className={classes.textInput}
                />
                <br/>
                <label>
                    <input
                    type = "radio"
                    name = "units"
                    checked = {Unit === "imperial"}
                    value= "imperial"
                    onChange= {(e) => setUnit(e.target.value)}
                    className={classes.Radio}
                    />
                   <span style={{color:"white"}}> Fahrenheit</span>
                </label>
                <span> </span>
                <label>
                    <input 
                    type="radio"
                    name="units"
                    checked={Unit === "metric"}
                    value="metric"
                    onChange={(e) => setUnit(e.target.value)}
                    className={classes.Radio}
                    
                    />
                    <span style={{color:"white"}}>  Celcius</span>
                    
                </label>
                <br/>
                <button type="submit" class="btn btn-primary" >Get Forecast</button>
            </form>
            
        <Conditions responseObj={responseObj} unit={Unit}  />
       
        </div>
    )
}

export default Forecast;
import React from "react";


const Conditions = (props) => {
  
  const dateBuilder = (d) => {
    let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = [d.getDate()];
    let month =months[d.getMonth()];
    let year = [d.getFullYear()];

    return `${day} ${date} ${month} ${year} `
  }

  const units = props.unit;
  console.log(`this is ${units}`);
  const getUnit =(units) => {
    if(units === 'imperial')
    {
     return <p>°F</p>
    }
    else
    {
      return <p>°C</p>
    }
  }

  
    return(
        <div>
          
{props.responseObj.cod === 200 ?
<main>
<div  className = "location-box" >

    <div className="location">{props.responseObj.name}</div>
<div className="date">{dateBuilder(new Date())}</div>
</div>
<div className = "weather-box">
    <div class="temp"> {Math.round(props.responseObj.main.temp)}{getUnit(props.unit)}  
    
    <p style = {{fontSize: "15px", color:"#fff"}}>
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
</svg>
{Math.round(props.responseObj.main.temp_min)}{getUnit(props.unit)}
<span>  </span>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"/>
</svg>
{Math.round(props.responseObj.main.temp_max)}{getUnit(props.unit)}
</p>
    </div>
    <div className="weather">
    {props.responseObj.weather[0].description}
    <img src ={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} alt="wthr img" />
    </div>
    </div>
  

    
  </main>
:null
}
        </div>
    )
}

export default Conditions;
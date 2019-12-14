import React, { useState } from "react";
import  "./Search.css";
import Time from "./CurrentTime";
import axios from "axios";


export default function Search(props) {
  let [temperature, setTemperature] = useState(null);
  let [temperatureMin, setTemperatureMin] = useState(null);
  let [temperatureMax, setTemperatureMax] = useState(null);
  let [description, setDescription] = useState(null);
  let [city, setCity] = useState(null);
  let [iconDay,setIcon] =useState(null);
  let [clouds, setClouds] = useState(null);
  let [hum, setHum] = useState(null);
  let [speed, setSpeed] = useState(null);


  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setTemperatureMin(Math.round(response.data.main.temp_min));
    setTemperatureMax(Math.round(response.data.main.temp_max));
    setDescription(response.data.weather[0].description);
    setCity(response.data.name);
    setClouds(response.data.clouds.all);
    setHum(response.data.main.humidity);
    setSpeed(response.data.wind.speed);
    
    let iconURL=`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setIcon(<img src={iconURL} alt="weather icon"/>)

    }

 
 function search(city) {
   
  //8e7395d4f989412fff4eb060663c2eeb
  //49709f556ca5716e98602bbd4473e5d1
  let apiKey="49709f556ca5716e98602bbd4473e5d1";  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
 &appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);

  //apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  //axios.get(apiUrl).then(displayForecast);

 
}




  function handleSubmit(event) {
   event.preventDefault();

    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    //&appid=8e7395d4f989412fff4eb060663c2eeb&units=metric`;
    //axios.get(apiUrl).then(showTemperature);

    search(city);

  }

  function updateCity(event){
      setCity(event.target.value);
  
  }




  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((temperature * 9) / 5 + 32));
    setTemperatureMin(Math.round((temperatureMin * 9) / 5 + 32));
    setTemperatureMax(Math.round((temperatureMax * 9) / 5 + 32));

   // celsiusLink.classList.remove("active");
   // fahrenheitLink.classList.add("active");
  }

  function showCelsius(event) {
    event.preventDefault();
    
    setTemperature(temperature);
    setTemperatureMin(temperatureMin);
    setTemperatureMax(temperatureMax);
  }



  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let gps = document.querySelector("#gps");
    gps.innerHTML = `Latitude: ${Math.floor(lat * 1000 + 0.5) /
      1000} Longitude:${Math.floor(lon * 1000 + 0.5) / 1000} `;
    console.log(position.coords);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  
  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${hours}:${minutes}`;
  }
  



if (city===null)
{search("Guimarães,pt"); return false;} 
else {
  return (
    <div className="weatherApp">
      <form onSubmit={handleSubmit} id="search-form" className="mb-3">
        <div className="row">
          <div className="col">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control SearchCity"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col">
            <input
              type="submit"
              value="Search"
              className="btn-secondary BtnSearch"
            />
          </div>
        </div>
      </form>
      <br />
      <h1> {city}</h1>
      <h2>{description}</h2>
      <div className="container">
        <div className="row text">
          <div className="col-4">
            <ul>
              <br />
              <li className="temps">Min</li>
              <li className="minTemperature"> {temperatureMin} </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <br />
              <li>
                {iconDay}
              </li>
              <li>
                {" "}
                <span className="curr-temperature">{temperature}</span>
                <span className="units">
                  {" "}
                  <a href="/" onClick={showCelsius} className="celsius">
                    {" "}
                    °C{" "}
                  </a>
                  |
                  <a href="/" onClick={showFarehrenheit} className="fahrenheit">
                    {" "}
                    °F{" "}
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <br />
              <li className="temps">Max</li>
              <li className="maxTemperature"> {temperatureMax} </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-6 info">
          <ul>
            <li>
              <p className="clouds">Cloudiness: {clouds}</p>
            </li>
            <li>
              <p id="humidity">Humidity: {hum} </p>
            </li>
            <li>
              <p className="wind">Wind: {speed} </p>
            </li>
          </ul>
        </div>
        < Time />
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-6 gps">
          <button type="button" className="btn btn-outline-dark" onClick={getCurrentPosition}>
            GPS
          </button>
        </div>
        <div className="col-6">
          <p id="gps" />
        </div>
      </div>
    </div>
    </div>
  );}

}

import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search(props) {
  let [temperature, setTemperature] = useState(null);
  let [temperatureMin, setTemperatureMin] = useState(null);
  let [temperatureMax, setTemperatureMax] = useState(null);
  let [description, setDescription] = useState(null);
  let [city, setCity] = useState(null);
  let [iconDay,setIcon] =useState(null);
  

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setTemperatureMin(Math.round(response.data.main.temp_min));
    setTemperatureMax(Math.round(response.data.main.temp_max));
    setDescription(response.data.weather[0].description);
    setCity(response.data.name);

    let iconURL=`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setIcon(<img src={iconURL} alt="weather icon"/>)
  
  }

 function search(city) {
   
  //8e7395d4f989412fff4eb060663c2eeb

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
 &appid=49709f556ca5716e98602bbd4473e5d1&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function onOpening () {

  if (city===null){
    return search(props.city);
  } else {
    return search(city)
  }
  }
  
  onOpening();



  function handleSubmit(event) {
   event.preventDefault();

    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    //&appid=8e7395d4f989412fff4eb060663c2eeb&units=metric`;
    //axios.get(apiUrl).then(showTemperature);

  }

  function updateCity(event){
      setCity(event.target.value);
  }




  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((temperature * 9) / 5 + 32));
    setTemperatureMin(Math.round((temperatureMin * 9) / 5 + 32));
    setTemperatureMax(Math.round((temperatureMax * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(temperature);
    setTemperatureMin(temperatureMin);
    setTemperatureMax(temperatureMax);
  }

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
      <h1>{city}</h1>
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
    </div>
  );
}

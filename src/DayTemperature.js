import React, { useState } from "react";
import "./DayTemperature.css";
import axios from "axios";

export default function DayTemperature(props) {
  let [temperature, setTemperature] = useState(props.currValue);
  let [temperatureMin, setTemperatureMin] = useState(props.minValue);
  let [temperatureMax, setTemperatureMax] = useState(props.maxValue);
  alert(props.ciy);

  function showTemperature(response) {}
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
    props.city
  }&appid=8e7395d4f989412fff4eb060663c2eeb&units=metric`;

  axios.get(apiUrl).then(showTemperature);

  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.currValue * 9) / 5 + 32));
    setTemperatureMin(Math.round((props.minValue * 9) / 5 + 32));
    setTemperatureMax(Math.round((props.maxValue * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.currValue);
    setTemperatureMin(props.minValue);
    setTemperatureMax(props.maxValue);
  }

  return (
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
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="partly_cloudy"
                height="60"
              />
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
  );
}

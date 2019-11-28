import React from "react";
import "./InfoDayTemperature.css";

export default function InfoDayTemperature(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 info">
          <ul>
            <li>
              <p className="clouds">Cloudiness: {props.cloud}</p>
            </li>
            <li>
              <p id="humidity">Humidity: {props.hum} </p>
            </li>
            <li>
              <p className="wind">Wind: {props.wind} </p>
            </li>
          </ul>
        </div>
        <div className="col-6 info">
          <ul>
            <li>Current Time</li>
            <li>
              <p className="time"> {props.time} </p>
            </li>
            <li>
              <p className="date"> {props.date} </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

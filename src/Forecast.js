import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="container week">
      <div className="row">
        <div className="col-2">
          <ul>
            <li className="days">Mon</li>
            <li className="temp-pictures">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="partly_cloudy"
                height="40"
              />
            </li>
            <li className="weather-forecast">
              16<small>º</small> | 20<small>º</small>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="days">Tue</li>

            <li className="temp-ictures">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="partly_cloudy"
                height="40"
              />
            </li>
            <li className="weather-forecast">
              17<small>º</small> | 22<small>º</small>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li className="days">Wed</li>

            <li className="temp-pictures">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="partly_cloudy"
                height="40"
              />
            </li>
            <li className="weather-forecast">
              20<small>º</small> | 25<small>º</small>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <ul>
            <li className="days">Thu</li>

            <li className="temp-pictures">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="partly_cloudy"
                height="40"
              />
            </li>

            <li className="weather-forecast">
              20<small>º</small> | 25<small>º</small>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <ul>
            <li className="days">Fri</li>

            <li className="temp-pictures">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="partly_cloudy"
                height="40"
              />
            </li>
            <li className="weather-forecast">
              19<small>º</small> | 23<small>º</small>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
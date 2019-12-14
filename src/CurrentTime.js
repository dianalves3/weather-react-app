import React, { useState } from "react";
import "./DayTemperature.css";

export default function Time(props){

let [date, setDate] = useState(null);
let [time, setTime] = useState(null);

let now = new Date();
let dayNToday = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dayToday = days[now.getDay()];
let year = now.getFullYear();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let monthToday = months[now.getMonth()];

setDate(`${dayToday}, ${monthToday} ${dayNToday}, ${year}`);

let hours = now.getHours();

function Fullminutes() {
  if (now.getMinutes() < 10) {
    return "0" + now.getMinutes();
  } else {
    return now.getMinutes();
  }
}

setTime(` ${hours}:${Fullminutes()}`);



return(

    <div className="col-6 info">
          <ul>
            <li>Current Time</li>
            <li>
              <p className="time"> {time} </p>
            </li>
            <li>
              <p className="date"> {date} </p>
            </li>
          </ul>
        </div>

)

}
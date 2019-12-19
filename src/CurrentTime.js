import React, { useState } from "react";
import "./DayTemperature.css";

export default function Time(props){

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



let hours = now.getHours();

function Fullminutes() {
  if (now.getMinutes() < 10) {
    return "0" + now.getMinutes();
  } else {
    return now.getMinutes();
  }
}





return(

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

)

}
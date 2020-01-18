import React, { useState } from "react";
import "./DayTemperature.css";

export default function Time(props){


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
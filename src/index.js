import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./Search";
import "./App.css";
import Forecast from "./Forecast";
import InfoDayTemperature from "./InfoDayTemperature";
import GPS from "./GPS";
import * as serviceWorker from './serviceWorker';

function App() {
    return (
      <div className="App">
        <Search
          city="Guimarães,pt"
          description="Light intensity drizzle"
          minValue="5"
          currValue="10"
          maxValue="15"
        />
  
        <Forecast />
        <InfoDayTemperature
          cloud="5%"
          hum="80%"
          wind="5m/s"
          time="22:00"
          date="Monday, November 11 of 2019"
        />
        <GPS />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

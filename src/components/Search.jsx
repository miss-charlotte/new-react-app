import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <>
        <form action="">
          <input type="text" name="" id="" />
          <input type="submit" value="Search" />
        </form>

        <div className="row">
          <div className="col-6">
            <h2>{weatherData.city}</h2>
            <h6><FormattedDate date={weatherData.date} /></h6>
            <h6 className="text-capitalize">{weatherData.description}</h6>
          </div>
          <div className="col-6">
            <div className="justify-content-between">
              <h1>{Math.round(weatherData.temperature)}°</h1>
              <img src={weatherData.icon} alt="weather-icon" />
            </div>
            <ul>
              <li>Wind : {Math.round(weatherData.wind)} km/h</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>

        <div className="Forecast">
          <ul>
            <li className="d-inline mx-5">Mon</li>
            <li className="d-inline mx-5">Tue</li>
            <li className="d-inline mx-5">Wed</li>
            <li className="d-inline mx-5">Thur</li>
            <li className="d-inline mx-5">Fri</li>
          </ul>
        </div>
      </>
    );
  } else {
    const apiKey = "4a9a03c36co3te6eb309bfc8b0f487fb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

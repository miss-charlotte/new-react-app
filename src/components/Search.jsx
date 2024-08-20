import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coord: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      // icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4a9a03c36co3te6eb309bfc8b0f487fb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter a city.."
            onChange={handleChange}
            className="InputText"
          />
          <input type="submit" value="Search" className="SearchButton" />
        </form>

        <div className="row mt-5">
          <div className="CityDetails col-6">
            <h2 className="City">{weatherData.city}</h2>
            <h6>
              <FormattedDate date={weatherData.date} />
            </h6>
            <h6 className="text-capitalize">{weatherData.description}</h6>
          </div>
          <div className="col-6">
            <div className="CityTemperature justify-content-between">
              <div className="Temperature">
                {" "}
                <WeatherTemperature celsius={weatherData.temperature} />
              </div>
              <div className="Icon">
                <WeatherIcon code={weatherData.icon} size={52} />
              </div>
            </div>
            <ul className="WeatherInfo">
              <li>Wind : {Math.round(weatherData.wind)} km/h</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
        <Forecast coordinates={weatherData.coord} />
      </>
    );
  } else {
    search();

    return "Loading...";
  }
}

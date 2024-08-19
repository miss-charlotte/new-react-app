import React from 'react';
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props.data);
    function maxTemperature() {
        return Math.round(props.data.temperature.maximum);
    }

    function minTemperature() {
      return Math.round(props.data.temperature.minimum);
    }

    function day() {
        let date= new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        return days[day];
        
    }

    return (
      <>
        <div className="Forecast-day">{day()}</div>
        <WeatherIcon code={props.data.condition.icon} size={32} />
        <div className="Forecast-temperatures">
          <span className="Forecast-temperature-max">
            {maxTemperature()}°
          </span>
          <span className="Forecast-temperature-min">{minTemperature()}</span>
        </div>
      </>
    );
}
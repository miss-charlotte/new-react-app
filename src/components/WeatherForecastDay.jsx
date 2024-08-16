import React from 'react';

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        return Math.round(props.data.max);
    }

    function minTemperature() {
      return Math.round(props.data.min);
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
        <WeatherIcon code={props.data.icon} size={32} />
        <div className="Forecast-temperatures">
          <span className="Forecast-temperature-max">
            {maxTemperature()}°
          </span>
          <span className="Forecast-temperature-min">{minTemperature()}</span>
        </div>
      </>
    );
}
import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "thunderstorm-day": "SLEET",
    "thunderstorm-night": "SLEET",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "WIND",
    "mist-night": "WIND",
  };
  return (
    <>
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="black"
        size={64}
        animate={true}
      />
    </>
  );
}

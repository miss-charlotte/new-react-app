import React, { useState } from "react";
import '../App.css'

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farenheit () {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <>
        <div>
          <h1 className="Temperature">
            {Math.round(farenheit())}
            <span className="TemperatureDegree">°</span>
            <span className="Unit">
              {" "}
              C |{" "}
              <a href="/" onClick={convertToFarenheit}>
                F
              </a>
            </span>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1 className="Temperature">
            {Math.round(props.celsius)}°
            <span className="Unit">
              {" "}
              <a href="/" onClick={convertToCelsius}>
                {" "}
                C{" "}
              </a>
              | F
            </span>
          </h1>
        </div>
      </>
    );
  }
}

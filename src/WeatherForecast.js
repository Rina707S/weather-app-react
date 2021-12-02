import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  const apiKey = "c9aaec0a4189697bb2f4013911b89486";
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="FC-day"> Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="FC-temp">
            <span className="FC-temp-max">19°</span>{" "}
            <span className="FC-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

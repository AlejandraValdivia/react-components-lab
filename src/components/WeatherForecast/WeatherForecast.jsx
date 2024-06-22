import './WeatherForecasts.css'
import WeatherIcon from "../WeatherIcon";
import WeatherData from "../WeatherData";

function WeatherForecast({ day, imgSrc, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <WeatherIcon imgSrc={imgSrc} imgAlt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;

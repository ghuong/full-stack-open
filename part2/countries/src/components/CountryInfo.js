import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const WEATHER_API_BASEURL = "http://api.weatherstack.com/";
    const currentWeatherURL = `${WEATHER_API_BASEURL}current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`;

    axios.get(currentWeatherURL).then((response) => {
      setWeather(response.data.current);
    });
  }, [country.capital, setWeather]);

  const weatherIcons =
    weather && weather.weather_icons && weather.weather_icons.length
      ? weather.weather_icons.map((icon) => (
          <img src={icon} alt="weather icon" key={icon} />
        ))
      : null;

  const weatherInfo = weather ? (
    <div>
      <h3>Weather in {country.capital}</h3>
      <div>
        <b>Temperature</b>: {weather.temperature} Celsius
      </div>
      <div>{weatherIcons}</div>
      <div>
        <b>Wind</b>: {weather.wind_speed} mph direction {weather.wind_dir}
      </div>
    </div>
  ) : null;

  return (
    <div>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <div>
        <img src={country.flag} alt={`Flag of ${country.name}`} width="200" />
      </div>
      {weatherInfo}
    </div>
  );
};

export default CountryInfo;

import React from "react";

const CountryInfo = ({ country }) => {
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
        <img 
          src={country.flag} 
          alt={`Flag of ${country.name}`} 
          width="200"
        />
      </div>
    </div>
  );
};

export default CountryInfo;

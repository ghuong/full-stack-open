import React from "react";
import Country from "./Country";
import CountryInfo from "./CountryInfo";

const Countries = ({ countries }) => {
  if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />;
  } else {
    return (
      <ul>
        {countries.map((country) => (
          <Country country={country} key={country.name} />
        ))}
      </ul>
    );
  }
};

export default Countries;

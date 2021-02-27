import React from "react";
import Country from "./Country"

const Countries = ({ countries }) => {
  return ( 
    <ul>
      {countries.map(country =>
        <Country country={country} key={country.alpha2Code} />
      )}
    </ul>
  );
}

export default Countries
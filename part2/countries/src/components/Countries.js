import React, { useState } from "react";
import Country from "./Country";
import CountryInfo from "./CountryInfo";

const Countries = ({ countries }) => {
  const [countryToShow, setCountryToShow] = useState(null);

  if (countries.length === 1) {
    return <CountryInfo country={countries[0]} />;
  } else {
    const countriesList = countries.map((country) => {
      const makeShowCountryHandler = (country) => (event) => {
        event.preventDefault();
        setCountryToShow(country);
      };

      return (
        <Country
          key={country.name}
          country={country}
          handleShow={makeShowCountryHandler(country)}
        />
      );
    });

    const countryToShowInfo = countryToShow ? (
      <CountryInfo country={countryToShow} />
    ) : null;

    return (
      <div>
        <ul>{countriesList}</ul>
        {countryToShowInfo}
      </div>
    );
  }
};

export default Countries;

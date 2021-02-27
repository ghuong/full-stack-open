import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const MAX_COUNTRIES_TO_SHOW = 10;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => setFilter(event.target.value);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      filter && country.name.toLowerCase().includes(filter.toLowerCase())
  );

  const countriesToShow =
    filteredCountries.length > MAX_COUNTRIES_TO_SHOW ? [] : filteredCountries;

  const isFilterTooBroad = filteredCountries.length > MAX_COUNTRIES_TO_SHOW;

  return (
    <div>
      <h1>Country Database</h1>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        isTooBroad={isFilterTooBroad}
      />
      <Countries countries={countriesToShow} />
    </div>
  );
};

export default App;

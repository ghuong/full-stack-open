import React from "react";

const Country = ({ country, handleShow }) => {
  return ( 
    <li>
      {country.name}
      <button onClick={handleShow}>Show</button>
    </li> 
  );
}

export default Country
import React from "react";

const Person = ({ person, handleDelete }) => {
  const { name, number } = person;

  return (
    <li>
      {name} - {number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Person;

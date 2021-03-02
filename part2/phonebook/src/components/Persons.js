import React from 'react';
import Person from "./Person"

const Persons = ({ persons, handleDeletePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person 
            person={person}
            key={person.id}
            handleDelete={() => handleDeletePerson(person)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Persons
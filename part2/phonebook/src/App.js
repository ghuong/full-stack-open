import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
    };
    const newPersons = persons.concat(newPerson);

    setPersons(newPersons);
    setNewName("");
  };

  const handleNameChange = (event) => setNewName(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => 
          <Person person={person} key={person.name} />
        )}
      </ul>
    </div>
  );
};

export default App;

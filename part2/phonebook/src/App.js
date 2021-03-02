import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState("success message test");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const displaySuccessMessage = (message, duration = 5000) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), duration);
  }

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const duplicatePerson = persons.find(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );

    if (duplicatePerson) {
      // person already exists
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        // update number
        personService
          .update(duplicatePerson.id, newPerson)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            );
            displaySuccessMessage(`Updated ${updatedPerson.name}'s number`);
          });
      }
    } else {
      personService.create(newPerson).then((addedPerson) => {
        setPersons(persons.concat(addedPerson));
        displaySuccessMessage(`Added ${addedPerson.name}`);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService.remove(personToDelete.id).then((response) => {
        setPersons(persons.filter((p) => p.id !== personToDelete.id));
        displaySuccessMessage(`Deleted ${personToDelete.name}`)
      });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredPersons = filter
    ? persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={successMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm
        handleAddPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Persons persons={filteredPersons} handleDeletePerson={deletePerson} />
    </div>
  );
};

export default App;

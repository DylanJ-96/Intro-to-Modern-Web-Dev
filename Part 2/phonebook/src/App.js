import React, { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newSearch, setSearch] = useState('')

    return (
        <div>

            <h1>Phonebook</h1>

            <Filter
                persons={persons} newSearch={newSearch}
                setSearch={setSearch} setPersons={setPersons}
            />

            <h3>Add a New</h3>

            <PersonForm
                persons={persons} newName={newName} setNewName={setNewName}
                newNumber={newNumber} setNewNumber={setNewNumber}
                setPersons={setPersons}
            />

            <h3>Numbers</h3>

            <Persons persons={persons} />

        </div >
    )
}

export default App
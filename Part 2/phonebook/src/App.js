import React, { useState } from 'react'
import { waitForDomChange } from '@testing-library/react'

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

    // const personsToShow = showAll
    //     ? personsToShow
    //     : personsToShow.filter(person => person.important == true)

    const addContact = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            const nameObject = {
                name: newName,
                number: newNumber,
                //id: persons.length + 1,
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }
    const handleSearch = (event) => {

        setSearch(event.target.value)

        if (event.target.value.length > 0) {
            persons.map(a => a.name = a.name.toLowerCase())

            setPersons(persons.filter(person => person.name.includes(event.target.value)))
        }
        else {
            setPersons(persons)
        }
    }

    console.log(newName)

    console.log(persons)

    return (
        <div>
            <h1>Phonebook</h1>

            <form>
                <div>
                    filter shown with
                    <input
                        value={newSearch}
                        onChange={handleSearch}
                    />
                </div>

            </form>

            <h3>Add a New</h3>

            <form onSubmit={addContact}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>

            </form>

            <h3>Numbers</h3>

            <div>
                {persons.map((persons) =>
                    <div key={persons.name}>{persons.name} {persons.number}</div>)}
            </div>



        </div >
    )
}

export default App
import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: 1112223333 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

    console.log(newName)

    console.log(persons)

    return (
        <div>
            <h2>Phonebook</h2>

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

            <h2>Numbers</h2>

            <div>
                {persons.map((persons) => <div key={persons.name}>{persons.name} {persons.number}</div>)}
            </div>

        </div>
    )
}

export default App
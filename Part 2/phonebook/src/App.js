import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            id: persons.length + 1,
        }

        setPersons(persons.concat(nameObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    console.log(persons.map((persons) => persons.name))

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <input
                    value={newName}
                    onChange={handleNameChange}
                />
                <button type="submit">add</button>
            </form>
            <h2>Numbers</h2>
            <div>{persons.map((persons) => <div key={persons.name}>{persons.name}</div>)}</div>
        </div>
    )
}

export default App
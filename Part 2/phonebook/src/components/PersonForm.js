import React from 'react';

const PersonForm = ({ persons, newName, setNewName, newNumber, setNewNumber, setPersons }) => {
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
    return (
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
    )
}

export default PersonForm;
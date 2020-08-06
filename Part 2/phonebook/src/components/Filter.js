import React from 'react';

const Filter = ({ persons, newSearch, setSearch, setPersons }) => {

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

    return (
        <form>
            <div>
                filter shown with
                    <input
                    value={newSearch}
                    onChange={handleSearch}
                />
            </div>

        </form>
    )
}

export default Filter;
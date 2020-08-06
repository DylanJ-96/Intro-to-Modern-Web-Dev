import React from 'react';

const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map((persons) =>
                <div key={persons.name}>{persons.name} {persons.number}</div>)}
        </div>
    )
}

export default Persons;
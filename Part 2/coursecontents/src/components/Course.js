import React from 'react';

const Course = ({ notes }) => {
    return (
        <div>
            <h1>Course</h1>
            <ul>
                {notes.map(note =>
                    <li key={note.id}>
                        {note.content}
                    </li>)}
            </ul>
        </div>
    )
}

export default Course;
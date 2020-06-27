import React from 'react';

const Course = ({ courses }) => {

    const Header = () => (<h1>Web development curriculum</h1>)

    const Content = ({ courses }) => {
        return (courses.map((c) =>
            <div key={c.id}>
                <Parts key={c.id} parts={c} />
            </div>
        ))
    }

    const Parts = ({ parts }) => {
        return (
            <div>
                <Name parts={parts} />
                <Topics parts={parts} />
                <Total parts={parts.parts} />
            </div>
        )
    }

    const Name = ({ parts }) => (<h4>{parts.name}</h4>)

    const Topics = ({ parts }) => (
        <div>
            {parts.parts.map((x) =>
                <p key={x.id}>{x.name} {" "} {x.exercises}</p>
            )}
        </div>
    )

    const Total = ({ parts }) => {
        var total = parts.reduce((sum, order) => {
            return sum + order.exercises
        }, 0)
        return (
            <b>
                total of {total} exercises
            </b>
        )
    }

    return (
        < div >
            <Header />
            <Content courses={courses} />
        </div >
    )

}

export default Course;
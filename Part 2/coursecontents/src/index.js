import React from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

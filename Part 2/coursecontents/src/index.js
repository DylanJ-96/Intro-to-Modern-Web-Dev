import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {

  const Header = () => {
    return (
      <h1>{course.name}</h1>
    )
  }

  const Content = ({ parts }) => {
    return (
      <div>
        <Parts parts={parts} />
      </div>
    )
  }

  const Parts = ({ parts }) => {
    return (
      <div>
        {parts.map((x) => <p key={x.id}>{x.name + ' ' + x.exercises}</p>)}
      </div>
    )
  }

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
    <div>
      <Header />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

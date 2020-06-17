import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
  console.log(props)

  return <h1> {props.course.name} </h1>
}

const Content = props => {
  console.log(props)

  return (
    <div>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
    </div>
  )
}



const Total = (props) => {
  console.log(props)

  const exercise1 = props.course.parts[0].exercises
  const exercise2 = props.course.parts[1].exercises
  const exercise3 = props.course.parts[2].exercises
  const total = exercise1 + exercise2 + exercise3

  return (
    <p>
      There are {total} exercises total
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

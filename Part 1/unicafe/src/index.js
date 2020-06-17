import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => (< h2 > {title} </h2>)

const Statistics = ({ name, value }) => {
  return (
    <div>{name} {value}</div>
  )
}

const Total = ({ val1, val2, val3 }) => {
  const all = val1 + val2 + val3
  return (<div>all {all}</div>)
}
const Avg = ({ val1, val2, val3 }) => {
  const all = val1 + val2 + val3
  const avg = (val1 - val3) / all
  return (
    <div>average {avg}</div>
  )
}
const Positive = ({ val1, val2, val3 }) => {
  const all = val1 + val2 + val3
  const pos = val1 / all
  return (
    <div>Pos {pos}</div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
  const stats = 'Statistics'

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title={title} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header title={stats} />
      <Statistics name='good' value={good} />
      <Statistics name='neutral' value={neutral} />
      <Statistics name='bad' value={bad} />
      <Total val1={good} val2={neutral} val3={bad} />
      <Avg val1={good} val2={neutral} val3={bad} />
      <Positive val1={good} val2={neutral} val3={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

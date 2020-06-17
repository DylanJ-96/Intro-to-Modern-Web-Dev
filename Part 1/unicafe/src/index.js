import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => (< h2 > {title} </h2>)

const Statistic = ({ text, value }) => (
  <div>{text} {value}</div>
)
const Total = ({ total }) => {
  return (<div>all {total}</div>)
}
const Avg = ({ val1, val3, total }) => {
  const avg = (val1 - val3) / total
  return (
    <div>average {avg}</div>
  )
}
const Positive = ({ val1, total }) => {
  const pos = val1 / total
  return (
    <div>positive {pos}</div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ val1, val2, val3 }) => {
  return (
    <div>
      <Statistic text="good" value={val1} />
      <Statistic text="neutral" value={val2} />
      <Statistic text="bad" value={val3} />
    </div>
  )
}

const History = ({ val1, val2, val3 }) => {
  const total = val1 + val2 + val3
  console.log(total)
  if (total > 0)
    return (
      <div>
        <Statistics val1={val1} val2={val2} val3={val3} />
        <Total total={total} />
        <Avg val1={val1} val3={val3} total={total} />
        <Positive val1={val1} total={total} />
      </div>
    )
  else return (<div>No feedback give</div>)
}

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
      <History val1={good} val2={neutral} val3={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

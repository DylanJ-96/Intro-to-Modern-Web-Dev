import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => (< h2 > {title} </h2>)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Total = ({ total }) => {
  return (
    <tr>
      <td>all</td>
      <td>{total}</td>
    </tr >
  )
}
const Avg = ({ val1, val3, total }) => {
  const avg = (val1 - val3) / total
  return (
    <tr>
      <td>average</td>
      <td>{avg}</td>
    </tr>
  )
}
const Positive = ({ val1, total }) => {
  const pos = val1 / total
  return (
    <tr>
      <td>positive</td>
      <td>{pos}</td>
    </tr >
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ val1, val2, val3 }) => {
  return (
    <tbody>
      <Statistic text="good" value={val1} />
      <Statistic text="neutral" value={val2} />
      <Statistic text="bad" value={val3} />
    </tbody>
  )
}

const History = ({ val1, val2, val3 }) => {
  const total = val1 + val2 + val3
  console.log(total)
  if (total > 0)
    return (
      <table>
        <Statistics val1={val1} val2={val2} val3={val3} />
        <tbody><Total total={total} /></tbody>
        <tbody><Avg val1={val1} val3={val3} total={total} /></tbody>
        <tbody><Positive val1={val1} total={total} /></tbody>
      </table >
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

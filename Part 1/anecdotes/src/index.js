import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({ title }) => (<h1> {title} </h1>)

const MostVotes = ({ anecdotes, selected, votes }) => {
  let maxIndex = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </div>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(6).fill(0))
  const title = 'Anecdote of the day'
  const title2 = 'Anecdote with most votes'

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const selectNextClick = () => {
    setSelected(getRandomInt(6))
  }

  const handleVoteClick = () => {
    console.log(selected)
    console.log(votes)

    const copy = [...votes]
    copy[selected] += 1

    setVote(copy)
  }

  return (
    console.log(selected),
    <div>
      <Header title={title} />
      <p>{props.anecdotes[selected]}</p>
      < Button onClick={handleVoteClick} text='vote' />
      < Button onClick={selectNextClick} text='next anecdote' />
      <Header title={title2} />
      <MostVotes anecdotes={anecdotes} selectec={selected} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

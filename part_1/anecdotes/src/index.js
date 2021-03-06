import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [key, setKey] = useState(0)
  const [value, setValue] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})
  const [ topVoted, setTop] = useState(0)

  const getRandom = (arr) => {
    const index = Math.floor((Math.random() * arr));
    setKey(index)
    return index
  }

  const handleClick = () => {
    setSelected(getRandom(anecdotes.length))
  }

  const votes = () => {
    let copy = { ...value }
    copy[key] += 1
    setValue(copy)

    const arr = Object.values(copy);

    arr.forEach((element, index) => {
      if(element > Math.max(...arr)) {
        setTop(index)
      }      
    })
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{props.anecdotes[selected]}</p>      
      <button onClick={handleClick}>Next anecdote</button>
      <p>{value[key]}</p>
      <button onClick={votes}>Vote</button>
      <h3>Anecdote with most votes</h3>
      <p>{props.anecdotes[topVoted]}</p>
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

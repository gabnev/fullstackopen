import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

  // If no votes . . .

  if(props.allClicks.length === 0) {
    return (
      <div>
        <p>Wating for inputs</p>
        <p>Wating for inputs</p>
        <p>Wating for inputs</p>
      </div>
    )
  }

  // Average

  let avg = 0;
  props.allClicks.forEach((click) => {
    avg += click
  })

  avg = avg / props.allClicks.length

  // Positive Average

  let positive = 0;
  props.allClicks.forEach((click) => {
    if(click === 1) {
      positive += click
    }
  })

  positive = positive / props.allClicks.length

  return (
    <div>
      <p>All votes: {props.allClicks.length}</p>
      <p>Average: {avg}</p>
      <p>Positives: {positive}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood ] = useState(0)
  const [neutral, setNeutral ] = useState(0)
  const [bad, setBad ] = useState(0)
  const [allClicks, setAll ] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }  

  return (
    <div>
      <p>Give Feedback</p>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Statistics allClicks={allClicks} />
      {/* <Total allClicks={allClicks} />
      <Avg allClicks={allClicks} />
      <Positives allClicks={allClicks} /> */}
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'))

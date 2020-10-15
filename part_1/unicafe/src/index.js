import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {

}

const Statistics = (props) => {
  console.log(props)

  // If no votes . . .

  if (props.allClicks.length === 0) {
    return (
      <>
        <tr>
          <td>
            <p>No feedback given</p>
          </td>
        </tr>
      </>
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
    if (click === 1) {
      positive += click
    }
  })

  positive = positive / props.allClicks.length

  return (
    <>
      <tr>
        <td>
          <p>Good </p>
        </td>
        <td>
          {props.good}
        </td>
      </tr>
      <tr>
        <td>
          <p>Neutral </p>
        </td>
        <td>
        {props.neutral}
        </td>
      </tr>
      <tr>
        <td>
          <p>Bad </p>
        </td>
        <td>
          {props.bad}
        </td>
      </tr>
      <tr>
        <td>
          <p>All votes: </p>
        </td>
        <td>
          {props.allClicks.length}
        </td>
      </tr>
      <tr>
        <td>
          <p>Average: </p>
        </td>
        <td>
          {avg}
        </td>
      </tr>
      <tr>
        <td>
          <p>Positives: </p>
        </td>
        <td>
          {positive} %
        </td>
      </tr>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

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
      <table>
        <tbody>
          <tr>
            <td>
              <p><strong>Give Feedback</strong></p>
            </td>
          </tr>
          <tr style={{display: "flex"}}>
            <td>
              <Button handleClick={handleGoodClick} text='Good' />              
            </td>
            <td>
              <Button handleClick={handleNeutralClick} text='Neutral' />              
            </td>
            <td>
              <Button handleClick={handleBadClick} text='Bad' />
            </td>
          </tr>
          <tr>
            <td>
              <p><strong>Statistics</strong></p>
            </td>
          </tr>
            <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'))

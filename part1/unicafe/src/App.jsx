import { useState } from 'react'

const Button = ({label, handler}) => {
  return (
    <td>
      <button onClick={handler}>{label}</button>
      </td>
  )
}
const StatisticLine = ({text, value, units = ""}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{units}</td>
    </tr>
  )
}
const Statistics = ({props}) => {
  function sum(list){
    return list.reduce((a,b) => a + b, 0)
  }
  function avgScore([good, neut, bad]){
   const total = sum([good, neut, bad])
    return (good - bad) / total
  }
  function percentPos([good, neut, bad]){
    const total = sum([good, neut, bad])
     return (good / total) * 100
  }

  if(sum(props) > 0){
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="2" align='left'>
                <h2>Statistics:</h2>
              </th>
            </tr>
          </thead>
          <tbody>
              <StatisticLine text="good" value={props[0]}/>
              <StatisticLine text="neutral" value={props[1]}/>
              <StatisticLine text="bad" value={props[2]}/>
              <StatisticLine text="Number of Responses:" value={sum(props)}/>
              <StatisticLine text="Average:" value={avgScore(props)}/>
              <StatisticLine text="Percent Positive:" value={percentPos(props)} units="%"/>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Statistics:</h2>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3"><h1>Give Feedback</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Button label="good" handler={() => setGood(good + 1)} />
            <Button label="neutral" handler={() => setNeutral(neutral + 1)} />
            <Button label="bad" handler={() => setBad(bad + 1)} />
          </tr>
        </tbody>
      </table>
      <Statistics props={[good, neutral, bad]} />
    </div>
  )
}

export default App
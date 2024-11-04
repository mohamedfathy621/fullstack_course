import { useState } from 'react'
const Header= () =>{
  return (
    <h1>
        give feedback
    </h1>
  )
}
const Feedback_Button=({onVote,text}) =>{
  return(
  <button onClick={onVote}>{text}</button>
  )
  
}
const Stats_Line=({text,value}) =>{
  return(
    <>
    <td>{text}:</td>
    <td>{value}</td>
    </>
  )
}
const Stats= ({good,neutral,bad}) => {
  let total=good+neutral+bad;
  let average=(good-bad)/total;
  let positive=(good/total)*100;
  console.log(average);
  if(total>0){
    return(
      <div>
        <h1>statistics </h1>
        <table>
          <tr>
            <Stats_Line text='good' value={good}/>
          </tr>
          <tr>
            <Stats_Line text='neutral' value={neutral}/>
          </tr>
          <tr>
            <Stats_Line text='bad' value={bad}/>
          </tr>
          <tr>
            <Stats_Line text='all' value={total}/>
          </tr>
          <tr>
            <Stats_Line text='average' value={average}/>
          </tr>
          <tr>
          <Stats_Line text='positive' value={positive+'%'}/>
          </tr>
        </table>
      </div>
      
    )
  }
  else{
    return(
      <p>no feedback given</p>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const cast_vote=(canditate,setVote) =>{
        setVote(canditate+1);
  }
  return (
    <div>
      <Header/>
      <Feedback_Button onVote={()=>cast_vote(good,setGood)} text={'good'}/>
      <Feedback_Button onVote={()=>cast_vote(neutral,setNeutral)} text={'neutral'}/>
      <Feedback_Button onVote={()=>cast_vote(bad,setBad)} text={'bad'}/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
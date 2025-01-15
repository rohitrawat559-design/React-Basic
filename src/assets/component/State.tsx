import React, { useState } from 'react'

function State() {
    const[fruit,setfruit] = useState("Apple")
    const [count, setCounte] = useState(0)

    function handleFruits(){

        setfruit("Banana")
        console.log("line compleded")
        setfruit("orange")
    }
    // const counter = () => {
    //    setCounte(count +)
    // }
  return (
    <div>
      <h1>State in React js</h1>
      <li> {fruit}</li>
      <li> {count}</li>
      <button onClick={handleFruits}> change in fruites</button>
      <button onClick={ ()=> setCounte(count + 1)}> counter </button>
    </div>
  )
}

export default State

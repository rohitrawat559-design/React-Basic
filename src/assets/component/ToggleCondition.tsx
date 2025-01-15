import React, { useState } from 'react'

export default function ToggleCondition() {
    const[count,setCount] = useState(0)
  return (
    <div>
      <h1>Here is multiple condition</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count+1)}>check condition</button>
      {
    count === 0?<h3>Condition 0</h3>
    :count ===1?<h3>Condition 1</h3>
    :count ===2?<h3>Condition 2</h3>
    :count ===3?<h3>Condition 3</h3>
    :count ===4?<h3>Condition 4</h3>
    :count ===5?<h3>Condition 5</h3>
    :count ===6?<h3>Condition 6</h3>
    : <h3>Other Condition</h3>
      }
  
    </div>
  )
}

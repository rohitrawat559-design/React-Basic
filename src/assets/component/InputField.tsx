import React, { useState } from 'react'

function InputField() {

 const[val,setval] = useState("");


  return (
    <div>
        <h1>Get Input Field</h1>
        <input value={val} onChange={(e)=> setval(e.target.value)} type="text" placeholder='Enter the user name' />
        <h2>Hello {val}</h2>
        <button onClick={()=> setval("")}> clear </button>
      
    </div>
  )
}

export default InputField

import React, { useState } from 'react'

function ToggalWithState() {
     const [display, setdisplay] = useState(true)
  return (
    <div>
         
     {
        display?<h1>NoOne</h1>:<h1>Hello Rohit</h1>
     }
       
       <button onClick={() => setdisplay(!display)}> knock-knock</button>

    </div>
  )
}

export default ToggalWithState

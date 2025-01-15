import React from 'react'

function Event() {

    
   const fruits = (name) =>{
    alert(name)
    
   }

   function clickme(){
    alert("this is normal function")

    function clickme(){
        alert("this is second")
    }  
   }
    

    
  return (
    <div>
        <li> this is a fruits </li>
        <button onClick={() => fruits("apple")}> click me</button>
        <button onClick={clickme}> click me 2</button>
      
    </div>
  )
}

export default Event

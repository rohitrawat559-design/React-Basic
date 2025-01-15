import React from 'react'

function Jsxxxx() {
    const name = "Rohit Rawat"
    let path =" https://www.pexels.com/photo/close-photography-of-red-and-pink-rose-56866/"

   
    
    function add(a, b) {

      return a+b ;
    }
     function fruits(){
        return "Apple"
     }

    function operation(a,b,op){
        if(op === "+"){
            return a+b;
        } else if (op === "-"){
            return a-b;
        }else{
            return a*b;
        }
    }
    
  return (
    <div>
        <h1>
            Hello Rohit
        </h1>
        <p> this is sum {add(4,9)}</p>
        <li> this is fun {fruits()}</li>
        <h2> this is operation {operation(9,4,"")}</h2>
        <input type="text" value={name} id='name' />
        <h2>this is flower </h2><br/>
        <img src={path}/>
      
    </div>
  )
}

export default Jsxxxx

import React from 'react'

export default function PropsWithInput() {
    const [input, setInput] = React.useState('')
  return (
    <div>
        <h1> Get the Value of Input Field</h1>
      <input type="text" placeholder='name' value ={input} onChange={(event)=> setInput(event.target.value)} />
      <button onClick={()=>setInput('')}>clear value</button>
      <h2>{input}</h2>
    </div>
  )
}

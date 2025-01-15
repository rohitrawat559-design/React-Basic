import React, { useState } from 'react'

function ControlledComponent() {
    const[name,setname] = useState('');
    const[password,setpassword] = useState('');
    const[email,setemail] = useState('');
  return (
    <div>
      <h1>Here is controlled Component</h1>
      <hr />
      <input  value ={name} onChange={ e =>setname(e.target.value)} type="text" placeholder=" Enter name" />
      <br /><br />
      <input value={password} onChange={ e =>setpassword(e.target.value)} type="password" placeholder="Enter password" />
      <br /><br />
      <input value={email} onChange={ e =>setemail(e.target.value)} type='email' placeholder="Enter email" />
      <br /><br />
      <button>Submit</button>
      <button onClick={ () => (setname(''),setemail(''),setpassword(''))}>Clear</button>
<h1>{name !== '' && name}</h1>
<h1>{password !== '' && password}</h1>
<h1>{email !== '' && email}</h1>

    </div>
 

  )
}

export default ControlledComponent

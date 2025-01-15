import React, { useState } from 'react'

function RadioButtonDropdown() {
    const[gender,setgender] = useState("")
    const[city,setcity] = useState("")
  return (
    <div>
        <h1> Button and Dropdown</h1><hr />
        <h4>Select Gender</h4><br /><br />

        <input onChange={(event)=>setgender( event.target.value)}  checked = {gender == 'male'} type="radio" name='gender' value={'male'} id='male' />
        <label htmlFor="male">Male</label>
        <input onChange={(event)=> setgender(event.target.value)} checked ={gender =='female'} type="radio" name='gender'value={'female'} id='female' />
        <label htmlFor="female">Female</label>
        <input type="radio" onChange={(event)=> setgender(event.target.value)} checked ={gender =='other'}  name='gender'value={'other'} />
        <label htmlFor="other">Other</label>

        <h3>Select gender is : {gender}</h3><hr />
        <br /><br />
        <h4>Select your city</h4>
        <br />
        <select onChange={(event)=>setcity(event.target.value)}>
            <option value="">Select city</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
        </select>

    <br /><br />
    <h3>Selected city is : {city}</h3>
      
    </div>
  )
}

export default RadioButtonDropdown

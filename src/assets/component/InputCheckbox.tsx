import React, { useState } from 'react'

function InputCheckbox() {
    const[skills,setskills] = useState([]);
    
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setskills([...skills,event.target.value]) //add skills
        }
        else{
            setskills([...skills.filter((item)=>item!=event.target.value )]) //remove skills
        }
       
    }
  return (
    <div>
        <h1>Set your Skills</h1>
        <hr />
        <input onChange={handleSkills} type="checkbox" id="html" name="skills" value="html"/>
        <label htmlFor="html">HTML</label><br/><br/>
        
        <input onChange={handleSkills} type="checkbox" id="css" name="skills" value="css"/>
        <label htmlFor="css">CSS</label><br/><br/>
        <input onChange={handleSkills} type="checkbox" id="js" name="skills" value="js"/>
        <label htmlFor="js">JavaScript</label><br/><br/>
        <input onChange={handleSkills} type="checkbox" id="react" name="skills" value="react"/>
        <label htmlFor="react">React</label><br/><br/>
        <h2>{skills}</h2>
      
    </div>
  )
}

export default InputCheckbox

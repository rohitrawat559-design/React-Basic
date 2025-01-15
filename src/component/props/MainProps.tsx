import React, { useState } from 'react'
import PropsUser from './PropsUser'
import PropsClg from './PropsClg'
import PropsStd from './PropsStd'
import PropWithHtml from './PropWithHtml'
import PropsWithInput from './PropsWithInput'


export default function MainProps() {
    let userData ={
        name:'Rohit Rawat',
        email:'rsr@gmail.com',
        age:30,
        }
        let userData1 ={
          name:' jhon',
          email:'jhon@gmail.com',
          age:32,
          }
      
          let CollegeName =['IIT','THDC','NIT','MIT']
          const [Student, setStudent] = useState('')
          
      
          return(
            <>
            
            <PropsUser data={userData} />
            <PropsUser data={userData1} />

            <PropsClg clgData={CollegeName} />

            { Student && <PropsStd   Stdname = {Student}/>}
            <button onClick={()=> setStudent('Rohit')}> changeValue</button>

            <PropWithHtml><h1 style={{color:"blue"}}>hello EveryOne</h1></PropWithHtml> 
            <PropWithHtml><h1 style={{color:"yellow"}}>hello Rohit Rawat</h1>
            <h2 style={{color:"red"}}>Please Login</h2>
            </PropWithHtml> 
            <PropWithHtml><h1>hello EveryOne</h1></PropWithHtml>

            <PropsWithInput />
            </>
          )
}

import React from 'react'
import {employees} from '../../../src/utils/data'

function LoopJSx() {
    
  return (
    <div>
        <h1> List of Emplyees</h1>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Designation</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>(
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.email}</td>
                            <td>{emp.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default LoopJSx

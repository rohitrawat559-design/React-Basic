import React from 'react'

function LoopJSx() {
    const employees =[{name: 'rohit', age:'20',email: 'rohit@gmail.com', designation:'admin',id :'001'},
        {name: 'rahul', age:'21', email: 'rahul@gmail.com', designation:'manager',id :'002'},
        {name: 'ramesh', age:'22', email: 'ramesh@gmail.com', designation:'developer',id :'003'},
        {name: 'ramesh', age:'22', email: 'ramesh@gmail.com', designation:'developer',id :'004'},
        {name: 'ramesh', age:'22', email: 'ramesh@gmail.com', designation:'developer',id :'005'},
        {name: 'ramesh', age:'22', email: 'ramesh@gmail.com', designation:'developer',id :'006'},
    ]
  return (
    <div>
        <h1> List of Emplyees</h1>
        <table border='1'>
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

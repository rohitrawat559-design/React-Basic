import React from 'react'

export default function PropsUser({data}:any) {
    
    console.log(data)
  return (
    <div>
      <h1>This is User Details</h1>
      <hr />
      <h3>Name is : {data.name}</h3>
      <h3>age is : {data.age}</h3>
      <h4> email is : {data.email}</h4>
    </div>
  )
}

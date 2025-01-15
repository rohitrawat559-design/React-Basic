import React from 'react'

export default function PropsClg({clgData}) {
console.log('clgData:', clgData)

  return (
    <div>
      <h1>Hello clg {clgData[1]}</h1>
    </div>
  )
}

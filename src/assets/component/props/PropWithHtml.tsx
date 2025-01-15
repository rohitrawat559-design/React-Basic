import React from 'react'

export default function PropWithHtml({children,color="pink"}) {
  return (
    <div style={{color: color, border:"3px solid green", width:"300px", margin:"3px" }}>
      {children}
    </div>
  )
}
 
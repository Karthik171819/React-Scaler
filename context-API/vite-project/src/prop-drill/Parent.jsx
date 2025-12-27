import React from 'react'
import Child from './Child'

function Parent({familyMessage}) {
  return (
    <div className="parent">
        <h1>Parent{familyMessage.familyName}</h1>
        <Child familyMessage={familyMessage}/>
    </div>
  )
}

export default Parent
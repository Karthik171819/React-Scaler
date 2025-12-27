import React from 'react'
import Parent from './Parent'

function Family({familyMessage}) {
    console.log(familyMessage);
  return (
    <div className="family">
        <Parent familyMessage={familyMessage}/>
    </div>
  )
}

export default Family
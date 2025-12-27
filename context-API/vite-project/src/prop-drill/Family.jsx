import React from 'react'
import Parent from './Parent'

function Family({familyMessage}) {
    console.log(familyMessage);
  return (
    <div className="family">
        <Parent/>
    </div>
  )
}

export default Family
import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

function Child({familyMessage}) {
  return (
    <div className='children'>
        <h1>Child {familyMessage.familyName}</h1>
        <GrandDaughter familyMessage={familyMessage}/>
        <GrandSon familyMessage={familyMessage}/>
    </div>
  )
}

export default Child
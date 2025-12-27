import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

function Child() {
  return (
    <div className='children'>
        <h1>Child</h1>
        <GrandDaughter />
        <GrandSon />
    </div>
  )
}

export default Child
import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

function Child() {
  return (
    <div>
        <GrandDaughter/>
        <GrandSon/>
    </div>
  )
}

export default Child
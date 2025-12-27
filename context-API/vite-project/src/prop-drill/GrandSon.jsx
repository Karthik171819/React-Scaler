import React from 'react'
import { FamilyContext } from './FamilyContext'
import { useContext } from 'react';

function GrandSon() {
  const familyMessage = useContext(FamilyContext);
  return (
    <div className='gson'>
        <h3>GrandSon {familyMessage.familyName}</h3>
    </div>
  )
}

export default GrandSon
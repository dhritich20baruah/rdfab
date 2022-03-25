import React, { useState } from 'react'
import items from './img/Images'
import Display from './Display'

const Grill = () => {
  const [grill, setGrill]= useState(items)
  
//  setGrill(items.filter(item=>item.category === "grills"))
  return (
    <>
    <div className='flex-row p-10'>
      <Display items={grill}/>
    </div>
    </>
  )
}

export default Grill
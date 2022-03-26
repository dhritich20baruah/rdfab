import React, { useState, useEffect } from 'react'
import items from './img/Images'
import Display from './Display'

const Grill = () => {
  const [grill, setGrill]= useState(items)

  useEffect(() => {   
    setGrill(items.filter(item=>item.category === "grills"))
  }, [])
  console.log(grill)
  return (
    <>
    <div className='flex-column w-80'>
    
    <Display items={grill}/>
      
    </div>
    </>
  )
}

export default Grill
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
    <div className=''>
    
    <Display items={grill}/>
      
    </div>
    </>
  )
}

export default Grill
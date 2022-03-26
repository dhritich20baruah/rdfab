import React from 'react'

const Display = (props) => {
    const { items } = props
  return (
    <div className='flex-row'>
    {items.map((item)=>{
      return(
        <div className='w-fit'>
        <img src={item.img} alt="" className="w-80 object-cover"/>
        <h2 className='text-xl text-center'>{item.title}</h2>
        <h2 className='text-xl text-center'>{item.category}</h2>
        </div>
        
      )
    })}
  </div>
  )
}

export default Display
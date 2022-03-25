import React from 'react'

const Display = (props) => {
    const { items } = props
  return (
    <div className='flex-row'>
    {items.map((item)=>{
      return(
        <div>
        <img src={item.img} alt="" className="w-40 object-cover"/>
        <h2 className='text-xl'>{item.title}</h2>
        </div>
      )
    })}
  </div>
  )
}

export default Display
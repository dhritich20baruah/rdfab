import React from 'react'

const Display = (props) => {
    const { items } = props
  return (
    <div className='flex-row'>
    {items.map((item)=>{
      return(
        <div className='w-96 mx-auto my-10'>
        <img src={item.img} alt="" className="w-fit object-cover mx-auto"/>
        <h2 className='text-xl text-center mx-auto'>{item.title}</h2>
      
        </div>
        
      )
    })}
  </div>
  )
}

export default Display
import React from 'react'

const Display = (props) => {
  const { items } = props
  return (
    <div className='grid md:grid-cols-3 gap-4'>
      {items.map((item) => {
        return (
          <div className='mx-auto my-10'>
            <img src={item.img} alt="" className="w-80 h-[80%] object-contain mx-auto" />
            <h2 className='text-xl text-center mx-auto'>{item.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Display
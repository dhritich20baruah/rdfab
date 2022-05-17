import React from 'react'

const Categories = (props) => {
  const {filterItems, categories} = props

  return (
    <>
     <h1 className='text-black text-2xl text-center mx-8'>CATEGORIES</h1>
    <div className='btn-container text-center mt-5 space-x-5 text-xl text-black'>
      <button className="filter-btn hover:text-red-400" onClick={()=>filterItems('all')}> 
      All
      </button>
      {categories.map((item)=>{
        return <button className="filter-btn hover:text-red-400" onClick={()=>filterItems(item)}>{item}</button>
      })}
     
    </div>
    </>
  )
}

export default Categories
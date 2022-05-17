import React, { useState } from 'react'
import Categories from './Categories'
import items from './data'
import Product from './Product'

const categories = items.map((item)=>item.category).filter((value, index, self) => self.indexOf(value) === index)

const Services = () => {
  const [prodItems, setProdItems] = useState(items)

  const filterItems = (category) =>{
    if(category==='all'){
      setProdItems(items)
    }
    else{
      setProdItems(items.filter(item=>item.category === category))
    }
  }
  return (
    <div className='bg-slate-200'>
      <h1 className='text-black text-4xl text-center mx-8'><u>OUR SERVICES</u></h1>
      <Categories categories={categories} filterItems={filterItems}/>
      <div className="services-card flex-row md:mx-40 h-[90vh] overflow-auto">
        <Product items={prodItems}/>
      </div>
    </div>
  )
}

export default Services
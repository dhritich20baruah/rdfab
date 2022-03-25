import React, { useState } from 'react'
import Catalogue from './Catalogue'
import Categories from './Categories'
import items from './data'
import Product from './Product'

const categories = items.map((item)=>item.category).filter((value, index, self) => self.indexOf(value) === index)

console.log(categories)

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
    <div className='bg-gradient-to-br from-slate-700 to-slate-900'>
      <h1 className='text-white text-4xl text-center mx-8'><u>OUR SERVICES</u></h1>
      <Categories categories={categories} filterItems={filterItems}/>
      <div className="services-card flex-row mx-40 h-[90vh] overflow-auto">
        <Product items={prodItems}/>
      </div>
    </div>
  )
}

export default Services
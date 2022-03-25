import React from 'react'

const Product = (props) => {
    const { items } = props
  return (
    <div>
        {items.map((item)=>{
            return(
                <article className="productitem w-[80] h-[150] bg-white flex p-5">
                    <img src={item.img} alt={item.title} className="w-64 h-60 object-cover"/>
                    <div className="productinfo p-5">
                        <header>
                            <h4 className='text-2xl p-2 font-bold'>{item.title}</h4>
                            <h4 className="price text-2xl p-2">Price: <span className="text-red-600">{item.price}</span></h4>
                            <p className="itemdesc text-xl p-2">{item.desc}</p>
                        </header>
                    </div>
                </article>
            )
        })}
        
    </div>
  )
}

export default Product
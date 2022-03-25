import React from 'react'
import rana from './rana.jpg'
import dhriti from './dhriti.jpg'
import ram from './ram.jpg'

const About = () => {
  return (
    <div className='bg-gradient-to-br from-slate-500 to-slate-900'>
      <h1 className='text-white text-4xl text-center mx-8'><u>ABOUT</u></h1>
      <p className='text-white text-xl text-center p-11'>R. D. Fabrications and Engineering Works was formed in 2017 by Ranacharya Borah and Dhritiman Chandra Baruah. It provides services in the form of structural  steelworks; general welding and repairs; rolling shutters; decorative gates and grills; roofing and truss and any miscellanous weld jobs. Based in Dibrugarh, Assam it is centrally located to carry out installations for business and households, all over Assam. The services provided also includes steel supplies, decorative rails and gates to aluminium windows and partitions or repairs. We pride ourselves on great customer care and we ensure that all of our customer's requirements are met and all the options available are explored.</p>
      {/* TEAM */}
      <h1 className='text-white text-2xl text-center mx-8 my-6'><u>THE TEAM</u></h1>
      <div className="team flex justify-between px-40">
        <div className="rana bg-black">
            <img src={rana} alt="" className='h-60 w-60 object-cover'/>
            <h2 className='text-xl text-white p-2'>Ranacharya Borah</h2>
            <h2 className='text-red-600 p-2 text-lg italic'>Partner</h2>
        </div>
        <div className="dhriti bg-black">
            <img src={dhriti} alt="" className='h-60 w-60 object-cover'/>
            <h2 className='text-xl text-white p-2'>Dhritiman Ch. Baruah</h2>
            <h2 className='text-red-600 text-lg italic p-2'>Partner</h2>
        </div>
        <div className="ram bg-black">
            <img src={ram} alt="" className='h-60 object-cover w-60'/>
            <h2 className='text-xl text-white p-2'>Ram Barman</h2>
            <h2 className='text-red-600 text-lg italic p-2'>Lead Weld Operator</h2>
        </div>
      </div>

      {/* testimonials */}
      <h1 className='text-white text-2xl text-center mx-8 my-6'><u>HAPPY CUSTOMERS</u></h1>
      <div className="testimonials flex space-x-2">
        <div className="remarks">
          <h2 className='bg-slate-700 text-white italic'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit in et, iste pariatur incidunt dignissimos qui dolorum quod rerum nesciunt."</h2>
          <h2>Brindyaban Gohain</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-700 text-white italic'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit in et, iste pariatur incidunt dignissimos qui dolorum quod rerum nesciunt."</h2>
          <h2>Indian Railways</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-700 text-white italic'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit in et, iste pariatur incidunt dignissimos qui dolorum quod rerum nesciunt."</h2>
          <h2>Dhruborshi Pd. Sen</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-700 text-white italic'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit in et, iste pariatur incidunt dignissimos qui dolorum quod rerum nesciunt."</h2>
          <h2>Pratul Baishya</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-700 text-white italic'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit in et, iste pariatur incidunt dignissimos qui dolorum quod rerum nesciunt."</h2>
          <h2>Dr. Ranjan Baruah</h2>
        </div>
      </div>
    </div>
  )
}

export default About
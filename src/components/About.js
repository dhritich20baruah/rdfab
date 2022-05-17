import React from 'react'
import rana from './images/Ranafb.jpg'
import dhriti from './images/dhriti.jpg'
import ram from './images/ram.jpg'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import pic5 from './images/pic5.jpg'
import pic6 from './images/weld4.jpg'
import pic7 from './images/weld5.jpg'
import pic8 from './images/weld7.jpg'

const About = () => {
  return (
    <div className='bg-slate-200'>
      <h1 className='text-black text-4xl text-center mx-8'><u>ABOUT</u></h1>
      <p className='text-black text-xl text-center p-11'>R. D. Fabrications and Engineering Works was formed in 2017 by Ranacharya Borah and Dhritiman Chandra Baruah. It provides services in the form of structural  steelworks; general welding and repairs; rolling shutters; decorative gates and grills; roofing and truss and any miscellanous weld jobs. Based in Dibrugarh, Assam it is centrally located to carry out installations for business and households, all over Assam. The services provided also includes steel supplies, decorative rails and gates to aluminium windows and partitions or repairs. We pride ourselves on great customer care and we ensure that all of our customer's requirements are met and all the options available are explored.</p>
      {/* TEAM */}
      <h1 className='text-black text-2xl text-center mx-8 my-6'><u>THE TEAM</u></h1>
      <div className="team md:flex justify-between md:px-40">
        <div className="rana bg-black shadow-2xl shadow-slate-700">
            <img src={rana} alt="" className='h-60 w-60 object-cover mx-auto'/>
            <h2 className='text-xl text-white p-2 text-center'>Ranacharya Borah</h2>
            <h2 className='text-red-600 p-2 text-lg italic text-center'>Chief Manager, Founder</h2>
        </div>
        <div className="dhriti bg-black shadow-2xl shadow-slate-700">
            <img src={dhriti} alt="" className='h-60 w-60 object-cover mx-auto'/>
            <h2 className='text-xl text-white p-2 text-center'>Dhritiman Ch. Baruah</h2>
            <h2 className='text-red-600 text-lg italic p-2 text-center'>Project Manager, Co-Founder</h2>
        </div>
        <div className="ram bg-black shadow-2xl shadow-slate-700">
            <img src={ram} alt="" className='h-60 object-cover w-60 mx-auto'/>
            <h2 className='text-xl text-white p-2 text-center'>Ram Barman</h2>
            <h2 className='text-red-600 text-lg italic p-2 text-center'>Lead Weld Operator</h2>
        </div>
      </div>

      {/* testimonials */}
      <h1 className='text-black text-2xl text-center mx-8 my-10'><u>HAPPY CUSTOMERS</u></h1>
      <div className="testimonials md:flex space-x-2 px-4">
        <div className="remarks">
          <h2 className='bg-slate-100 p-3 text-black italic shadow-2xl shadow-slate-800'>"I ordered a variety of custom jobs including equipment for our farm. They delivered each order according to specifications."</h2>
          <h2 className='text-white'>-Brindyaban Gohain</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-100 p-3 text-black italic shadow-2xl shadow-slate-800'>"The job was satisfactory and was completed within the stipulated time period."</h2>
          <h2 className='text-white'>-HYT Engineering</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-100 p-3 text-black italic shadow-2xl shadow-slate-800'>"I had to renovate my house. So I approached R D Fabrications. Not only did they deliver on time but also saved me a lot money."</h2>
          <h2 className='text-white'>-Adv. Dhruborshi Pd. Sen</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-100 p-3 text-black italic shadow-2xl shadow-slate-800'>"They fabricated my front and back security grills and also helped with the installation. I am extremely happy with the experience."</h2>
          <h2 className='text-white'>-Pratul Baishya</h2>
        </div>
        <div className="remarks">
          <h2 className='bg-slate-100 p-3 text-black italic shadow-2xl shadow-slate-800'>"I am extremely happy and satisfied with the service."</h2>
          <h2 className='text-white'>Dr. Ranjan Baruah</h2>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid md:grid-cols-4 gap-4 my-10">
        <div className="snap-center m-3">
          <img src={pic1} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic2} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic3} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic4} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic5} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic6} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic7} alt="" className='w-96 h-96 object-cover'/>
        </div>
        <div className="snap-center m-3">
          <img src={pic8} alt="" className='w-96 h-96 object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default About
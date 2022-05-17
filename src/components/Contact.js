import React from 'react'
import location from './images/location.JPG'

const Contact = () => {
  return (
    <div className='bg-gradient-to-br from-blue-900 to-slate-700 h-[100vh]'>
      <h1 className="text-3xl text-center py-4 text-yellow-300">Contact Us</h1>
      <div className="md:flex justify-evenly">
        <div className="contact-info space-y-3 text-white">
            <h2 className='text-2xl underline'>Address:</h2>
            <p className='text-xl'>East Chowkidinghee</p>
            <p className='text-xl'>Near VKV School</p>
            <p className='text-xl'>Dibrugarh, Assam</p>
            <h2 className='text-xl underline'>Phone:</h2>
            <p className='text-xl'>+91-9435747617, 9954481708</p>
            <h2 className='text-xl underline'>Email:</h2>
            <p className='text-xl'>rdfab2017@gmail.com</p>
        </div>
        <div className="map space-y-3">
            <h2 className='text-2xl underline text-white mb-3'>Location:</h2>
            <a href="https://www.google.co.in/maps/place/27%C2%B028'41.8%22N+94%C2%B054'47.2%22E/@27.4776477,94.9107806,695m/data=!3m1!1e3!4m5!3m4!1s0x0:0xbd03f0e38ea373ca!8m2!3d27.4782644!4d94.9131199?hl=en&authuser=0">
            <img src={location} alt="" />
            </a>
        </div>
      </div>

    </div>
  )
}

export default Contact
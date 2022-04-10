import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Nav = () => {
  const [visible, setVisible] = useState("hidden")

  return (
    <>
      <div>
        <div className="navbar bg-black flex justify-between">
          <h2 className='text-white p-4 font-bold'>R D Fabrications & Engg Works</h2>
          <ul className="text-white md:flex space-x-4 px-2 py-4 hidden">            
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Catalogue">Catalogue</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
          <div class="hamburger inline-block p-4 cursor-pointer md:hidden" onClick={()=>setVisible(!visible)}>
          <div class="line h-0.5 w-5 my-1 bg-white"></div>
          <div class="line h-0.5 w-5 my-1 bg-white"></div>
          <div class="line h-0.5 w-5 my-1 bg-white"></div>
          </div>
        </div>
        <div className={visible?"hidden":null}>
          <ul className='bg-black text-white px-2 py-2' id="menu">
          <li><Link to='/Home'>Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Catalogue">Catalogue</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
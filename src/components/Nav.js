import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Nav = () => {
  return (
    <>
      <div>
        <div className="navbar bg-black">
          <ul className="text-white flex space-x-4 px-2 py-2">
            <li>         
            <h2 className='text-white'>R D Fabrications</h2>
            </li>
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
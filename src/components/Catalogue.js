import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Gate from './Gate'
// import Grill from './Grill'
// import Truss from './Truss'
// import { Routes, Route } from 'react-router-dom'
 
const Catalogue = () => {
  return (
    <>
        <div className="catnav">
            <ul className='text-black flex p-3 space-x-2 justify-between mx-40'>
                <li className='bg-red-500 px-5 py-2 text-xl text-white hover:bg-red-800'><Link to="/catalogue/Grill">Grill</Link></li>
                <li className='bg-red-500 px-5 py-2 text-xl text-white hover:bg-red-800'><Link to="/catalogue/Gate">Gate</Link></li>
                <li className='bg-red-500 px-5 py-2 text-xl text-white hover:bg-red-800'><Link to="/catalogue/Truss">Truss</Link></li>
            </ul>
            <Outlet/>
        </div>
      </>
  )
}

export default Catalogue
import React, {useState} from 'react'
// import { Link, Outlet } from 'react-router-dom'
import Gate from './catalogue/Gate'
import Grill from './catalogue/Grill'
import Truss from './catalogue/Truss'
 
const Catalogue = () => {
  const [display, setDisplay] = useState(<Grill/>)


  return (
    <>
        <div className="catnav">
            <ul className='flex flex p-3 space-x-2 justify-between md:mx-40'>
                <li className='bg-red-500 px-5 py-2 text-xl text-white hover:bg-red-800' onClick={()=>setDisplay(<Grill/>)}>Grill</li>
                <li className='bg-red-500 px-5 py-2 text-xl text-white hover:bg-red-800' onClick={()=>setDisplay(<Gate/>)}>Gate</li>
                <li className='bg-red-500 px-5 py-2 text-xl text-white hover:bg-red-800' onClick={()=>setDisplay(<Truss/>)}>Truss</li>
            </ul>
            {/* <Outlet/> */}
            <div>
                {display}
            </div>
        </div>
      </>
  )
}

export default Catalogue
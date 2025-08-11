import React from 'react'
import { Link } from 'react-router-dom'

function Meet() {
  return (
    <div className="min-h-screen bg-white text-black  ">
       <nav className="flex flex-row justify-between items-center py-4 px-6 text-black">
        <h2 className="text-2xl font-medium">Quick Meet</h2>
        <div className="navlist flex gap-4 cursor-pointer">
                 
                  <div className='flex items-center gap-4'>
                  <Link to ="/history" className="hover:text-[#FF9839]">History</Link>
                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer
            hover:bg-blue-800"> Logout
              </button>
                   </div>
                </div>
        </nav>
         <div className= "h-35 ">
            <h2 className="text-xl md:text-2xl font-bold leading-tight py-4 px-6 text-black"> 
            Providing Quality Video Call</h2>

          <div className="flex gap-2 items-center px-6">
         <input
         type="text"
         placeholder="Meeting Code"
         className="border border-gray-300  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF9839]"
           />
           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer
            hover:bg-blue-800"> Join
              </button>
               </div>
       </div>
          <div>
          
          </div>

    </div>
      
  )
}

export default Meet

import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Landingpage() {
  return (
    <div>
      
      <nav className="flex flex-row justify-between items-center py-4 px-6">
        <h2 className="text-2xl font-medium">Quick Meet</h2>
        <div className="navlist flex gap-4 cursor-pointer">
          <button className="hover:text-[#FF9839]">Join as guest</button>
          <div className='flex items-center gap-4'>
          <Link to ="/register" className="hover:text-[#FF9839]">Register</Link>
          <Link to="/login" className="bg-[#FF9839] text-white px-3 py-2 rounded-lg hover:bg-[#e57f24] transition-colors duration-200">
           Login</Link>
           </div>
        </div>
      </nav>

      
      <div className="landingmain flex flex-col md:flex-row justify-between items-center px-6">
       
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#FF9839]">Connect</span> with your<br />
            Loved Ones
          </h1>
          <p className="text-xl">Cover a distance by Quick Meet</p>
          <button className="bg-[#FF9839] text-white px-6 py-3 rounded-lg hover:bg-[#e57f24] transition-colors duration-200">
            Get Started
          </button>
        </div>

      
        <div className="landingphoto h-[80vh] w-auto flex items-center justify-center mt-6 md:mt-0">
          <img
            className="h-full object-contain"
            src="https://stream-meet-delta.vercel.app/mobile.png"
            alt="Landing"
          />
        </div>
      </div>
      
         
         
    </div>
    
   
    
  );
}

export default Landingpage;

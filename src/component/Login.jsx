import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Meet from './Meet';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { addUser } from '../utills/userSlice';




function Login() {
    const [emailId, setEmailId] = useState("");
       const [password, setPassword] = useState("");
       const [error,setError] = useState("")
       
         const dispatch = useDispatch();
         const navigate = useNavigate();

           const handlLogin = async()=>{
                try{
                   const res= await axios.post( "http://localhost:7777/login",{
                    emailId,password
                   }, {withCredentials:true})
                  dispatch(addUser(res.data));
                  return navigate("/meet");

                }catch(err){
                 setError(err?.response?.data || " something went wrong")
                }

           
        }
           
     
  return (
   <div className="flex flex-col items-center justify-center my-15 bg-base-100 gap-4">
    <div className="card card-border bg-base-300 w-96 "> 
  <div className="card-body">
    <h2 className="card-title flex justify-center mb-5 ">Login</h2>

  <div className="flex justify-center mb-5">
    <label className="input validator flex justify-center">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className="flex justify-center"
    type="text"
    value={emailId}
    placeholder="Email Id"
    onChange={(e)=> setEmailId(e.target.value)}
  />
</label>
</div>
  <div className="flex justify-center">
<label className="input validator flex justify-center">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className="flex justify-center"
    type="text"
    value={password}
    placeholder="Password"
    onChange={(e)=> setPassword(e.target.value)}
  
   
  />
</label>
</div>
</div>

    <p className="text-red-500 flex justify-center"></p>
    <div className="card-actions justify-center my-5">
      <button onClick={handlLogin} className="btn btn-primary " >Login</button>
    </div>
  </div>
<div className="card card-bordered bg-base-300 w-96 shadow-md">
  <div className="card-body text-center">
    <p>
      Don’t have an account?
      <Link to="/Register" className="link link-primary ml-1">
         Register
      </Link>
    </p>
  </div>
</div>

        </div>
 
  )
}

export default Login

import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets_frontend/assets"
import { useState } from "react";
export default function Navbar(){
  const navigate=useNavigate();
  const [showmenu,setshowmenu]=useState(false);
  const [token,settoken]=useState(true);
  return(
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-500">
      <img className="w-45 cursor-pointer" onClick={()=>{navigate(`/`)}} src={assets.logo} alt="no image found"/>  
    <ul className="hidden md:flex items-start gap-5 font-medium"> 
      <NavLink to='/' className="py-1" ><li>Home</li>
      <hr className="border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden"/>
      </NavLink>
      <NavLink to='/doctors' className="py-1" ><li>All Doctors</li>
      <hr className="border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden"/>
      </NavLink>
      <NavLink  to='/contact' className="py-1" ><li>Contact Us</li>
      <hr className="border-none outline-none bg-primary h-0.5 w-3/5 m-a uto hidden"/>
      </NavLink>
      <NavLink  to='/about' className="py-1" ><li>About Us</li>
      <hr className="border-none outline-none bg-primary h-0.5 w-3/5 m-auto hidden"/>
      </NavLink>
    </ul>
    <div className="flex items-center gap-4">
      {token ? 
      <div className="flex items-center cursor-default group relative gap-2">
        <img className="w-8 rounded-full" src={assets.profile_pic}/>
          <img className="w-2.5 " src={assets.dropdown_icon}/>
          <div className="absolute  pt-14 top-0 right-0 text-base text-gray-500 z-20 font-medium hidden group-hover:block" >
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p onClick={()=>{navigate('/myprofile')}} className="hover:text-black cursor-pointer">My Profile</p>
              <p onClick={()=>{navigate('/myappointments')}} className="hover:text-black cursor-pointer">My Appointments</p>
              <p onClick={()=>{settoken(false)}} className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
      </div>
      :<button onClick={()=>{navigate('./login')}} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"> Create Account</button>
      }
      
    </div>
    </div> 
  )
}
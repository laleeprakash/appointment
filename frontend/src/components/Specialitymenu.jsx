import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

function Specialitymenu(){
  return(
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium"> Find by Speciality </h1>
      <p className="sm: w-1/3 text-center text-sm">Simple browse through our extensive list of trusted Doctors,<br/>  schedule your appointment hassle-free.</p>
      <div className="flex sm:justify-center gap-5 pt-5 w-full overflow-scroll">
        {specialityData.map((item,index)=>(
            <Link  onClick={()=>scrollTo(0,0)}className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:scale-50	  transition-all duration-1000	" key={index} to={`/doctors/${item.speciality}`}> 
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p> {item.speciality} </p>
             </Link>
        ))}
      </div>
    </div>
  )
}
export default Specialitymenu;   
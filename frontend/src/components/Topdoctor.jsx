import { Navigate, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

function Topdoctor(){
  const navigate=useNavigate(); 
  const {doctors} =useContext(Appcontext)
  return(
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
        <p className="sm:w-1/3 text-sm text-center">Simple browse through our extensive list of trusted Doctors</p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px- sm:px-0">
          {doctors.slice(0,10).map((item,index)=>(
            <div  onClick={()=>navigate(`/appointment/${item._id}`)}key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-3 transition-all duration-200">
              <img  className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center  text-center text-sm text-green-500 gap-2">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p><p>Available</p>
                </div>
                <p className="text-gray-500 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>

          ))}
        </div>
        <button onClick={()=>{navigate(`/doctors`);scrollTo(0,0)}} className="bg-blue-100 text-gray-600 px-20 rounded-full py-3  mt-10 "> More </button>
    </div>
  )
}
export default Topdoctor;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
const Doctors=()=>{
  const {speciality}= useParams();
  const navigate=useNavigate()
  const [filterDoc,setfilterDoc]=useState([]);
  const {doctors}=useContext(Appcontext);
  const applyFilter=()=>{
    if(speciality){
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } 
    else{
      setfilterDoc(doctors);
    }
  }
  useEffect(()=>{
    applyFilter() 
  },[doctors,speciality])

  return(
    <div> 
     <p className="font-semibold text-xl text-gray-800">Browse through the Doctors specialist .</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex-col gap-4 text-sm text-gray-700 ">
          <p onClick={()=>{speciality === 'General physician' ? navigate('/doctors'):navigate(`/doctors/General physician`)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==="General physician"? "bg-indigo-50 text-black " : ""}`}>General physician</p>
          <p onClick={()=>{speciality === 'Gynecologist' ? navigate('/doctors'):navigate(`/doctors/Gynecologist`)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==="Gynecologist"? "bg-indigo-50 text-black " : ""}`}>Gynecologist</p>
          <p onClick={()=>{speciality === 'Dermatologist' ? navigate('/doctors'):navigate(`/doctors/Dermatologist`)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==="Dermatologist"? "bg-indigo-50 text-black " : ""}`}>Dermatologist</p>
          <p onClick={()=>{speciality === 'Pediatricians' ? navigate('/doctors'):navigate(`/doctors/Pediatricians`)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==="Pediatricians"? "bg-indigo-50 text-black " : ""}`}>Pediatricians</p>
          <p onClick={()=>{speciality === 'Neurologist' ? navigate('/doctors'):navigate(`/doctors/Neurologist`)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==="Neurologist"? "bg-indigo-50 text-black " : ""}`}>Neurologist</p>
          <p onClick={()=>{speciality === 'Gastroenterologist' ? navigate('/doctors'):navigate(`/doctors/Gastroenterologist`)}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality ==="Gastroenterologist"? "bg-indigo-50 text-black " : ""}`}>Gastroenterologist</p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
        {
          filterDoc.map((item,index)=>(
            <div  onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-3 transition-all duration-200">
              <img  className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center  text-center text-sm text-green-500 gap-2">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p><p>Available</p>
                </div>
                <p className="text-gray-500 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>

          ))
        }
        </div>
      </div>
    </div>
  )
}
export default Doctors;
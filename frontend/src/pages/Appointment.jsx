import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import { assets } from "../assets/assets_frontend/assets";

function Appointment(){
  const {docId} =useParams();
  const {doctors,rupee}=useContext(Appcontext);
  const [docInfo,setdocInfo]=useState(null)
  const [docslot,setdocslot]=useState([])
  const [slotindex,setslotindex]=useState(0)
  const [slottime,setslottime]=useState('')
  const fetchInfo = async ()=>{
     const docInfo=doctors.find(doc => doc._id === docId )
     setdocInfo(docInfo)
 
  }
const getAvailableSlots= async()=>{
  setdocslot([])
  let today =new Date();
  for(let i=0;i<7;i++){
    // getting date with index ......
    let currentdate = new Date(today)
    currentdate.setDate(today.getDate()+i)
    //setting the time of the date with index  
    let endtime =new Date();
     endtime.setDate(today.getDate()+1)
     endtime.setHours(21,0,0,0)
//setting hours   
if(today.getDate === currentdate.getDate()){
  currentdate.setHours(currentdate.getHours()>10 ? currentdate.getHours()+1 : 10 )
  currentdate.setMinutes(currentdate.getMinutes()>30 ?30 : 0)
}
else{
currentdate.setHours(10)
currentdate.setMinutes(0)
}
  while(currentdate < endtime ){
    let formattedtime=currentdate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
    
  }

  }
}
  useEffect(()=>{
    fetchInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])
  return docInfo && (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="" />
        </div>
        <div  className="flex-1 border border-gray-600 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
         {/*------------------------docInfo : name degree experience--------------- */}
          <p className="flex items-center text-gray-900 text-2xl font-medium gap-2">{docInfo.name} 
          <img  className="w-5"src={assets.verified_icon} alt="" />
          </p>
          <div className="flex text-center gap-2 text-gray-700 mt-1 text-sm">
            <p> {docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-sm rounded-full">{docInfo.experience}</button>
          </div>
          {/*---------------Doctor about------------- */}
          <div>
            <p className="flex items-center gap-1 font-medium text-sm mt-3 text-gray-900 "> About <img src={assets.info_icon} alt="" /></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about} </p>
          </div>
          <p className="text-gray-500 mt-4 font-medium">
            Appointment fees : <span className="text-gray-600"> {rupee} {docInfo.fees} </span></p>
        </div>
      </div>
    </div>
  )
}
export default Appointment;
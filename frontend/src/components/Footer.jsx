import { Navigate, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

function Footer(){
  const navigate=useNavigate();
  return(
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-35 text-sm">
        {/*-----------------left side ---------------------- */}
        <div>
          <img  className="mb-5 w-40 cursor-pointer
           " src={assets.logo} onClick={()=>{navigate('/')}}  alt="" />
          <p className="wd-full leading-7 md:w-2/3 text-gray-600">
            <span className="font-semibold text-black">Thank you for scheduling your appointment with us. </span>  <br></br>
            Your health and well-being are our top priority.  If you need to reschedule, have any questions, or require additional assistance, please don't hesitate to contact our office. Our friendly staff is here to help ensure you receive the best care possible.
            </p>
        </div>
          {/*----------------- end ofleft side ---------------------- */}
          {/*-----------------   centre ---------------------- */}
        <div>
            <p className="text-xl mb-5 font-medium">COMPANY</p>
            <ul className="flex flex-col text-gray-700 gap-2">
              <li onClick={()=>{navigate(`/`)}} className="cursor-pointer">Home</li>
              <li onClick={()=>{navigate(`/contact`)}} className="cursor-pointer" >Contact Us</li>
              <li onClick={()=>{navigate(`/about`)}} className="cursor-pointer" >About us</li>
              <li>privacy policy</li>
            </ul>
        </div>
          {/*-----------------end of centre ---------------------- */}
            {/*-----------------right side ---------------------- */}
        <div>
          <p className="text-xl mb-5 font-medium">GET TOUCH-IN</p>
          <ul className="flex flex-col text-gray-700 gap-2">
            <li>8553553538</li>
            <li>vinsmokeSanji@gmail.com</li>
          </ul>
        </div>
          {/*-----------------end of right side ---------------------- */}
      </div>
      {/*end of footer  */}
      <div>
        <hr/>
        <p className="text-center my-3 font-semibold text-2xl">copyright 2024 © <span className=" cursor-pointer font-bold text-3xl" > prescripto</span> All right reversed.</p>
      </div>
    </div>
  )
}
export default Footer;
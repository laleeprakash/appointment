import React from "react";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Inputbox } from "../components/Inputbox";
const Login=()=>{
  return(
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center ">
      <div className="rounded-lg bg-white   text-center  w-96">
        <Heading label={"Sign up "}/>
        <Subheading label={"enter your infomation to access account"}/>
        <Inputbox label={"First Name"} placeholder={"John"}/>
        <Inputbox label={"Last Name"}   placeholder={"Doe"}/>
        <Inputbox label={"User Name"}  placeholder={"JohnDoe12@gmail.com"}/>
        <Inputbox label={"Password"} placeholder={"************"}/>
        </div>
        </div>  
        </div>
  )
}
export default Login;
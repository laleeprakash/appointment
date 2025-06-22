import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export  const Appcontext=createContext();
const Appcontextprovider=(props)=>{
  const rupee='$'
  const value={
doctors,rupee
  }
  return(
    <Appcontext.Provider value={value}>
      {props.children}
    </Appcontext.Provider>
  )
}
export default Appcontextprovider
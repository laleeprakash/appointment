export function Inputbox({label,placeholder,onChange,type}){
  return(
    <div className="p-1">
      <div className=" p-2 px-3 text-2xl font-normal text-left py-2 ">
        {label}
      </div>
     <input  type={type} onChange={onChange} placeholder={placeholder} className=" text-xl w-80 p-1 rounded-md	text-center border-4 border-black"/>
    </div>
  )
}
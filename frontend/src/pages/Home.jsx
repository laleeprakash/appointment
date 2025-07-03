import Banner from "../components/Banner";

import Header from "../components/header";
import Specialitymenu from "../components/Specialitymenu";
import Topdoctor from "../components/Topdoctor";

const Home = ()=>{
  return(
    <div>
   <Header/>
   <Specialitymenu/>
    <Topdoctor/>
    <Banner/>


    </div>
  )
}
export default Home;
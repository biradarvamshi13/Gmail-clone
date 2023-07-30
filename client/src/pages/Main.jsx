import { useState } from "react";
 import Header from "../components/Header";
 import SideBar from "../components/SideBar";


 
  const Main = ()  => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
      console.log("Toggle drawer clicked!");
      setOpenDrawer((prevState) => !prevState);
    };
    


    return (
        //<div> hello from Main </div>
      <div>

          <Header toggleDrawer={toggleDrawer} />
          <SideBar openDrawer={openDrawer} />   
          <div> Display main</div>      

      </div>
      
    )
  }
    
  export default Main;

import React from "react";
import { Outlet } from "react-router-dom";
import SiBar from "./SiBar";

const DashboardLayout = () => {
    return ( 
        <div className="flex gap-4 flex-col md:flex-row"> 
            <SiBar/>       
            <Outlet/>
        </div>
     );
}
 
export default DashboardLayout;
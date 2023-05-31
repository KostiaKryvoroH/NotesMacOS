import React from "react";

import Workspace from "./WorkSpace";
import Sidebar from "./Sidebar";

import '../style/main.css'

const Main = () => {
    return (
        <div className="main_section"> 
            <Sidebar />
            <Workspace />
        </div>
    )
}

export default Main;
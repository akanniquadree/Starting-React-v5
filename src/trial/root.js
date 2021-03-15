import React from "react"
import Navbar from "./component/nav";
function Root (){
    return(
        <div>
            <div><Navbar/></div>
            <div>{props.children}</div>
        </div>
    )
}
export default Root;
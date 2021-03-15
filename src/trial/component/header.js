import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
function Header (){
        return(
            <div>
                <div className="header">
                    <Link to="/">
                        <h2>PHOTIS CAR WASH</h2>
                    </Link>
                </div>
            </div>
        )
}
export default Header;
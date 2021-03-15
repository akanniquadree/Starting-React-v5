import React, {useState, useEffect} from "react";
import { Button } from "./button";
import "./nav.css";
  
export const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () =>setClick(!click);
    const closeBugger = () =>setClick(false);
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton (false);
        }else{
            setButton (true);
        }
    }
    useEffect(()=>{
        setButton()
    },[])
    window.addEventListener("resize", showButton);

    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                   <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times": "fa fa-bars"}/>
                    </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <a className="nav-links" onClick={closeBugger}>
                                    Home
                                </a>
                            </li>
{/* 
                            <li className="nav-item">
                                <a className="nav-links" onClick={closeBugger}>
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-links" onClick={closeBugger}>
                                    Membership
                                </a>
                            </li>
                                
                            <li className="nav-item">
                                <a className="nav-links" onClick={closeBugger}>
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links" onClick={closeBugger}>
                                    Contact Us
                                </a>
                            </li>
                            <li> 
                                <a className="nav-links-mobile" onClick={closeBugger}>
                                    Sign Up
                                </a>
                            </li> */}
                        </ul>
                        {button && <Button buttonStyle="btn--ouline">Sign up</Button>}
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
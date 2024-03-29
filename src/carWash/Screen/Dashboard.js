import React, {useState} from 'react';
import "../css/portal.css";
import {Link} from "react-router-dom";
import Logo from "../images/glossy.png";
import {FaWallet} from "react-icons/fa";
import {GiToken} from "react-icons/gi";
import {RiDashboardLine, RiSecurePaymentLine, RiLogoutBoxLine} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import {MdSystemUpdateAlt} from "react-icons/md";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedIn} from "react-icons/fa";

function Dashboard() {
    const [Open, setOpen] = useState(false);
    const toggle = () =>{setOpen(!Open)}
    return (
        <>
            <section>
                <div className="container">
                        <div className="navbar">
                            <Link to="/home" className="sidebar2">
                                <img src={Logo}/>
                                <h1>MandyCarWash</h1>
                            </Link>
                            <div className="dropdown">
                                <button onMouseEnter={()=> toggle(!Open)}><CgProfile className="profile"/></button>
                                {
                                    Open && (
                                        <div className="hidden">
                                            <Link className="lin_k" to="/"><MdSystemUpdateAlt className="icon2"/>Update</Link>
                                            <Link className="lin_k"to="/"><RiLogoutBoxLine className="icon2"/>LogOut</Link>  
                                        </div>
                                        )
                                    }
                            </div>
                        </div>
                        <div className="container_wrap">
                        <div className="sidebar">
                            <div className="content">
                                <ul>
                                    <li><Link className="link" to="/dashboard"><RiDashboardLine className="icon"/><h4>DashBoard</h4></Link></li>
                                    <li><Link className="link" to="/token"><GiToken className="icon"/><h4>Generate Token</h4></Link></li>
                                    <li><Link className="link" to="/wallet"><FaWallet className="icon"/><h4>Wallet</h4></Link></li>
                                    <li><Link className="link" to="/payment-history"><RiSecurePaymentLine className="icon"/><h4>Payment History</h4></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard_container">
                            <div className="date">
                                <div className="email_wrap"><h3>akanniquadry@yahoo.com</h3></div>
                                <div className="date_wrap"><h2>31 March 2021</h2></div>
                            </div>
                            <div className="detail_container">
                                <div className="information"><h3>Dashboard||Basic Details</h3></div>
                                <div className="detail_container_wrap">
                                    <div className="detail_wrap">
                                        <div className="details">
                                            <div className="details_one"> 
                                                <ul>
                                                    <li><h2>Names:</h2><h3>Akanni Quadree Oluwatosin</h3></li>
                                                    <li><h2>Gender:</h2><h3>Male</h3></li>
                                                    <li><h2>DOB:</h2><h3>DD/MM/YY</h3></li>
                                                    <li><h2>Phone No:</h2><h3>08175460683</h3></li>
                                                </ul>
                                            </div>
                                            <div className="details_Two">
                                                <ul>
                                                    <li><h2>Address:</h2><h3>Sango, Ibadan</h3></li>
                                                    <li><h2>Car Model:</h2><h3>Corrolla, X55675</h3></li>
                                                    <li><h2>Token:</h2><h3>...........</h3></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img_wrap"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                    <div className="footer">
                        <div className="footer_wrap">
                                <div className="social_media">
                                    <div className="social_media_wrap">
                                        <Link className="footbar" to="/home"><h1>MandyCarWash</h1></Link>
                                        <div className="social_media_icon">
                                            <Link className="social_media_icon_link" to="/" target="blank" aria-label="Facebook" rel= "noopener noreferer">
                                                <FaFacebook/>
                                            </Link>
                                            <Link className="social_media_icon_link" to="/" target="blank" aria-label="Instagram" rel= "noopener noreferer">
                                                <FaInstagram/>
                                            </Link>
                                            <Link className="social_media_icon_link" to="/" target="blank" aria-label="Twitter" rel= "noopener noreferer">
                                                <FaTwitter/>
                                            </Link>
                                            {/* <Link to="/" target="blank" aria-label="LinkedIn" rel= "noopener noreferer">
                                                <FaLinkedIn/>
                                            </Link> */}
                                            <Link className="social_media_icon_link" to="/" target="blank" aria-label="Youtube" rel= "noopener noreferer">
                                                <FaYoutube/>
                                            </Link>
                                        </div>    
                                    </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>
        </>
    )
}

export default Dashboard;

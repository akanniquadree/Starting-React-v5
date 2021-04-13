import React, {useState} from 'react';
import "../css/portal.css";
import {Link} from "react-router-dom";
import Logo from "../images/glossy.png";
import {FaWallet} from "react-icons/fa";
import {GiToken} from "react-icons/gi";
import {GrMoney} from "react-icons/gr"
import {SiSamsungpay} from "react-icons/si"
import {RiDashboardLine, RiSecurePaymentLine, RiLogoutBoxLine} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import {BiTransfer} from "react-icons/bi"
import {MdSystemUpdateAlt} from "react-icons/md";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedIn} from "react-icons/fa";
import {FcPlus} from "react-icons/fc";

function Wallet() {
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
                            <div className="account">
                                    <h2>ACCOUNT OVERVIEW</h2>
                            </div>
                            <div className="balance_wrap">
                                <div className="amunt">
                                    <div className="amount_wrap"><h2>20,000</h2></div>
                                    <div className="amount_icon"><Link to="/"><FcPlus className="fcplus"/></Link></div>
                                </div>
                                <div className="balance">
                                    <h4>current balance</h4>
                                </div>
                            </div>
                            <div className="payment_wrap">
                                <div className="pay">
                                    <Link to="/" className="link1">
                                    <SiSamsungpay className="BiTransfer"/>
                                    <div className="h3_wrap"><h3>PAY</h3></div>
                                    </Link>
                                </div>
                                <div className="pay">
                                    <Link to="/" className="link1">
                                        <BiTransfer className="BiTransfer"/>
                                        <div className="h3_wrap"><h3>TRANSFER</h3></div>
                                    </Link>

                                </div>
                                <div className="pay">
                                    <Link to="/" className="link1">
                                        <GrMoney className="BiTransfer"/>
                                        <div className="h3_wrap"><h3>SAVING</h3></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="balance_wrap1">
                                <FcPlus className="fcplus1"/>
                                <div className="h3_wrap1" >
                                    <h3> ADD A DEBIT CARD</h3>
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

export default Wallet;

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
import {BiSearch} from "react-icons/bi";


function PaymentHistory() {
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
                            <div className="payment_search">
                                    <input type="search" placeholder="Enter The Transaction ID"/>
                                    <button><BiSearch className="BiSearch"/></button>
                            </div>
                            <div className="Table">
                                    <table border="0" cellSpacing="0" width="80%">
                                        <tr className="row1">
                                            <th className="sn"> S/N</th>
                                            <th className="token">Token</th>
                                            <th className="transaction">Transaction Type</th>
                                            <th className="status">Status</th>
                                            <th className="with">With</th>
                                            <th className="on">On</th>
                                            <th className="amount">Amount</th>
                                            <th className="print"></th>
                                        </tr>
                                        <tr>
                                            <td className="sn">1</td>
                                            <td className="token"></td>
                                            <td className="transaction"></td>
                                            <td className="status"></td>
                                            <td className="with"></td>
                                            <td className="on"></td>
                                            <td className="amount"></td>
                                            <td className="print"><Link className="lin_k" to="/">Print</Link></td>
                                        </tr>
                                        <tr className="row1">
                                            <td className="sn">2</td>
                                            <td className="token"></td>
                                            <td className="transaction"></td>
                                            <td className="status"></td>
                                            <td className="with"></td>
                                            <td className="on"></td>
                                            <td className="amount"></td>
                                            <td className="print"><Link className="link" to="/">Print</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="sn">3</td>
                                            <td className="token"></td>
                                            <td className="transaction"></td>
                                            <td className="status"></td>
                                            <td className="with"></td>
                                            <td className="on"></td>
                                            <td className="amount"></td>
                                            <td className="print"><Link className="lin_k" to="/">Print</Link></td>
                                        </tr>
                                        <tr className="row1">
                                            <td className="sn">4</td>
                                            <td className="token"></td>
                                            <td className="transaction"></td>
                                            <td className="status"></td>
                                            <td className="with"></td>
                                            <td className="on"></td>
                                            <td className="amount"></td>
                                            <td className="print"><Link className="link" to="/">Print</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="sn">6</td>
                                            <td className="token"></td>
                                            <td className="transaction"></td>
                                            <td className="status"></td>
                                            <td className="with"></td>
                                            <td className="on"></td>
                                            <td className="amount"></td>
                                            <td className="print"><Link className="lin_k" to="/">Print</Link></td>
                                        </tr>
                                        <tr className="row1">
                                            <td className="sn">7</td>
                                            <td className="token"></td>
                                            <td className="transaction"></td>
                                            <td className="status"></td>
                                            <td className="with"></td>
                                            <td className="on"></td>
                                            <td className="amount"></td>
                                            <td className="print"><Link className="link" to="/">Print</Link></td>
                                        </tr>
                                    </table>
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

export default PaymentHistory;

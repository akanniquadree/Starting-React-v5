import React, {useState} from "react"
import Navbar from "./component/Navbar";
import GlobalStyle from "./GlobalStyle";
import Dropdown from "./component/Dropdown";
import Footer from "./component/Footer";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";
import Portal from "./Screen/Portal";
import Dashboard from "./Screen/Dashboard";
import PaymentHistory from "./Screen/PaymentHistory";
import Token from "./Screen/Token";
import Wallet from "./Screen/wallet";

const Main = withRouter(({location})=>{
    const [isOpen, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!isOpen);
    }
    return(
        <div>
            {
                location.pathname != "/portal" && location.pathname !="/dashboard" && location.pathname !="/payment-history" && location.pathname !="/token"&& location.pathname !="/wallet" && <Navbar toggle={toggle}/>
            }
             {/* <Navbar toggle={toggle} /> */}
                <Dropdown isOpen={isOpen} toggle={toggle} />
            <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/sign-up"><SignUp /></Route>
                    <Route path="/register"><Register /></Route>
                    <Route path="/portal"><Portal/></Route>
                    <Route path="/dashboard"><Dashboard/></Route>
                    <Route path="/payment-history"><PaymentHistory/></Route>
                    <Route path="/token"><Token/></Route>
                    <Route path="/wallet"><Wallet/></Route>
            </Switch>
            {
                location.pathname != "/portal" && location.pathname !="/dashboard" && location.pathname !="/payment-history" && location.pathname !="/token" && location.pathname !="/wallet"  && <Footer/>
            }
            {/* <Footer /> */}
        </div>
    )
})



function App (){
    
    return(
        <>
             <BrowserRouter>
                <GlobalStyle />
                <Main/>
            </BrowserRouter>
        </>
    )
}
export default App;
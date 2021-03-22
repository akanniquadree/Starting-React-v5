import React, {useState} from "react"
import Navbar from "./component/Navbar";
import GlobalStyle from "./GlobalStyle";
import Dropdown from "./component/Dropdown";
import Footer from "./component/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Register from "./pages/Register";

function App (){
    const [isOpen, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!isOpen);
    }
    return(
        <>
             <BrowserRouter>
                <GlobalStyle />
                <Navbar toggle={toggle} />
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/sign-up"><SignUp /></Route>
                    <Route path="/register"><Register /></Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}
export default App;
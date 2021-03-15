import React, {useState} from "react"
import "./index.css";
import Navbar from "./component/Navbar";
import GlobalStyle from "./GlobalStyle";
import Hero from "./component/Hero";
import { SliderData } from "./component/SliderData";
import Dropdown from "./component/Dropdown";
import Info from "./component/Info";
import InfoTwo from "./component/InfoTwo";
import InfoThree from "./component/InfoThree";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import { InfoTwoData } from "./data/InfoTwoData";
import { InfoThreeData } from "./data/InfoThreeData";
import InfoFour from "./component/InfoFour";
import Footer from "./component/Footer";




function App (){
    const [isOpen, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!isOpen);
    }
    return(
        <>
            <GlobalStyle />

            <Navbar toggle={toggle} />

            <Dropdown isOpen={isOpen} toggle={toggle} />

            <Hero slides={SliderData} />

            <Info {...InfoData} />

            <InfoTwo {...InfoTwoData}/>
            
            <InfoThree {...InfoThreeData}/>

            <InfoFour {...InfoDataTwo}/>

            <Footer />
        </>
    )
}
export default App;
import React, {useState}from 'react';
import Hero from "../component/Hero";
import { SliderData } from "../component/SliderData";
import Info from "../component/Info";
import InfoTwo from "../component/InfoTwo";
import InfoThree from "../component/InfoThree";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { InfoTwoData } from "../data/InfoTwoData";
import { InfoThreeData } from "../data/InfoThreeData";
import InfoFour from "../component/InfoFour";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export const Home = () => {
    // const [isOpen, setOpen] = useState(false);
    // const toggle = () =>{
    //     setOpen(!isOpen);
    // }
    return (
        <>
              {/* <Navbar toggle={toggle} /> */}
              <Hero slides={SliderData} />
              <Info {...InfoData} />
              <InfoTwo {...InfoTwoData}/>
              <InfoThree {...InfoThreeData}/>
              <InfoFour {...InfoDataTwo}/>
              {/* <Footer/> */}
        </>
    )
}
export default Home;

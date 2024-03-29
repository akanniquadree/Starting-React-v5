import React, {useState, useEffect, useRef}from "react";
import { Button } from "../component/Button";
import styled  from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import {IoArrowForward, IoArrowBack} from "react-icons/io5";

const HeroSection = styled.section`
 height: 100vh;
 overflow: hidden;
 max-height: 1100px;
 position: relative;
`;

const HeroWrapper = styled.div `
width: 100%;
height: 100%;
position: relative;
overflow: hidden;
align-items: center;
justify-content: center;
display: flex;
`;
const HeroSlide = styled.div `
z-index:1;
width:100%;
height:100%;
`;
const HeroSlider = styled.div `
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background: linear-gradient{0deg, rgba (0,0,0,0.2) 0%, rgba (0,0,0,0.2) 50%, rgba (0,0,0,0.6) 100%};
}
`;
const HeroImage = styled.img `
position: absolute;
width:100vw;
height: 100vh;
object-fit:cover;
top:0;
left:0;
`;
const HeroContent = styled.div `
position:relative;
z-index: 10;
display:flex;
max-width: 1600px;
width: calc(100%-100px);
color:#fff;
flex-direction:column;

h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-wight: 400;
    text-transform: uppercase;
    text-shadow:0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom:0.8rem;
};
p{
    margin-bottom:1.2rem;
    text-shadow:0px 0px 20px rgba(0, 0, 0, 0.4);
}
`;
const Arrow = styled(IoMdArrowRoundForward) `
margin-left: 0.5rem`;

const SliderButton =styled.div `
position: absolute;
right: 50px;
bottom: 50px;
display: flex;
z-index: 10;
`;

const PrevArrow = styled(IoArrowBack)`
width:50px;
height: 50px;
cursor: pointer;
border-radius: 50px;
color: #fff;
background: #000d1a;
padding: 10px;
margin-right: 1rem;
user-select:none;
transition:0.3s;

&:hover {
    background:#cd853f;
    transition: scale(1.05);
}
`;

const NextArrow = styled(IoArrowForward)`
width:50px;
height: 50px;
cursor: pointer;
border-radius: 50px;
color: #fff;
background: #000d1a;
padding: 10px;
margin-right: 1rem;
user-select:none;
transition:0.3s;

&:hover {
    background:#cd853f;
    transition: scale(1.05);
}
`;

const Hero = ({slides}) => {
    const [current, setCurrent]= useState(0);
    const length = slides.length;
    const timeout = useRef(null);
    useEffect(()=>{
        const nextSlide =() =>{
            setCurrent(current===length-1  ? 0 : current + 1)
        }
        timeout.current = setTimeout(nextSlide, 3000)
        return function(){
                if(timeout.current){
                    clearTimeout(timeout.current)
                }
            }
    },[current, length])
    const NextSlide = () =>{
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const PrevSlide =() =>{ 
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current=== 0? length - 1 : current - 1 )
    };
    if(!Array.isArray(slides) || slides.length <=0){
        return(null);
    }
    return(
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index)=>{
                    return(
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.images} alt={slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <Button to={slide.path} primary="true" css={`max-width:160px`}>
                                        {slide.label}
                                        <Arrow/>
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                            ) }    
                        </HeroSlide>
                    )
                })}
                <SliderButton>
                    <PrevArrow onClick={PrevSlide}/>
                    <NextArrow onClick={NextSlide}/>
                </SliderButton>
            </HeroWrapper>
        </HeroSection>
    )
}
export default Hero;
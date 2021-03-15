import React from 'react';
import { Button } from './Button';
import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import {IoArrowForward, IoArrowBack} from "react-icons/io5";


const Section = styled.section `
width: 100%;
height: 100%;
padding: 0;
`;

const InfoContainer = styled.div `
 padding: 3rem calc((100vw - 1300px) / 2);
 heigh:100%;
`;
const InfoContainerUp = styled.div `
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 0.3rem;
}
`;

const InfoContainerDown = styled.div `
padding: 3rem calc((100vw - 1500px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;

@media screen and  (max-width: 786px){
    grid-template-columns:1fr;
`;
const InfoContainerDownLeft = styled.div `
margin-left: 1rem;
margin-right: 1rem;
img{
    width:100%;
    height:80%;
    object-fit:cover;

    @media screen and (max-width:768px){
        width:80%;
        height:70%;
}
p{
    margin-bottom:2rem;
    font-size: 20px;
}
`;
const InfoContainerDownRight = styled.div `
margin-left: 1rem;
margin-right: 1rem;
    img{
    width:100%;
    height:80%;
    object-fit:cover;
    margin-top: 6rem;

    @media screen and (max-width:768px){
        width:80%;
        height:70%;
    }
    }
    p{
    margin-bottom:1rem;
    font-size: 15px;
    }
`;
const Arrow = styled(IoMdArrowRoundForward) `
margin-left: 0.5rem`;

function InfoTwo ({heading, imageone, imagetwo, buttonLabel, paragraphOne, paragraphTwo}) {
        return (
            <Section>
                <InfoContainer>
                    <InfoContainerUp>
                        <h1>{heading}</h1>
                    </InfoContainerUp>
                    <InfoContainerDown>
                        <InfoContainerDownLeft>
                            <img src = {imageone} alt="equipment"/>
                            <p>{paragraphOne},</p>
                            <Button to="/home" primary="true">
                                {buttonLabel}
                                <Arrow/>
                            </Button>
                        </InfoContainerDownLeft>
                        <InfoContainerDownRight>
                            <img src = {imagetwo} alt="equipment"/>
                            <p>{paragraphTwo}</p>
                            <Button to="/home" primary="true">
                                {buttonLabel}
                                <Arrow/>
                            </Button>
                        </InfoContainerDownRight>
                    </InfoContainerDown>
                </InfoContainer>
            </Section>
        )
}

export default InfoTwo;

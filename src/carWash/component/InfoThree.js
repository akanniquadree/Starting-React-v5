import React from 'react';
import styled  from "styled-components";
import { Button } from './Button';

const Section = styled.section `
width: 100%;
height: 90%;

`;
const ContainerSec = styled.div `
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
background: black;

@media screen and  (max-width: 786px){
    grid-template-columns:1fr;
    padding: 1rem calc((100vw - 1300px) / 2);
}
`;
const SectionLeft = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
//line-height:1.4;
padding: 1rem 2rem;
background: white;
height: 15rem;
margin-top: 8rem;
border-radius: 10px;
@media screen and  (max-width: 786px){
    margin: 0 1rem;
}
h1{
    margin-bottom:1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);

}
p{
    margin-bottom: 2rem;
   
    @media screen and  (max-width: 786px){
        margin-buttom: 0.5rem;
    }
}
`;
const SectionRight = styled.div `
padding: 1rem 0rem;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:768px){
}
img{
    width:100%;
    height:90%;
    object-fit:cover;

    @media screen and (max-width:768px){
        width:90%;
        height:80%;
    }
}
`;

const InfoThree = ({heading, Oneparagraph, Twoparagraph, buttonLabel, image1}) => {
    return (
           <Section>
                <ContainerSec>
                        <SectionLeft>
                            <h1>{heading}</h1>
                            <p>{Oneparagraph}</p>
                            <p>{Twoparagraph}</p>
                            <Button to="/" primary="true">
                                {buttonLabel}
                            </Button>
                        </SectionLeft>
                        <SectionRight>
                            <img src={image1} alt="My Team"/>
                        </SectionRight>
                </ContainerSec>
            </Section> 
    )
}

export default InfoThree

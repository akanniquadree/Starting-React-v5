import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import { Button } from '../component/Button';

const RegisterContainer = styled.div `
height: 90vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-image: url("card1.jpg");
background-size: cover;
background-attachment: fixed;
position: relative;

form{
    display: block;
    position: relative;

    &::before {
        content:'';
        width: 150%;
        top:-5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        display: block;
        position: absolute;
         z-index: 1;
        background-image: linear-gradient(to bottom right, #053ffc, #9ac8e3)

    }
    @media screen and (max-width:768px){
        width: 83%;
        height: 100%;
    }
}
`;
   const RegisterFormInner = styled.div `
 position: relative;
 width: 146%;
 display: block;
 background: white;
 z-index: 2;

 h1{
     color:blue;
     font-size: 28px;
     font-weight: 400px;
     padding-top: 5px;
     margin-bottom: 13px;
     text-align: center;
 }

 @media screen and (max-width:768px){
    width: 100%;
}
`;
 const RegisterFormGroup = styled.div `
display: block;
width:100%;
margin-bottom:30px;
input{
    appearance: none;
    width: 90%;
    background: #f8f8f8;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    outline: none;
    transition:0.4s;
    margin-left: 0.5rem;

    &:focus{
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2)
    }
    @media screen and (max-width:768px){
        width: 80%;
    }
}
label{
    display: block
    margin-bottom: 5px;
    font-size:15px;
    color:blue;
    transition:0.4s;
    margin-left: 1rem;
    margin-bottom: 1rem;
}
`;
const RegisterButtonWrap = styled.div `
margin-left: 6rem;
width: 20%;
margin-bottom: 0.5rem;

`;
const RegisterParagraph = styled.div ` 
display: flex;
p{
    font-size: 15px;
    color: blue;
    margin: 0px 0.09rem 1rem 1rem;
}
`;
const RegisterParaLink = styled(Link)`
    text-decoration: none;
    color: blue;

    &:hover{
        transform: translateY(-2px);
        color: dark blue;
    }

`;
const RegisterParagraphTwo = styled.div `
p{
    font-size: 15px;
    color: blue;
    margin-left: 1rem;
`;

const Register = () => {
    const [isOpen, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!isOpen);
    }
    return (
            <RegisterContainer>
            <form>
                <RegisterFormInner>
                    <h1>SIGN UP</h1>
                    <RegisterFormGroup>
                        <label htmlFor = "name">First Name: </label><br/>
                        <input type = "text" placeholder = "Enter your First Name"/>
                    </RegisterFormGroup>
                    <RegisterFormGroup>
                        <label htmlFor = "name">Last Name: </label><br/>
                        <input type = "text" placeholder = "Enter your First Name"/>
                    </RegisterFormGroup>
                    <RegisterFormGroup>
                        <label htmlFor = "name">Email: </label><br/>
                        <input type = "text" placeholder = "Enter your valid Email"/>
                    </RegisterFormGroup>
                    <RegisterFormGroup>
                        <label htmlFor = "password">Password: </label><br/>
                        <input type = "Password" placeholder = "Enter your Password"/>
                    </RegisterFormGroup>
                    <RegisterFormGroup>
                        <label htmlFor = "password">Confirm Password: </label><br/>
                        <input type = "password" placeholder = "Re:Enter your Password"/>
                    </RegisterFormGroup>
                    <RegisterParagraph>
                        <p>By Submitting, you agree to our <RegisterParaLink to="/">Terms and condition</RegisterParaLink></p> 
                    </RegisterParagraph>
                    <RegisterButtonWrap>
                        <Button to = "/" primary="true">Submit</Button>
                    </RegisterButtonWrap>
                    <RegisterParagraphTwo>
                    <p>If you already have an account with us <RegisterParaLink to="/sign-up">Click here!!!</RegisterParaLink></p>
                    </RegisterParagraphTwo>
                </RegisterFormInner>
            </form>
        </RegisterContainer>
    )
}

export default Register;

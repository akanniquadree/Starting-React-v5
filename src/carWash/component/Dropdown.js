import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import {menuData} from "../data/MenuData";
import {Button} from "./Button"

const DropdownContainer = styled.div `
width: 100%;
height: 100%;
display: grid;
z-index: 999;
top:0;
transition: 0.3s ease-in-out;
background:blue;
opacity: ${({ isOpen })=>(isOpen ? "1" : "0")};
top:${({ isOpen })=>(isOpen ? "0" : "-100%")};
left:0;
align-items: center;
position: fixed;
`;
const Icon = styled.div `
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor:pointer;
outline: none;
`;
const CloseIcon = styled(FaTimes) `
color: #000d1a;
`;
const DropdownWrapper = styled.div ``;

const DropdownLink = styled(Link) `
display: flex;
text-align: center;
color:#fff;
justify-content: center;
font-size:1.5rem;
text-decoration: none;
list-style:none;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover{
    color:#000d1a;
}
`;
const DropdownMenu = styled.div `
display: grid;
margin-bottom: 4rem;
text-align: center;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);

@media screen and (max-width:480px){
    grid-template-rows: repeat(4, 60px);
}
`;
const BtnWrap = styled.div `
display: flex;
justify-content:center;
`;

const Dropdown = ({isOpen, toggle}) => {
    return(
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index)=>(
                        <DropdownLink to={item.to} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                     <Button to="/sign-up" primary="true" round="true" big="true">
                         Sign Up                
                     </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}
export default Dropdown;
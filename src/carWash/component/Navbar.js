import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData"
import { Button } from "./Button";
import { RiBarChartHorizontalFill } from "react-icons/ri"

const Nav = styled.nav`
height: 60px;
display: flex;
background: blue;
justify-content: space-between;
width: 100%;
z-index:100;
position: fixed;
padding: 1em 2em;
`
const Logo = styled(Link)`
color:#fff;
padding: 0 1rem;
height:100%;
cursor: pointer;
align-items: center;
display: flex;
font-style: italic;
text-decoration: none;
font-weight: bold;
`
// const NavLink = css`
// color:#fff;
// padding: 0 1em;
// height:100%;
// cursor: pointer;
// align-item: center;
// display: flex;
// `

const MenuBars = styled(RiBarChartHorizontalFill)`
display: none;

@media screen and (max-width: 780px){
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    top:0;
    right:0;
    position: absolute;
    transform: translate(-50%, 25%);
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
align-right: -48px;

@media screen and (max-width:780px){
    display: none;
}
`;

const NavMenuLink = styled(Link)`
color:#fff;
padding: 0 1rem;
height:100%;
cursor: pointer;
align-items: center;
display: flex;
text-decoration: none;
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width:780px){
    display: none;
}
`;

function Navbar({toggle}){
    return(
        <Nav>
            <Logo to="/">MandyCarWash</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                   <NavMenuLink to={item.link} key={index}>
                       {item.title}
                   </NavMenuLink>
                ))}
            
            </NavMenu>
            <NavBtn>
                <Button to="/sign-up" primary="true">
                    Sign Up
                </Button>
            </NavBtn>
        </Nav>
    )
}
export default Navbar;
import React from 'react';
import {Link} from "react-router-dom"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedIn} from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer `
background-color: blue;
`;
const FooterWrap = styled.div `
padding: 16px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1300px;
margin: 0 auto;

`;
const SocialMedia = styled.div `
max-width: 1300px;
width: 100%;
`;
const SocialMediaWrap = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1300px;
margin: 0 auto;

@media screen and (max-width:768px){
    flex-direction: column;
}
`;
const SocialLogo = styled.div `
color: white;
cursor:pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight:bold;
justify-self: start;
`;
const SocialIcons = styled.div `
display: flex;
width:240px;
align-items: center;
justify-content: space-between
`;
const SocialIconLink = styled(Link) `
color: white;
font-size:24;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/home">MandyCarWash</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink to="/" target="blank" aria-label="Facebook" rel= "noopener noreferer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink to="/" target="blank" aria-label="Instagram" rel= "noopener noreferer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink to="/" target="blank" aria-label="Twitter" rel= "noopener noreferer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink to="/" target="blank" aria-label="Youtube" rel= "noopener noreferer">
                                <FaYoutube/>
                            </SocialIconLink>
                            {/* <SocialIconLink to="/" target="blank" aria-label="LinkedIn" rel= "noopener noreferer">
                                <FaLinkedIn/>
                            </SocialIconLink> */}
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
        </FooterContainer>
    )
}

export default Footer;

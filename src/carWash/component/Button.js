import styled from "styled-components";
import {Link} from "react-router-dom";


export const Button = styled(Link)`
background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};
align-items: center;
text-decoration: none;
outline: none;
cursor: pointer;
transition: 0.3s;
justify-content: center;
max-width: 200px
min-width: 100px;
display: flex;
border:none;
white-space: nowrap;
padding: ${({ big })=>(big ? "16px 40px" : "14px 24px")};
color:${({ primary })=>(primary ? "#fff" : "#000d1a")};
font-size: ${( {big })=>(big ? "20px" : "14px")};

&:hover {
transform: translateY(-2px);
}
`;


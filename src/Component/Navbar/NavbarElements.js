import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: black;
height: 85px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
position: fixed;
top: 0;
left: 0;
right: 0;
`;

export const NavTitle = styled.h1`
    margin-left: 60px;
    font-size: 30px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const NavLink = styled(Link)`
    color: white;
    font-size: 25px;
    text-decoration: none;
    padding: 0;
    height: 100%;
    cursor: pointer;
    margin-left: 24px;
    &.active {
        color: #cfdfee;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color:  #cfdfee;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background:  #cfdfee;
    padding: 10px 22px;
    color: black;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"

const Index = () => {
  return (
    <>
    <Nav>
         <h1 style={{color:'white'}}>BrainSharpen</h1>
        <Bars/>
        <NavMenu>
            <NavLink to="/Home" activeStyle>Home</NavLink>
            <NavLink to="/About" activeStyle>About</NavLink>
            <NavLink to="/Courses" activeStyle>Courses</NavLink>
            <NavLink to="/Products" activeStyle>Products</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/SignUp' activeStyle>SignUp</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  )
}

export default Index
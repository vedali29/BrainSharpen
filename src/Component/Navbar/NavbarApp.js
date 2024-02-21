import React from 'react'
import Courses from '../pages/Courses'
import Products from '../pages/Products'
import SignUp from '../pages/SignUp'
import About from '../pages/About'
import Home from '../pages/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Index from './Index'

const NavbarApp = () => {
  return (
    <>
    <Router>
      <Index/>
        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Courses' element={<Courses/>} />
            <Route path='/Products' element={<Products/>} />
            <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
    </Router>
    </>
  )
}

export default NavbarApp
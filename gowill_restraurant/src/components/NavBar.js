import React from 'react';
import { useState} from "react";
import Logo from '../assets/little lemon logo.jpg';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import { FaArrowsAlt } from "react-icons/fa";
import { Button } from '@mui/material';

function NavBar() {
  const  [openLinks, setOpenLinks] = useState(false)
  const toggleNavBar = () => {
    setOpenLinks(!openLinks)
  }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"} >
          <img className='Logo' src={Logo} alt='Little lemon logo'/>
          <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link></div>
        </div>

        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Button onClick= {toggleNavBar}>
                <FaArrowsAlt/>
            </Button>

        </div>
    </div>
  )
}

export default NavBar
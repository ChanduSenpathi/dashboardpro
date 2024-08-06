import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaBars, FaEnvelope, FaSearch } from 'react-icons/fa'
import { FaBell, FaGear, FaXmark } from 'react-icons/fa6'
import {UserContext} from '../Provider/SidebarProvider'


export default function Navbar() {
    const {toggleSidebar, show} = useContext(UserContext);
    

  return (
    <header  className='navbar_container p-3 position-sticky top-0 left-0'>
        <nav className='d-flex justify-content-between'>
            <div className='d-flex align-items-center gap-5'>
                <button type='button' className='nav_menubar' onClick={toggleSidebar}>
                    {show ? <FaBars /> : <FaXmark/>}
                </button>
                <div className='search_container position-relative top-0 left-0'>
                    <FaSearch className='position-absolute searchicon_position'/>
                    <input type='text' placeholder='Search' className='px-5 py-2 w-100 searchbar'/>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='d-none d-md-flex justify-content-between align-items-center gap-3'>
                    <button type='button' className='navbar_icons d-flex justify-content-center align-items-center text-white'>
                        <FaEnvelope />
                    </button>
                    <button type='button' className='navbar_icons d-flex justify-content-center align-items-center text-white'>
                        <FaGear />
                    </button>
                    <div className='additional_bell_icon position-relative top-0 left-0 text-white'>
                        <button type='button' className='navbar_icons d-flex justify-content-center align-items-center text-white'>
                            <FaBell />
                        </button>
                    </div>
                </div>
                <img className='avatar_img' src='./images/avatar.png' alt='avatar'/>
            </div>
        </nav>
    </header>
  )
}

import React, { useState } from 'react'
import '../css/navbar.css'
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaBars } from "react-icons/fa"
import { Dropdown } from './Dropdown'

export const Navbar = () => {
    const [dropdown, setDropdown] = useState(true)
    const [mobdropdown, setMobDropDown] = useState(false)
    return (
        <div className='Navbar'>
            <div className='navbar-wrap'>
                <div className='nav-1'>
                    <img src="" alt="LOGO" />
                    <span>MAFIA</span>
                </div>
                <div className='nav-2'>
                    <div className={mobdropdown ? 'mobile-nav-item-wrap open' : 'mobile-nav-item-wrap'}>
                        <li className='nav-item' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                            <a>Features</a>
                            <MdKeyboardArrowDown className='key-arrow' />
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>Build <MdKeyboardArrowDown className='key-arrow' /></li>
                        <li className='nav-item'>Resources <MdKeyboardArrowDown className='key-arrow' /></li>
                        <li className='nav-item'>Login</li>
                    </div>
                    <li onClick={() => setMobDropDown(!mobdropdown)} className='mobile-nav-item'><FaBars /></li>
                </div>
            </div>
        </div>
    )
}
import React, {useState} from 'react'
import logo from '../images/logo.png'

function Navbar() {

    const [nav, setNav] = useState(false)                                                          // to toggle the navbar background color from transparent to white

    const changeBackground = () => {
        if(window.scrollY >= 50) {                                                                 // whenever you scrollY more than 50 px
            setNav(true)
        }
        else setNav(false)
    }
    window.addEventListener('scroll', changeBackground)                                            // listen for the scroll Y event

    return (
        <nav className={nav ? 'nav active' : 'nav'}>                                               {/* based on the return from changeBackground() navbar className is being toggled */}
            <a href='#' className='logo'>
                <img src={logo} alt='logo'/>                                                       {/* main LaunchApp logo */}
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>                                           {/* the for attribute has a value which is the id of the <input> element it relates to */}
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#main' className='active'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#presentation'>Services</a></li>
                <li><a href='#'>Downloads</a></li>
                <li><a href='#contact'>About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

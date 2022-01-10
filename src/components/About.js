import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt="about"/>
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About

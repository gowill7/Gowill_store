import React from 'react';
import BannerImage from '../assets/Africa_Spagh.jpg';
import '../styles/About.css';
function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})`}}>edf</div>
            <div className='aboutBottom'>
                <h1> ABOUT US</h1>
                <p> lorem20scwdvedgererfbfdebfffffffdddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
            </div>
        </div>
    )
}

export default About;
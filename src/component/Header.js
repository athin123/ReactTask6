import React from 'react'
import profileImage from "../assest/img/Athin.jpg"

const Header = () => {
    return (
        <div className='header-container' id='home'>
            <div className='header-left'>
                <div className='profile-image'>
                    <img src={profileImage} />
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-content'>
                    <h3>Full Stack Developer</h3>
                    <h1>Athin Thomas</h1>
                    <p>I'm passionate about technology. I've always been an analytical problem solver.</p>
                    <div className='header-right-button'>
                        <a  download="Athin CV"><button>Download</button></a>
                        <a href='#contact'><button>Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
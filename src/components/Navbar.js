import React from 'react'

// Styles
import '../scss/style.css'

function Navbar() {
    return (
        <div>
            <header className="header">
                <nav className="flex flex-jc-sb flex-ai-c">
                    <a href="/" className="header__logo">
                        <img src="./logo192.png" alt="Lorem Ipsum" />
                    </a>
                    <a href="#" className="header__menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    </a>
                    <div className="header__links">
                        <a href="#">HOME</a>
                        <a href="#">FEATURES</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">LOG IN</a>
                    </div>
                    <a href="#" className="button header__cta">GET DEMO</a>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;
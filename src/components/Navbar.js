import React from 'react'

// Styles
import '../scss/style.css'

function Navbar() {
    return (
      <div>
        <header className="header">
          <nav className="flex flex-jc-sb flex-ai-c">
            <a
              href="/"
              className="header__logo flex flex-jc-sb flex-ai-c header__links"
            >
              <img src="./logo192.png" alt="Lorem Ipsum" />
              <a href="#">Lorem Ipsum</a>
            </a>
            <div className="flex flex-ai-c">
              <a href="#" className="header__menu hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <div className="header__links hide-for-mobile">
                <a href="#">HOME</a>
                <a href="#">FEATURES</a>
                <a href="#">ABOUT US</a>
                <a href="#">LOG IN</a>
              </div>
              <a href="#" className="button header__cta hide-for-mobile">
                GET DEMO
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
}

export default Navbar;
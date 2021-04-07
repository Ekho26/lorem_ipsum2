import React, {useState} from "react";

// Styles
import "../scss/style.css";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <div>
      <header className="header">
        {/* <div className="overlay"></div> */}
        <nav className="flex flex-jc-sb flex-ai-c">
          <a
            href="/"
            className="header__logo flex flex-jc-sb flex-ai-c header__links"
          >
            <img src="./logo192.png" alt="Lorem Ipsum" />
            <p className="hide-for-mobile">Lorem Ipsum</p>
          </a>
          <div className="flex flex-ai-c">
            <div
              className="flex flex-jc-sb flex-ai-c header__links hide-for-desktop"
              onClick={handleClick}
              click={click}
            >
              <a href="/" className="header__menu">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <a href="/" className="header__logo flex flex-jc-sb flex-ai-c header__links header__links-menu">
                MENU
              </a>
            </div>
            <div className="header__links hide-for-mobile">
              <a href="/">HOME</a>
              <a href="/">FEATURES</a>
              <a href="/">ABOUT US</a>
              <a href="/">LOG IN</a>
            </div>
            <a href="/" className="button header__cta">
              GET DEMO
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

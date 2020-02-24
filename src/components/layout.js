import React from "react";
import { Link } from "gatsby";

import logo from "../../content/assets/logo.svg";

const Layout = props => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div id="menu" className="site-head-container">
          <a
            className="nav-burger"
            href={`#menu`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>{" "}
              <div className="hamburger-text-menu-text hidden">Menu</div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              {/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
              <li className="nav-about" role="menuitem">
                <Link to={`/philosophie`}>Philosophie</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Behandlungen</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Schulungen</Link>
              </li>
              <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Kontakt</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com/Nagelstudio-Bellissima-769277746487034/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bellissima_nails_cosmetic/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Made by{" "}
        <a
          href="http://mattiacendon.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mattia C.
        </a>
      </footer>
    </div>
  );
};

export default Layout;

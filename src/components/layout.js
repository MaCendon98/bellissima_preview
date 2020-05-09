import React from "react";
import { Link } from "gatsby";
import CookieBanner from "react-cookie-banner";

import logo from "../../content/assets/logo.svg";

const Layout = props => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <CookieBanner
        message="Auch wir nutzen Cookies. Mit der weiteren Nutzung unserer Webseite geben Sie sich einverstanden. Um gegen diese zu widersprechen, rufen Sie die Impressum-Seite auf."
        onAccept={() => {}}
        cookie="user-has-accepted-cookies"
        dismissOnScrollThreshold="10000"
        buttonMessage="Okay"
        styles={{
          banner: {
            backgroundColor: "#202323",
            position: "fixed",
            bottom: "0",
            width: "100vw",
            left: "0",
            height: "auto",
            textAlign: "left",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          button: {
            position: "relative",
            top: "initial",
            right: "initial",
            lineHeight: "initial",
            marginTop: "initial",
            padding: "inherit",
            backgroundColor: "#f9ada0",
            border: "inherit",
            borderRadius: "0.5rem",
            boxShadow: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            color: "black",
            cursor: "pointer"
          },
          message: {
            fontWeight: 400,
            lineHeight: "26px",
            fontSize: "14px",
            paddingRight: "20px"
          }
        }}
      />
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
              <li className="nav-menuitem" role="menuitem">
                <Link to={`/philosophie`}>Philosophie</Link>
              </li>
              {/* <li className="nav-menuitem" role="menuitem">
                <Link to={`/behandlungen`}>Behandlungen</Link>
              </li> */}
              {/* <li className="nav-menuitem" role="menuitem">
                <Link to={`/schulungen`}>Schulungen</Link>
              </li> */}
              <li className="nav-menuitem" role="menuitem">
                <Link to={`/kontakt`}>Kontakt</Link>
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
        <a href="/impressum"> Impressum</a> &mdash; Made by{" "}
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

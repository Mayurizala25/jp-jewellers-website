import { useState } from "react";
import Icon from "./Icon.jsx";

const navigation = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "categories", label: "Categories" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

export default function SiteLayout({ currentPage, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell min-h-screen bg-ivory text-espresso">
      <div className="announcement-bar">
        <span>AN EXPRESSION OF INDIAN ADORNMENT</span>
        <span className="announcement-divider" aria-hidden="true" />
        <a href="#contact">VISIT OUR RAJKOT SHOWROOM</a>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>

          <a aria-label="J P Jewellers home" className="brand-lockup" href="#home" onClick={navigate}>
            <span className="brand-mark" aria-hidden="true">J<span>P</span></span>
            <span className="brand-name">J P <b>JEWELLERS</b></span>
          </a>

          <nav aria-label="Main navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`}>
            {navigation.map(({ id, label }) => (
              <a
                aria-current={currentPage === id ? "page" : undefined}
                className={currentPage === id ? "nav-link active" : "nav-link"}
                href={`#${id}`}
                key={id}
                onClick={navigate}
              >
                {label}
              </a>
            ))}
          </nav>
          <span aria-hidden="true" />
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand-lockup footer-lockup" href="#home" onClick={navigate}>
              <span className="brand-mark" aria-hidden="true">J<span>P</span></span>
              <span className="brand-name">J P <b>JEWELLERS</b></span>
            </a>
            <p>For current jewellery information and availability, please contact the Rajkot showroom.</p>
            <a className="footer-social" href="https://www.instagram.com/jpjewellersrajkot/" rel="noreferrer" target="_blank">
              <Icon name="instagram" />
              <span>@jpjewellersrajkot</span>
              <Icon name="arrow-up-right" />
            </a>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            {navigation.map(({ id, label }) => (
              <a href={`#${id}`} key={id} onClick={navigate}>{label}</a>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h2>Find us</h2>
            <a
              href="https://www.google.com/maps/search/?api=1&query=J+P+Jewellers%2C+Palace+Road%2C+opposite+Ashapura+Temple%2C+Prahlad+Plot%2C+Panna+Manek%2C+Rajkot+360001%2C+Gujarat%2C+India"
              rel="noreferrer"
              target="_blank"
            >
              Palace Road, opposite Ashapura Temple,<br />Prahlad Plot / Panna Manek,<br />Rajkot 360001, Gujarat
            </a>
            <a href="tel:+912812227122">+91 281 222 7122</a>
            <a href="tel:+919328591000">+91 93285 91000</a>
            <a href="https://wa.me/919328591000" rel="noreferrer" target="_blank">WhatsApp the showroom</a>
            <p>Monday–Saturday · 10 AM–7:30 PM<br />Sunday · Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} J P Jewellers · Rajkot, India</span>
          <span>For current details, contact the showroom.</span>
        </div>
      </footer>
    </div>
  );
}

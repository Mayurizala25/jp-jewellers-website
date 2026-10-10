import Icon from "../components/Icon.jsx";

export default function Home() {
  return (
    <div className="home-page contact-led-home">
      <section className="home-welcome">
        <p className="eyebrow"><span className="eyebrow-rule" /> J P JEWELLERS · RAJKOT</p>
        <h1 className="hero-title">An invitation<br />to <em>visit.</em></h1>
        <p className="hero-description">
          For current jewellery selection, availability and pricing, please contact or visit the Rajkot showroom.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="tel:+919328591000">Call the showroom <Icon name="arrow-right" /></a>
          <a className="button button-outline" href="https://wa.me/919328591000" rel="noreferrer" target="_blank">
            WhatsApp <Icon name="arrow-up-right" />
          </a>
        </div>
      </section>

      <section aria-label="Showroom information" className="home-showroom-card">
        <p className="eyebrow">FIND US</p>
        <h2>Visit the showroom</h2>
        <p>Palace Road, opposite Ashapura Temple,<br />Prahlad Plot / Panna Manek,<br />Rajkot 360001, Gujarat, India</p>
        <p className="home-hours">Monday–Saturday · 10:00 AM–7:30 PM<br />Sunday · Closed</p>
        <a
          className="text-link"
          href="https://www.google.com/maps/search/?api=1&query=J+P+Jewellers%2C+Palace+Road%2C+opposite+Ashapura+Temple%2C+Prahlad+Plot%2C+Panna+Manek%2C+Rajkot+360001%2C+Gujarat%2C+India"
          rel="noreferrer"
          target="_blank"
        >
          Open map <Icon name="arrow-up-right" size={16} />
        </a>
      </section>
    </div>
  );
}

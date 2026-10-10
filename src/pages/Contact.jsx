import Icon from "../components/Icon.jsx";
import PageHeading from "../components/PageHeading.jsx";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=J+P+Jewellers%2C+Palace+Road%2C+opposite+Ashapura+Temple%2C+Prahlad+Plot%2C+Panna+Manek%2C+Rajkot+360001%2C+Gujarat%2C+India";
const whatsappUrl = "https://wa.me/919328591000";

export default function Contact() {
  return (
    <div className="page-container contact-page">
      <PageHeading
        eyebrow="WE WOULD LOVE TO MEET YOU"
        introduction="For current jewellery information, please call, message or visit the showroom."
        title="Contact Us"
      />

      <div className="contact-layout contact-details-only">
        <div className="contact-details">
          <section className="contact-card">
            <span className="contact-icon"><Icon name="pin" /></span>
            <div>
              <p className="eyebrow">FIND THE SHOWROOM</p>
              <h2>J P Jewellers</h2>
              <p>Palace Road, opposite Ashapura Temple,<br />Prahlad Plot / Panna Manek,<br />Rajkot 360001, Gujarat, India</p>
              <a className="text-link" href={mapUrl} rel="noreferrer" target="_blank">Open map <Icon name="arrow-up-right" size={16} /></a>
            </div>
          </section>
          <section className="contact-card">
            <span className="contact-icon"><Icon name="clock" /></span>
            <div>
              <p className="eyebrow">WHEN TO VISIT</p>
              <h2>Opening hours</h2>
              <p>Monday–Saturday<br />10:00 AM–7:30 PM</p>
              <p className="hours-closed">Sunday · Closed</p>
            </div>
          </section>
          <section className="contact-card">
            <span className="contact-icon"><Icon name="phone" /></span>
            <div>
              <p className="eyebrow">SPEAK WITH US</p>
              <h2>Get in touch</h2>
              <a className="contact-phone" href="tel:+912812227122">+91 281 222 7122</a>
              <a className="contact-phone" href="tel:+919328591000">+91 93285 91000</a>
              <a className="text-link contact-whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank">WhatsApp the showroom <Icon name="arrow-up-right" size={16} /></a>
            </div>
          </section>
        </div>
      </div>

      <div className="contact-bottom-note">
        <span className="note-rule" />
        <p>For current selection, availability and pricing, please call or visit the showroom.</p>
        <a className="text-link" href="https://www.instagram.com/jpjewellersrajkot/" rel="noreferrer" target="_blank">
          <Icon name="instagram" size={17} /> @jpjewellersrajkot <Icon name="arrow-up-right" size={15} />
        </a>
        <a className="text-link" href="https://www.facebook.com/search/pages/?q=JP%20Jewellers%20Rajkot" rel="noreferrer" target="_blank">
          Facebook search <Icon name="arrow-up-right" size={15} />
        </a>
      </div>
    </div>
  );
}

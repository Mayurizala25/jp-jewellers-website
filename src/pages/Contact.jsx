import { useState } from "react";
import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import PageHeading from "../components/PageHeading.jsx";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=J+P+Jewellers%2C+Palace+Road%2C+opposite+Ashapura+Temple%2C+Prahlad+Plot%2C+Panna+Manek%2C+Rajkot+360001%2C+Gujarat%2C+India";
const whatsappUrl = "https://wa.me/919328591000?text=Hello%2C%20I%20would%20like%20to%20enquire%20with%20J%20P%20Jewellers.";

export default function Contact() {
  const [enquiryPreviewed, setEnquiryPreviewed] = useState(false);

  function handleEnquirySubmit(event) {
    event.preventDefault();
    setEnquiryPreviewed(true);
    event.currentTarget.reset();
  }

  return (
    <div className="page-container contact-page">
      <PageHeading
        eyebrow="WE WOULD LOVE TO MEET YOU"
        introduction="Come by for a closer look, a conversation, or simply a little time with the collection."
        title="Contact Us"
      />

      <div className="contact-layout">
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
            <span className="contact-icon"><Icon name="bag" /></span>
            <div>
              <p className="eyebrow">A PERSONAL ENQUIRY</p>
              <h2>Let's talk</h2>
              <a className="contact-phone" href="tel:+912812227122">+91 281 222 7122</a>
              <a className="contact-phone" href="tel:+919328591000">+91 93285 91000</a>
              <a className="text-link contact-whatsapp" href={whatsappUrl} rel="noreferrer" target="_blank">Enquire on WhatsApp <Icon name="arrow-up-right" size={16} /></a>
            </div>
          </section>
        </div>

        <div className="contact-visual">
          <BrandedImage alt="Temporary editorial jewellery image accompanying showroom information" loading="lazy" src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85" />
          <div className="contact-visual-frame">
            <span className="eyebrow">J P JEWELLERS</span>
            <span className="contact-visual-title">A conversation<br /><em>begins here.</em></span>
            <a href={mapUrl} rel="noreferrer" target="_blank">PALACE ROAD · RAJKOT <Icon name="arrow-up-right" size={15} /></a>
          </div>
        </div>
      </div>

      <div className="contact-bottom-note">
        <span className="note-rule" />
        <p>For current piece details and availability, please call or visit the showroom.</p>
        <a className="text-link" href="https://www.instagram.com/jpjewellersrajkot/" rel="noreferrer" target="_blank">
          <Icon name="instagram" size={17} /> @jpjewellersrajkot <Icon name="arrow-up-right" size={15} />
        </a>
        <a className="text-link" href="https://www.facebook.com/search/pages/?q=JP%20Jewellers%20Rajkot" rel="noreferrer" target="_blank">
          Facebook search <Icon name="arrow-up-right" size={15} />
        </a>
      </div>
      <section aria-labelledby="contact-enquiry-title" className="contact-enquiry">
        <div>
          <p className="eyebrow">A FRONTEND-ONLY FORM PREVIEW</p>
          <h2 className="section-title" id="contact-enquiry-title">Send an <em>enquiry</em></h2>
          <p>This demo form does not send or store your details. For a real enquiry, call or WhatsApp the showroom.</p>
        </div>
        <form className="enquiry-form" onSubmit={handleEnquirySubmit}>
          <label>
            <span>Your name</span>
            <input autoComplete="name" name="name" required />
          </label>
          <label>
            <span>Email (optional)</span>
            <input autoComplete="email" name="email" type="email" />
          </label>
          <label className="enquiry-message">
            <span>How can we help?</span>
            <textarea name="message" required rows="4" />
          </label>
          <button className="button button-dark" type="submit">Preview enquiry <Icon name="arrow-right" /></button>
          {enquiryPreviewed && <p className="enquiry-feedback" role="status">Form preview complete. Nothing was sent. Please use the listed phone or WhatsApp details for a real enquiry.</p>}
        </form>
      </section>
    </div>
  );
}

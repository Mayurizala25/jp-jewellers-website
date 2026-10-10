import Icon from "./Icon.jsx";
import PageHeading from "./PageHeading.jsx";

export default function ShowroomEnquiry({ eyebrow, introduction, title }) {
  return (
    <div className="page-container enquiry-page">
      <PageHeading eyebrow={eyebrow} introduction={introduction} title={title} />
      <section aria-label="Contact the showroom for current information" className="showroom-enquiry-card">
        <p>Online product listings and ordering are not available on this website.</p>
        <p>For current jewellery selection, availability and pricing, please contact or visit the showroom.</p>
        <div className="showroom-enquiry-actions">
          <a className="button button-dark" href="tel:+919328591000">Call showroom <Icon name="arrow-right" /></a>
          <a className="button button-outline" href="https://wa.me/919328591000" rel="noreferrer" target="_blank">WhatsApp <Icon name="arrow-up-right" /></a>
          <a className="text-link" href="#contact">Showroom details <Icon name="arrow-right" size={16} /></a>
        </div>
      </section>
    </div>
  );
}

import Icon from "../components/Icon.jsx";
import PageHeading from "../components/PageHeading.jsx";

export default function About() {
  return (
    <div className="page-container about-page">
      <PageHeading
        eyebrow="J P JEWELLERS · RAJKOT"
        introduction="The supplied business information lists a J P Jewellers showroom on Palace Road in Rajkot."
        title="About Us"
      />
      <section className="about-contact-block">
        <div>
          <p className="eyebrow">FOR CURRENT INFORMATION</p>
          <h2 className="section-title">Please speak<br />with the <em>showroom.</em></h2>
          <p>Contact the showroom directly to confirm jewellery selection, availability, materials and pricing.</p>
        </div>
        <div className="about-contact-actions">
          <a className="button button-dark" href="tel:+919328591000">Call the showroom <Icon name="arrow-right" /></a>
          <a className="button button-outline" href="#contact">Contact details <Icon name="arrow-right" /></a>
        </div>
      </section>
    </div>
  );
}

import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import PageHeading from "../components/PageHeading.jsx";
import { categories } from "../data/products.js";

export default function About() {
  return (
    <div className="page-container about-page">
      <PageHeading
        eyebrow="ABOUT THIS JEWELLERY CONCEPT"
        introduction="This independent frontend concept pairs supplied J P Jewellers contact information with fictional editorial jewellery and storytelling."
        title="About Us"
      />

      <section className="about-lead">
        <div className="about-lead-image">
          <BrandedImage alt="Temporary editorial close-up of jewellery detail" src={categories[2].image} />
          <span>THE BEAUTY IS IN THE LOOK</span>
        </div>
        <div className="about-lead-copy">
          <p className="eyebrow">THE SHOWROOM & THIS CONCEPT</p>
          <h2 className="section-title">A piece can hold<br />a <em>whole story.</em></h2>
          <p>
            Jewellery can accompany celebrations, gifting and personal expression. This page uses that cultural
            context as creative inspiration; its products, prices, photography and brand storytelling are illustrative,
            not verified J P Jewellers inventory or business claims.
          </p>
          <p>
            The supplied business details list a Rajkot showroom on Palace Road. Please contact the showroom directly
            to confirm current pieces, materials, pricing and any other details before visiting or purchasing.
          </p>
          <a className="text-link" href="#contact">Visit us in Rajkot <Icon name="arrow-right" size={16} /></a>
        </div>
      </section>

      <section className="about-interlude">
        <p className="eyebrow">A FICTIONAL EDITORIAL STUDY</p>
        <p className="about-quote">“Adornment is personal.<br /><em>Let it tell your story.</em>”</p>
        <span className="quote-rule" />
        <span className="quote-signoff">J P JEWELLERS · RAJKOT</span>
      </section>

      <section className="craft-section">
        <div className="craft-copy">
          <p className="eyebrow">A CLOSER STUDY</p>
          <h2 className="section-title">The art of<br /><em>noticing.</em></h2>
          <p>
            The play of light, the rhythm of a silhouette, and small details can inspire a personal style. This
            visual storytelling is creative copy for the demo, not a statement about verified workshop practices.
          </p>
          <p>
            Contact the showroom to ask about its current collection and in-store experience.
          </p>
          <a className="button button-dark" href="#contact">Find the showroom <Icon name="arrow-right" /></a>
        </div>
        <div className="craft-image">
          <BrandedImage alt="Temporary editorial jewellery image for a close study of detail" loading="lazy" src={categories[7].image} />
          <div className="craft-image-inset">
            <BrandedImage alt="Temporary editorial image from the J P Jewellers visual edit" loading="lazy" src={categories[8].image} />
          </div>
          <span className="craft-image-caption">A VISUAL STUDY IN ADORNMENT</span>
        </div>
      </section>
    </div>
  );
}

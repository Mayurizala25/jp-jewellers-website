import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import PageHeading from "../components/PageHeading.jsx";
import { categories } from "../data/products.js";

export default function About() {
  return (
    <div className="page-container about-page">
      <PageHeading
        eyebrow="ABOUT J P JEWELLERS"
        introduction="Find showroom details and explore a visual selection of jewellery design references."
        title="About Us"
      />

      <section className="about-lead">
        <div className="about-lead-image">
          <BrandedImage alt="Editorial close-up of jewellery detail" src={categories[2].image} />
          <span>THE BEAUTY IS IN THE LOOK</span>
        </div>
        <div className="about-lead-copy">
          <p className="eyebrow">THE SHOWROOM & COLLECTION</p>
          <h2 className="section-title">A piece can hold<br />a <em>whole story.</em></h2>
          <p>
            Explore jewellery imagery and design references across a range of categories. The images and descriptions
            on this website do not confirm current showroom inventory.
          </p>
          <p>
            The supplied business details list a Rajkot showroom on Palace Road. Please contact the showroom directly
            to confirm current pieces, materials, pricing and any other details before visiting or purchasing.
          </p>
          <a className="text-link" href="#contact">Visit us in Rajkot <Icon name="arrow-right" size={16} /></a>
        </div>
      </section>

      <section className="about-interlude">
        <p className="eyebrow">A VISUAL STUDY</p>
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
            visual storytelling offers design inspiration and is not a statement about workshop practices.
          </p>
          <p>
            Contact the showroom to ask about its current collection and in-store experience.
          </p>
          <a className="button button-dark" href="#contact">Find the showroom <Icon name="arrow-right" /></a>
        </div>
        <div className="craft-image">
          <BrandedImage alt="Editorial jewellery image for a close study of detail" loading="lazy" src={categories[7].image} />
          <div className="craft-image-inset">
            <BrandedImage alt="Editorial image from the J P Jewellers visual selection" loading="lazy" src={categories[8].image} />
          </div>
          <span className="craft-image-caption">A VISUAL STUDY IN ADORNMENT</span>
        </div>
      </section>
    </div>
  );
}

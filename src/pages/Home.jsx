import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { categories, products } from "../data/products.js";

const instagramImages = [
  products[1],
  products[4],
  products[7],
  products[8],
];

export default function Home({ onAddToCart, onOpenProduct, onToggleWishlist, onSelectCategory, wishlist }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> AN INDIAN JEWELLERY EDIT</p>
          <h1 className="hero-title">The poetry of<br /><em>Indian adornment.</em></h1>
          <p className="hero-description">
            Explore an illustrative jewellery edit alongside supplied contact details for the J P Jewellers showroom in Rajkot.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#shop" onClick={() => onSelectCategory("")}>Explore the collection <Icon name="arrow-right" /></a>
            <a className="text-link" href="#categories">Discover the edit <Icon name="arrow-right" size={16} /></a>
          </div>
          <div className="hero-caption"><span>✳</span><span className="caption-line" /><span>ORNAMENT · RITUAL · MEMORY</span></div>
        </div>
        <div className="hero-visual">
          <BrandedImage
            alt="Fictional editorial image of traditional Indian jewellery"
            fetchPriority="high"
            loadingFeedback
            src={categories[0].image}
          />
          <div className="hero-image-frame" aria-hidden="true" />
          <div className="hero-stamp">
            <span>J P</span>
            <span>THE JEWELLERY EDIT</span>
            <span className="stamp-dot">✳</span>
            <span>INDIA</span>
          </div>
          <span className="hero-side-note">INSPIRED BY INDIAN CEREMONY</span>
        </div>
      </section>

      <section aria-label="Showroom information" className="values-strip">
        <div><span className="value-number">I</span><span>Rajkot showroom address</span></div>
        <span className="values-divider" />
        <div><span className="value-number">II</span><span>Published visiting hours</span></div>
        <span className="values-divider" />
        <div><span className="value-number">III</span><span>Phone & WhatsApp enquiries</span></div>
      </section>

      <section className="section-block collection-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">THE MANY MOODS OF ADORNMENT</p>
            <h2 className="section-title">A celebration of <em>craft & form</em></h2>
          </div>
          <a className="text-link section-link" href="#categories">Explore all categories <Icon name="arrow-right" size={16} /></a>
        </div>
        <div className="collection-grid">
          {categories.slice(0, 5).map((category, index) => (
            <button
              className={`collection-card collection-card-${index + 1}`}
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              type="button"
            >
              <BrandedImage alt={`Temporary editorial image for ${category.name} jewellery`} loading="lazy" src={category.image} />
              <span className="collection-overlay" />
              <span className="collection-card-copy">
                <span className="collection-index">0{index + 1} / COLLECTION</span>
                <span className="collection-name">{category.name}</span>
                <span className="collection-explore">Explore <Icon name="arrow-right" size={15} /></span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-block arrivals-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">FICTIONAL DEMO PIECES</p>
            <h2 className="section-title">Treasures for <em>the occasion</em></h2>
          </div>
          <a className="text-link section-link" href="#shop" onClick={() => onSelectCategory("")}>View the full selection <Icon name="arrow-right" size={16} /></a>
        </div>
        <div className="product-grid home-product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              isWishlisted={wishlist.includes(product.id)}
              key={product.id}
              onAddToCart={onAddToCart}
              onOpen={onOpenProduct}
              onToggleWishlist={onToggleWishlist}
              product={product}
            />
          ))}
        </div>
      </section>

      <section className="story-preview">
        <div className="story-preview-image">
          <BrandedImage alt="Temporary close-up editorial jewellery image" loading="lazy" src={categories[5].image} />
          <span>A FICTIONAL STUDY IN ADORNMENT</span>
        </div>
        <div className="story-preview-copy">
          <p className="eyebrow">ORNAMENT AS MEMORY</p>
          <h2 className="section-title">Worn for a moment.<br />Kept as a <em>memory.</em></h2>
          <p>
            Across generations, Indian adornment has accompanied celebration, self-expression and the rituals that
            bring people together. This fictional visual edit takes inspiration from those occasions and the detail
            that makes each expression personal.
          </p>
          <a className="button button-outline" href="#about">Discover the story <Icon name="arrow-right" /></a>
        </div>
      </section>

      <section className="instagram-section">
        <div className="section-heading-row instagram-heading">
          <div>
            <p className="eyebrow">A VISUAL JOURNAL</p>
            <h2 className="section-title">In good <em>company</em></h2>
          </div>
          <a className="text-link section-link" href="https://www.instagram.com/jpjewellersrajkot/" rel="noreferrer" target="_blank">
            <Icon name="instagram" size={17} /> @jpjewellersrajkot <Icon name="arrow-up-right" size={15} />
          </a>
        </div>
        <div className="instagram-grid">
          {instagramImages.map((product, index) => (
            <a
              aria-label={`See the J P Jewellers visual journal, image ${index + 1}`}
              className="instagram-tile"
              href="https://www.instagram.com/jpjewellersrajkot/"
              key={product.id}
              rel="noreferrer"
              target="_blank"
            >
              <BrandedImage alt={product.imageAlt} loading="lazy" src={product.image} />
              <span><Icon name="instagram" /></span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import ProductCard from "../components/ProductCard.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import { parentCategories, products } from "../data/products.js";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=J+P+Jewellers%2C+Palace+Road%2C+opposite+Ashapura+Temple%2C+Prahlad+Plot%2C+Panna+Manek%2C+Rajkot+360001%2C+Gujarat%2C+India";
const whatsappUrl = "https://wa.me/919328591000?text=Hello%2C%20I%20would%20like%20to%20enquire%20with%20J%20P%20Jewellers.";

const findProduct = (categoryId) => products.find((product) => product.categoryId === categoryId);

const featuredProducts = [
  findProduct("men-rings"),
  findProduct("women-earrings"),
  findProduct("women-bridal-jewellery"),
  findProduct("kids-baby-jewellery"),
].filter(Boolean);

const instagramImages = [
  findProduct("women-earrings"),
  findProduct("men-bracelets"),
  findProduct("women-necklaces"),
  findProduct("silver-pooja-gifts"),
].filter(Boolean);

export default function Home({ onAddToCart, onOpenProduct, onToggleWishlist, onSelectCategory, wishlist }) {
  return (
    <div className="home-page">
      <HeroSlider onSelectCategory={onSelectCategory} />

      <section className="section-block collection-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">THE MANY MOODS OF ADORNMENT</p>
            <h2 className="section-title">A celebration of <em>craft & form</em></h2>
          </div>
          <a className="text-link section-link" href="#categories">Explore all categories <Icon name="arrow-right" size={16} /></a>
        </div>
        <div className="collection-grid">
          {parentCategories.map((category, index) => (
            <button
              className={`collection-card collection-card-${index + 1}`}
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              type="button"
            >
              <BrandedImage alt={`${category.name} jewellery`} loading="lazy" src={category.image} />
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

      <section aria-labelledby="visit-banner-title" className="home-visit-banner">
        <div className="visit-banner-inner">
          <p className="eyebrow">VISIT THE SHOWROOM</p>
          <h2 className="section-title" id="visit-banner-title">Come see the <em>jewellery</em> in person.</h2>
          <p className="visit-banner-copy">
            Palace Road, opposite Ashapura Temple, Prahlad Plot / Panna Manek, Rajkot 360001, Gujarat.
            Monday–Saturday, 10:00 AM–7:30 PM. Sunday closed.
          </p>
          <div className="visit-banner-actions">
            <a className="button button-dark" href={mapUrl} rel="noreferrer" target="_blank">Get directions <Icon name="arrow-up-right" size={16} /></a>
            <a className="button button-outline" href={whatsappUrl} rel="noreferrer" target="_blank">WhatsApp us <Icon name="arrow-up-right" size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section-block arrivals-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">A FEATURED SELECTION</p>
            <h2 className="section-title">Treasures for <em>the occasion</em></h2>
          </div>
          <a className="text-link section-link" href="#shop" onClick={() => onSelectCategory("")}>View the full selection <Icon name="arrow-right" size={16} /></a>
        </div>
        <div className="product-grid home-product-grid">
          {featuredProducts.map((product) => (
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
          <BrandedImage alt="A close-up editorial study of gold ring detailing, held between two fingers" loading="lazy" src={products[0].image} />
          <span>A STUDY IN ADORNMENT</span>
        </div>
        <div className="story-preview-copy">
          <p className="eyebrow">ORNAMENT AS MEMORY</p>
          <h2 className="section-title">Worn for a moment.<br />Kept as a <em>memory.</em></h2>
          <p>
            Across generations, Indian adornment has accompanied celebration, self-expression and the rituals that
            bring people together. This visual edit takes inspiration from those occasions and the detail that
            makes each expression personal.
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

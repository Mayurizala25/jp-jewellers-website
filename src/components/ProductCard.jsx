import Icon from "./Icon.jsx";
import BrandedImage from "./BrandedImage.jsx";

export default function ProductCard({
  product,
  isWishlisted,
  onOpen,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <button
          aria-label={`View ${product.name} details`}
          className="product-image-button"
          onClick={() => onOpen(product)}
          type="button"
        >
          <BrandedImage alt={product.imageAlt} className="product-image" loading="lazy" src={product.image} />
        </button>
        <span className="product-tag">THE EDIT</span>
        <button
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={isWishlisted}
          className={`wishlist-button${isWishlisted ? " is-saved" : ""}`}
          onClick={() => onToggleWishlist(product.id)}
          type="button"
        >
          <Icon name="heart" />
        </button>
        <button className="quick-add" onClick={() => onAddToCart(product.id)} type="button">
          <Icon name="bag" size={16} />
          Add to bag
        </button>
      </div>
      <button className="product-info" onClick={() => onOpen(product)} type="button">
        <span className="product-category">{product.category}</span>
        <span className="product-name">{product.name}</span>
        <span className="product-description">{product.description.replace(/^Fictional demo concept:\s*/i, "")}</span>
        <span className="product-enquiry">Illustrative demo price · ₹{product.demoPrice.toLocaleString("en-IN")} <Icon name="arrow-right" size={15} /></span>
      </button>
    </article>
  );
}

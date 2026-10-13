import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import BrandedImage from "./BrandedImage.jsx";

export default function ProductDetailDialog({
  product,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
}) {
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const galleryImages = product?.galleryImages?.length
    ? product.galleryImages
    : product ? [product.image] : [];
  const activeImage = galleryImages[selectedImage] ?? galleryImages[0];

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
  }, [product?.id]);

  useEffect(() => {
    if (!product) return undefined;
    const previouslyFocused = document.activeElement;
    dialogRef.current.querySelector(".dialog-close")?.focus();
    return () => {
      previouslyFocused instanceof HTMLElement && previouslyFocused.focus();
    };
  }, [product, onClose]);

  function handleDialogKeyDown(event) {
    if (event.key === "Escape") {
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const controls = [...dialogRef.current.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || !dialogRef.current.contains(document.activeElement))) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current.contains(document.activeElement))) {
      event.preventDefault();
      first?.focus();
    }
  }

  if (!product) return null;

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section aria-label={`${product.name} details`} aria-modal="true" className="product-dialog" onKeyDown={handleDialogKeyDown} ref={dialogRef} role="dialog">
        <button aria-label="Close product details" className="dialog-close icon-button" onClick={onClose} type="button">
          <Icon name="close" />
        </button>
        <div className="dialog-gallery">
          <div aria-live="polite" className="dialog-image">
            <BrandedImage
              alt={product.imageAlt}
              fallbackLabel="Image unavailable"
              loadingFeedback
              src={activeImage}
            />
          </div>
          {galleryImages.length > 1 && (
            <div aria-label="Product image gallery" className="dialog-thumbnails" role="group">
              {galleryImages.map((image, index) => (
                <button
                  aria-label={`Show product image ${index + 1}`}
                  aria-pressed={selectedImage === index}
                  className={`dialog-thumbnail${selectedImage === index ? " is-active" : ""}`}
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  type="button"
                >
                  <BrandedImage alt="" fallbackLabel="" src={image} />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="dialog-content">
          <p className="eyebrow">{product.category}</p>
          <h2 className="display-heading">{product.name}</h2>
          <p className="dialog-copy">{product.description}</p>
          <dl className="dialog-details">
            <div><dt>Product details</dt><dd>Please contact the showroom to confirm materials and availability.</dd></div>
            <div><dt>Availability</dt><dd>Please contact the showroom to confirm current availability.</dd></div>
            <div className="dialog-pricing">
              <dt>Illustrative price</dt>
              <dd>₹{product.illustrativePrice.toLocaleString("en-IN")}</dd>
            </div>
          </dl>
          <p className="sample-note">Products, descriptions, images and prices are fictional design references, not verified inventory or offers. Contact the showroom for actual product details and current pricing.</p>
          <div className="dialog-actions">
            <div aria-label="Choose quantity" className="quantity-control dialog-quantity">
              <button aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((count) => Math.max(1, count - 1))} type="button"><Icon name="minus" size={14} /></button>
              <span aria-live="polite">{quantity}</span>
              <button aria-label="Increase quantity" onClick={() => setQuantity((count) => count + 1)} type="button"><Icon name="plus" size={14} /></button>
            </div>
            <button className="button button-dark" onClick={() => onAddToCart(product.id, quantity)} type="button">
              <Icon name="bag" /> Add to bag
            </button>
            <button
              aria-pressed={isWishlisted}
              className={`button button-outline${isWishlisted ? " is-saved" : ""}`}
              onClick={() => onToggleWishlist(product.id)}
              type="button"
            >
              <Icon name="heart" /> {isWishlisted ? "Saved" : "Save"}
            </button>
          </div>
          <a
            className="text-link"
            href={`https://wa.me/919328591000?text=${encodeURIComponent(`Hello, I would like to enquire about ${product.name}.`)}`}
            rel="noreferrer"
            target="_blank"
          >
            Enquire on WhatsApp <Icon name="arrow-up-right" size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

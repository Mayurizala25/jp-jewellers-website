import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import BrandedImage from "./BrandedImage.jsx";

export default function ShoppingPanel({
  mode,
  cartItems,
  wishlistItems,
  onClose,
  onSetQuantity,
  onRemoveFromCart,
  onRemoveWishlist,
  onAddToCart,
  onOpenProduct,
  onOrderComplete,
}) {
  const [stage, setStage] = useState("items");
  const [customer, setCustomer] = useState({ fullName: "", mobile: "", address: "" });
  const [formErrors, setFormErrors] = useState({});
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    setStage("items");
    setCustomer({ fullName: "", mobile: "", address: "" });
    setFormErrors({});
    setConfirmedOrder(null);
  }, [mode]);

  useEffect(() => {
    if (!mode) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode, onClose]);

  if (!mode) return null;
  const isCart = mode === "cart";
  const items = isCart ? cartItems : wishlistItems;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const demoSubtotal = cartItems.reduce((sum, { product, quantity }) => sum + product.demoPrice * quantity, 0);
  const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

  function handleCustomerChange(event) {
    const { name, value } = event.target;
    setCustomer((details) => ({ ...details, [name]: value }));
    setFormErrors((errors) => ({ ...errors, [name]: "" }));
  }

  function handleCheckoutSubmit(event) {
    event.preventDefault();
    const errors = {};
    const fullName = customer.fullName.trim();
    const address = customer.address.trim();
    let mobile = customer.mobile.trim().replace(/[\s()-]/g, "");
    if (mobile.startsWith("+91")) mobile = mobile.slice(3);
    else if (mobile.startsWith("91") && mobile.length === 12) mobile = mobile.slice(2);

    if (!fullName) errors.fullName = "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(mobile)) errors.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!address) errors.address = "Please enter your address.";
    if (cartItems.length === 0) errors.cart = "Your bag is empty. Add a piece before confirming.";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const orderId = `JP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const order = {
      id: orderId,
      orderId,
      createdAt: new Date().toISOString(),
      items: cartItems.map(({ product, quantity }) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        quantity,
        unitPrice: product.demoPrice,
        lineTotal: product.demoPrice * quantity,
      })),
      total: demoSubtotal,
    };
    onOrderComplete(order);
    setConfirmedOrder(order);
    setStage("confirmed");
  }

  return (
    <div className="panel-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside aria-label={isCart ? "Shopping bag" : "Wishlist"} aria-modal="true" className="shopping-panel" role="dialog">
        <div className="panel-header">
          <div>
            <p className="eyebrow">{isCart ? "YOUR SELECTION" : "SAVED FOR LATER"}</p>
            <h2>{isCart ? "Shopping bag" : "Your wishlist"}</h2>
          </div>
          <button aria-label="Close panel" className="icon-button" onClick={onClose} type="button">
            <Icon name="close" />
          </button>
        </div>

        {stage === "confirmed" ? (
          <div className="checkout-confirmation">
            <span className="confirmation-mark"><Icon name="check" size={28} /></span>
            <p className="eyebrow">DEMO ORDER CONFIRMED</p>
            <h3>Your demo order is saved.</h3>
            <p className="confirmation-order-id">Order ID · {confirmedOrder?.orderId}</p>
            <div className="checkout-summary confirmation-summary">
              {confirmedOrder?.items.map((item) => (
                <div className="checkout-summary-item" key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                  <span>{formatPrice(item.lineTotal)}</span>
                </div>
              ))}
              <div className="checkout-summary-item"><strong>Illustrative demo total</strong><strong>{formatPrice(confirmedOrder?.total ?? 0)}</strong></div>
            </div>
            <p>This record is stored only in this browser. No real order was placed, payment taken, or delivery arranged.</p>
            <button className="button button-dark" onClick={onClose} type="button">Continue exploring</button>
          </div>
        ) : stage === "checkout" ? (
          <div className="panel-checkout">
            <button className="back-link" onClick={() => setStage("items")} type="button">← Back to your bag</button>
            <p className="eyebrow">FRONTEND DEMONSTRATION</p>
            <h3>Demo checkout</h3>
            <p>Enter your details to preview a demo order. No payment is collected.</p>
            <div className="checkout-summary">
              <span>{totalItems} {totalItems === 1 ? "piece" : "pieces"} selected</span>
              {cartItems.map(({ product, quantity }) => (
                <div className="checkout-summary-item" key={product.id}>
                  <span>{product.name}</span>
                  <span>{quantity} × {formatPrice(product.demoPrice)} = {formatPrice(product.demoPrice * quantity)}</span>
                </div>
              ))}
              <div className="checkout-summary-item"><strong>Illustrative demo total</strong><strong>{formatPrice(demoSubtotal)}</strong></div>
            </div>
            <p className="shipping-note">Shipping, delivery, returns and current availability are not configured for this demo. Please confirm any real terms directly with the showroom.</p>
            <form className="checkout-form" onSubmit={handleCheckoutSubmit} noValidate>
              <label>
                <span>Full Name</span>
                <input
                  autoComplete="name"
                  aria-describedby={formErrors.fullName ? "checkout-name-error" : undefined}
                  aria-invalid={Boolean(formErrors.fullName)}
                  name="fullName"
                  onChange={handleCustomerChange}
                  required
                  value={customer.fullName}
                />
                {formErrors.fullName && <span className="checkout-field-error" id="checkout-name-error">{formErrors.fullName}</span>}
              </label>
              <label>
                <span>Mobile Number</span>
                <input
                  autoComplete="tel"
                  aria-describedby={formErrors.mobile ? "checkout-mobile-error" : undefined}
                  aria-invalid={Boolean(formErrors.mobile)}
                  inputMode="tel"
                  name="mobile"
                  onChange={handleCustomerChange}
                  placeholder="+91"
                  required
                  type="tel"
                  value={customer.mobile}
                />
                {formErrors.mobile && <span className="checkout-field-error" id="checkout-mobile-error">{formErrors.mobile}</span>}
              </label>
              <label>
                <span>Address</span>
                <textarea
                  autoComplete="street-address"
                  aria-describedby={formErrors.address ? "checkout-address-error" : undefined}
                  aria-invalid={Boolean(formErrors.address)}
                  name="address"
                  onChange={handleCustomerChange}
                  required
                  rows="3"
                  value={customer.address}
                />
                {formErrors.address && <span className="checkout-field-error" id="checkout-address-error">{formErrors.address}</span>}
              </label>
              {formErrors.cart && <p className="checkout-field-error" role="alert">{formErrors.cart}</p>}
              <button className="button button-dark full-width" type="submit">Confirm demo order</button>
            </form>
          </div>
        ) : items.length === 0 ? (
          <div className="panel-empty">
            <span className="empty-mark"><Icon name={isCart ? "bag" : "heart"} size={27} /></span>
            <h3>{isCart ? "Your bag is at rest." : "Keep the pieces you love close."}</h3>
            <p>{isCart ? "Explore the edit and add a piece to your selection." : "Save a piece from the collection and it will be waiting here."}</p>
            <button className="button button-outline" onClick={onClose} type="button">Explore the collection</button>
          </div>
        ) : (
          <>
            <div className="panel-items">
              {items.map(({ product, quantity }) => (
                <article className="panel-item" key={product.id}>
                  <button className="panel-item-image" onClick={() => onOpenProduct(product)} type="button">
                    <BrandedImage alt={product.imageAlt} loading="lazy" src={product.image} />
                  </button>
                  <div className="panel-item-info">
                    <span className="product-category">{product.category}</span>
                    <button className="panel-item-name" onClick={() => onOpenProduct(product)} type="button">{product.name}</button>
                    <span className="panel-item-enquiry">{formatPrice(product.demoPrice)} · illustrative demo price</span>
                    {isCart ? (
                      <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
                        <button aria-label="Decrease quantity" onClick={() => onSetQuantity(product.id, quantity - 1)} type="button"><Icon name="minus" size={14} /></button>
                        <span>{quantity}</span>
                        <button aria-label="Increase quantity" onClick={() => onSetQuantity(product.id, quantity + 1)} type="button"><Icon name="plus" size={14} /></button>
                      </div>
                    ) : (
                      <button className="text-link panel-add" onClick={() => onAddToCart(product.id)} type="button">
                        Add to bag <Icon name="arrow-right" size={15} />
                      </button>
                    )}
                  </div>
                  <button
                    aria-label={isCart ? `Remove ${product.name} from bag` : `Remove ${product.name} from wishlist`}
                    className="remove-item"
                    onClick={() => isCart ? onRemoveFromCart(product.id) : onRemoveWishlist(product.id)}
                    type="button"
                  >
                    <Icon name="trash" size={17} />
                  </button>
                </article>
              ))}
            </div>
            {isCart && (
              <div className="panel-bottom">
                <p className="cart-subtotal"><span>Illustrative demo subtotal</span><strong>{formatPrice(demoSubtotal)}</strong></p>
                <p>Demo prices only; no payment is collected. Confirm real product and delivery details with the showroom.</p>
                <button className="button button-dark full-width" onClick={() => setStage("checkout")} type="button">
                  Continue to demo checkout <Icon name="arrow-right" />
                </button>
                <span className="demo-legal">DEMO ONLY · NO REAL ORDER OR PAYMENT</span>
              </div>
            )}
          </>
        )}
      </aside>
    </div>
  );
}

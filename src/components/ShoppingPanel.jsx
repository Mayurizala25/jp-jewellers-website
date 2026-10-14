import { useEffect, useRef, useState } from "react";
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
  onSelectionSaved,
}) {
  const panelRef = useRef(null);
  const [stage, setStage] = useState("items");
  const [savedSelection, setSavedSelection] = useState(null);
  const [customer, setCustomer] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setStage("items");
    setSavedSelection(null);
    setCustomer({ fullName: "", mobile: "", email: "", address: "", city: "", state: "", pinCode: "" });
    setTouched({});
    setSubmitted(false);
  }, [mode]);

  useEffect(() => {
    if (!mode) return undefined;
    const previouslyFocused = document.activeElement;
    panelRef.current.querySelector(".panel-header button")?.focus();
    return () => {
      previouslyFocused instanceof HTMLElement && previouslyFocused.focus();
    };
  }, [mode, onClose]);

  function handlePanelKeyDown(event) {
    if (event.key === "Escape") {
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const controls = [...panelRef.current.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || !panelRef.current.contains(document.activeElement))) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !panelRef.current.contains(document.activeElement))) {
      event.preventDefault();
      first?.focus();
    }
  }

  if (!mode) return null;
  const isCart = mode === "cart";
  const items = isCart ? cartItems : wishlistItems;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const illustrativeSubtotal = cartItems.reduce((sum, { product, quantity }) => sum + product.illustrativePrice * quantity, 0);
  const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

  function handleCheckoutSubmit(event) {
    event.preventDefault();
    if (cartItems.length === 0) return;

    setSubmitted(true);
    setTouched(Object.fromEntries(Object.keys(customer).map((field) => [field, true])));
    const errors = validateCustomer(customer);
    if (Object.keys(errors).length > 0) return;

    const selection = {
      id: `JP-S-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      customer,
      items: cartItems.map(({ product, quantity }) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        quantity,
      })),
      total: illustrativeSubtotal,
      paymentStatus: "Not processed",
    };
    onSelectionSaved(selection);
    setSavedSelection(selection);
    setStage("saved");
  }

  function validateCustomer(values) {
    const errors = {};
    if (!values.fullName.trim()) errors.fullName = "Full name is required.";
    if (!/^[6-9]\d{9}$/.test(values.mobile)) errors.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
    if (!values.address.trim()) errors.address = "Full address is required.";
    if (!values.city.trim()) errors.city = "City is required.";
    if (!values.state.trim()) errors.state = "State is required.";
    if (!/^[1-9]\d{5}$/.test(values.pinCode)) errors.pinCode = "Enter a valid 6-digit PIN code.";
    return errors;
  }

  function updateCustomer(field, value) {
    setCustomer((values) => ({ ...values, [field]: value }));
  }

  const customerErrors = validateCustomer(customer);
  const showError = (field) => (touched[field] || submitted) ? customerErrors[field] : "";
  const fields = [
    ["fullName", "Full name", "text", "Your full name", "fullName"],
    ["mobile", "Mobile number", "tel", "10-digit Indian mobile number", "mobile"],
    ["email", "Email address", "email", "you@example.com", "email"],
    ["city", "City", "text", "Rajkot", "city"],
    ["state", "State", "text", "Gujarat", "state"],
    ["pinCode", "PIN code", "text", "6-digit PIN code", "pinCode"],
  ];

  return (
    <div className="panel-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside aria-label={isCart ? "Shopping bag" : "Wishlist"} aria-modal="true" className="shopping-panel" onKeyDown={handlePanelKeyDown} ref={panelRef} role="dialog">
        <div className="panel-header">
          <div>
            <p className="eyebrow">{isCart ? "YOUR SELECTION" : "SAVED FOR LATER"}</p>
            <h2>{isCart ? "Shopping bag" : "Your wishlist"}</h2>
          </div>
          <button aria-label="Close panel" className="icon-button" onClick={onClose} type="button">
            <Icon name="close" />
          </button>
        </div>

        {stage === "saved" ? (
          <div className="checkout-confirmation">
            <span className="confirmation-mark"><Icon name="check" size={28} /></span>
            <p className="eyebrow">ORDER DETAILS SAVED</p>
            <h3>Your order details are saved.</h3>
            <p className="confirmation-reference">Order reference · {savedSelection?.id}</p>
            <div className="checkout-summary confirmation-summary">
              {savedSelection?.items.map((item) => (
                <div className="checkout-summary-item" key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                </div>
              ))}
            </div>
            <p>Your details and order summary were saved locally on this device. No payment was taken and nothing was sent to the showroom.</p>
            <button className="button button-dark" onClick={onClose} type="button">Continue exploring</button>
          </div>
        ) : stage === "checkout" ? (
          <div className="panel-checkout">
            <button className="back-link" onClick={() => setStage("items")} type="button">← Back to your bag</button>
            <p className="eyebrow">CHECKOUT</p>
            <h3>Complete your details</h3>
            <p>Enter your details to save your order summary on this device. No payment or real order is submitted.</p>
            <form className="checkout-form" onSubmit={handleCheckoutSubmit} noValidate>
              <div className="checkout-fields">
                {fields.map(([field, label, type, placeholder, id]) => {
                  const error = showError(field);
                  return (
                    <label className={`checkout-field checkout-field-${field}`} htmlFor={id} key={field}>
                      <span>{label}<b aria-hidden="true">*</b></span>
                      <input
                        aria-describedby={error ? `${id}-error` : undefined}
                        aria-invalid={Boolean(error)}
                        id={id}
                        inputMode={field === "mobile" || field === "pinCode" ? "numeric" : undefined}
                        maxLength={field === "mobile" ? 10 : field === "pinCode" ? 6 : undefined}
                        onBlur={() => setTouched((values) => ({ ...values, [field]: true }))}
                        onChange={(event) => updateCustomer(field, event.target.value)}
                        placeholder={placeholder}
                        type={type}
                        value={customer[field]}
                      />
                      {error && <small id={`${id}-error`}>{error}</small>}
                    </label>
                  );
                })}
                <label className="checkout-field checkout-field-address" htmlFor="address">
                  <span>Full address<b aria-hidden="true">*</b></span>
                  <textarea
                    aria-describedby={showError("address") ? "address-error" : undefined}
                    aria-invalid={Boolean(showError("address"))}
                    id="address"
                    onBlur={() => setTouched((values) => ({ ...values, address: true }))}
                    onChange={(event) => updateCustomer("address", event.target.value)}
                    placeholder="House / building, street and area"
                    rows="3"
                    value={customer.address}
                  />
                  {showError("address") && <small id="address-error">{showError("address")}</small>}
                </label>
              </div>
              <div className="checkout-summary">
                <span>{totalItems} {totalItems === 1 ? "item" : "items"} in your order</span>
                {cartItems.map(({ product, quantity }) => (
                  <div className="checkout-summary-item" key={product.id}>
                    <span>{product.name} × {quantity}</span>
                    <strong>{formatPrice(product.illustrativePrice * quantity)}</strong>
                  </div>
                ))}
                <div className="checkout-summary-item checkout-total"><strong>Order total</strong><strong>{formatPrice(illustrativeSubtotal)}</strong></div>
              </div>
              <p className="shipping-note">Payment is not processed, and no order or delivery request is sent to the showroom.</p>
              <button className="button button-dark full-width" type="submit">
                Save Order Details
              </button>
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
                    <span className="panel-item-enquiry">Illustrative price · {formatPrice(product.illustrativePrice)}</span>
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
                <p className="cart-subtotal"><span>Illustrative subtotal</span><strong>{formatPrice(illustrativeSubtotal)}</strong></p>
                <p>Products and prices are fictional references, not offers. Confirm actual product details, availability and pricing with the showroom.</p>
                <button className="button button-dark full-width" onClick={() => setStage("checkout")} type="button">
                  Review your selection <Icon name="arrow-right" />
                </button>
                <span className="selection-note">SAVED ON THIS DEVICE · NOT AN ORDER</span>
              </div>
            )}
          </>
        )}
      </aside>
    </div>
  );
}

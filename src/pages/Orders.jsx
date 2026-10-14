import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import PageHeading from "../components/PageHeading.jsx";

export default function Orders({ orders = [], onSelectCategory }) {
  const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;
  const formatValue = (value) => value || "Not available";
  const formatPaymentStatus = (value) => {
    const status = formatValue(value);
    return status.toLowerCase().includes("processed") ? "Not processed" : status;
  };
  const formatDate = (value) => new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="page-container orders-page">
      <PageHeading
        eyebrow="ORDER HISTORY"
        introduction="Review orders saved in this browser. No payment or fulfilment request is sent to the showroom."
        title="My Orders"
      />
      {orders.length === 0 ? (
        <div className="orders-empty">
          <span className="empty-mark"><Icon name="bag" size={27} /></span>
          <h2>No orders saved yet</h2>
          <p>Completed orders will appear here on this device.</p>
          <a className="button button-dark" href="#shop" onClick={() => onSelectCategory("")}>Explore the collection <Icon name="arrow-right" /></a>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <header className="order-header">
                <div>
                  <p className="eyebrow">ORDER HISTORY</p>
                  <h2 className="order-number">{order.id}</h2>
                  <time dateTime={order.createdAt}>Placed on {formatDate(order.createdAt)}</time>
                </div>
                <span className="order-status"><Icon name="check" size={13} /> Order saved</span>
              </header>
              <div className="order-section-label">Items in this order</div>
              <div className="order-items">
                {order.items.map((item) => (
                  <div className="order-line" key={item.id}>
                    <BrandedImage alt="" className="order-item-image" fallbackLabel="" loading="lazy" src={item.image} />
                    <div className="order-item-copy">
                      <strong>{item.name}</strong>
                      <span>{item.category}</span>
                    </div>
                    <div className="order-item-meta">
                      <span>Qty {item.quantity}</span>
                      <span>{formatPrice(item.price)} each</span>
                      <strong>{formatPrice(item.price * item.quantity)}</strong>
                    </div>
                  </div>
                ))}
                <div className="order-total"><strong>Total</strong><strong>{formatPrice(order.total)}</strong></div>
              </div>
              <div className="order-section-label">Customer & delivery</div>
              <dl className="order-details">
                <div><dt>Customer</dt><dd>{formatValue(order.customer.fullName)}</dd></div>
                <div><dt>Mobile</dt><dd>{formatValue(order.customer.mobile)}</dd></div>
                <div><dt>Email</dt><dd>{formatValue(order.customer.email)}</dd></div>
                <div><dt>Address</dt><dd>{[order.customer.address, order.customer.city, order.customer.state, order.customer.pinCode].filter(Boolean).join(", ") || "Not available"}</dd></div>
                <div><dt>Payment status</dt><dd><span className="payment-badge">{formatPaymentStatus(order.paymentStatus)}</span></dd></div>
                <div><dt>Delivery date</dt><dd>{formatValue(order.deliveryDate)}</dd></div>
              </dl>
              <p className="order-disclaimer">This order is saved locally on this device. No payment, delivery, or showroom request has been processed.</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

import Icon from "../components/Icon.jsx";
import PageHeading from "../components/PageHeading.jsx";

export default function Orders({ orders = [], onSelectCategory }) {
  const formatPrice = (amount) => `₹${amount.toLocaleString("en-IN")}`;

  return (
    <div className="page-container orders-page">
      <PageHeading
        eyebrow="BROWSER-SAVED DEMO HISTORY"
        introduction="Only illustrative orders confirmed in this browser are shown here. This is not a real order service."
        title="My Orders"
      />
      {orders.length === 0 ? (
        <div className="orders-empty">
          <span className="empty-mark"><Icon name="bag" size={27} /></span>
          <h2>No demo orders yet</h2>
          <p>Orders you confirm in the frontend demo will appear here on this device.</p>
          <a className="button button-dark" href="#shop" onClick={() => onSelectCategory("")}>Explore the collection <Icon name="arrow-right" /></a>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <header className="order-header">
                <div>
                  <p className="eyebrow">DEMO ORDER · {order.id}</p>
                  <time dateTime={order.createdAt}>{new Date(order.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</time>
                </div>
                <span className="order-status">Browser demo only</span>
              </header>
              <div className="order-items">
                {order.items.map((item) => (
                  <div className="order-line" key={item.id}>
                    <div><strong>{item.name}</strong><span>{item.category} · Qty {item.quantity}</span></div>
                    <span>{formatPrice(item.lineTotal)}</span>
                  </div>
                ))}
              </div>
              <div className="order-total"><span>Illustrative demo total</span><strong>{formatPrice(order.total)}</strong></div>
              <p className="order-disclaimer">No real order, payment, delivery, or tracking is associated with this entry.</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

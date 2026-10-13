import Icon from "../components/Icon.jsx";
import PageHeading from "../components/PageHeading.jsx";

export default function Orders({ orders = [], onSelectCategory }) {
  return (
    <div className="page-container orders-page">
      <PageHeading
        eyebrow="SAVED ON THIS DEVICE"
        introduction="Selections saved in this browser are listed here. They have not been sent to the showroom and are not orders."
        title="My Selections"
      />
      {orders.length === 0 ? (
        <div className="orders-empty">
          <span className="empty-mark"><Icon name="bag" size={27} /></span>
          <h2>No saved selections yet</h2>
          <p>Pieces you save from your bag will appear here on this device.</p>
          <a className="button button-dark" href="#shop" onClick={() => onSelectCategory("")}>Explore the collection <Icon name="arrow-right" /></a>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <header className="order-header">
                <div>
                  <p className="eyebrow">SAVED SELECTION · {order.id}</p>
                  <time dateTime={order.createdAt}>{new Date(order.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</time>
                </div>
                <span className="order-status">Stored on this device</span>
              </header>
              <div className="order-items">
                {order.items.map((item) => (
                  <div className="order-line" key={item.id}>
                    <div><strong>{item.name}</strong><span>{item.category} · Qty {item.quantity}</span></div>
                  </div>
                ))}
              </div>
              <p className="order-disclaimer">This is a saved selection only. It has not been submitted as an order; no payment, delivery or tracking is associated with it.</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

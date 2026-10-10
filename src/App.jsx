import { useCallback, useEffect, useMemo, useState } from "react";
import SiteLayout from "./components/SiteLayout.jsx";
import ProductDetailDialog from "./components/ProductDetailDialog.jsx";
import ShoppingPanel from "./components/ShoppingPanel.jsx";
import About from "./pages/About.jsx";
import Categories from "./pages/Categories.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import Shop from "./pages/Shop.jsx";
import { categories, products } from "./data/products.js";

const pages = {
  home: Home,
  shop: Shop,
  categories: Categories,
  about: About,
  contact: Contact,
  orders: Orders,
};
const pageMetadata = {
  home: {
    title: "J P Jewellers | Rajkot Jewellery Edit",
    description: "Explore a clearly labelled illustrative jewellery concept and find supplied J P Jewellers showroom contact details for Rajkot, India.",
  },
  shop: {
    title: "Shop Jewellery Concepts | J P Jewellers",
    description: "Browse fictional jewellery concepts by category, search and filters. All product details and prices are illustrative demo content.",
  },
  categories: {
    title: "Jewellery Categories | J P Jewellers",
    description: "Explore the illustrative Men, Women, Kids, Gold Jewellery and Silver Jewellery categories and their demo subcategories.",
  },
  about: {
    title: "About This Jewellery Concept | J P Jewellers",
    description: "Learn about this independent J P Jewellers frontend concept and find supplied Rajkot showroom details. Editorial stories are fictional.",
  },
  contact: {
    title: "Contact J P Jewellers | Rajkot Showroom",
    description: "View supplied J P Jewellers Rajkot showroom address, opening hours, phone and social contact links.",
  },
  orders: {
    title: "My Orders | J P Jewellers Demo",
    description: "View illustrative demo orders saved only in this browser. This page does not represent real orders or payments.",
    robots: "noindex, nofollow",
  },
};
const productIds = new Set(products.map((product) => product.id));

function getCurrentPage() {
  const page = window.location.hash.slice(1).split("?")[0];
  return Object.hasOwn(pages, page) ? page : "home";
}

function readStoredValue(key, validate) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? [] : validate(JSON.parse(storedValue), key);
  } catch (error) {
    console.warn(`Could not read saved ${key} data. Starting with an empty selection.`, error);
    return [];
  }
}

function validateCart(value, key) {
  if (!Array.isArray(value)) {
    console.warn(`Saved ${key} data is not a list. Starting with an empty bag.`);
    return [];
  }

  const quantities = new Map();
  let invalidEntries = 0;
  value.forEach((item) => {
    if (
      !item
      || typeof item !== "object"
      || typeof item.id !== "string"
      || !productIds.has(item.id)
      || !Number.isSafeInteger(item.quantity)
      || item.quantity <= 0
    ) {
      invalidEntries += 1;
      return;
    }

    const quantity = (quantities.get(item.id) ?? 0) + item.quantity;
    if (!Number.isSafeInteger(quantity)) {
      invalidEntries += 1;
      return;
    }
    quantities.set(item.id, quantity);
  });

  if (invalidEntries > 0) {
    console.warn(`Ignored ${invalidEntries} invalid or unknown item(s) in saved ${key} data.`);
  }
  return Array.from(quantities, ([id, quantity]) => ({ id, quantity }));
}

function validateWishlist(value, key) {
  if (!Array.isArray(value)) {
    console.warn(`Saved ${key} data is not a list. Starting with an empty wishlist.`);
    return [];
  }

  const validIds = [];
  const seenIds = new Set();
  let invalidEntries = 0;
  value.forEach((id) => {
    if (typeof id !== "string" || !productIds.has(id) || seenIds.has(id)) {
      invalidEntries += 1;
      return;
    }
    seenIds.add(id);
    validIds.push(id);
  });

  if (invalidEntries > 0) {
    console.warn(`Ignored ${invalidEntries} invalid or unknown item(s) in saved ${key} data.`);
  }
  return validIds;
}

function validateOrders(value, key) {
  if (!Array.isArray(value)) {
    console.warn(`Saved ${key} data is not a list. Starting with an empty order history.`);
    return [];
  }

  const validOrders = value.filter((order) => (
    order
    && typeof order.id === "string"
    && typeof order.createdAt === "string"
    && Number.isFinite(Date.parse(order.createdAt))
    && Array.isArray(order.items)
    && order.items.length > 0
    && order.items.every((item) => (
      item
      && productIds.has(item.id)
      && typeof item.name === "string"
      && typeof item.category === "string"
      && Number.isSafeInteger(item.quantity)
      && item.quantity > 0
      && Number.isSafeInteger(item.unitPrice)
      && item.unitPrice >= 0
      && Number.isSafeInteger(item.lineTotal)
      && item.lineTotal === item.unitPrice * item.quantity
    ))
    && Number.isSafeInteger(order.total)
    && order.total === order.items.reduce((sum, item) => sum + item.lineTotal, 0)
  ));

  if (validOrders.length !== value.length) {
    console.warn(`Ignored ${value.length - validOrders.length} invalid entry(s) in saved ${key} data.`);
  }
  return validOrders;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const [cart, setCart] = useState(() => readStoredValue("jp-jewellers-cart", validateCart));
  const [wishlist, setWishlist] = useState(() => readStoredValue("jp-jewellers-wishlist", validateWishlist));
  const [orders, setOrders] = useState(() => readStoredValue("jp-jewellers-orders", validateOrders));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [panelMode, setPanelMode] = useState(null);
  const [shopCategory, setShopCategory] = useState("");

  useEffect(() => {
    const syncPage = () => setCurrentPage(getCurrentPage());
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    const { title, description, robots = "index, follow" } = pageMetadata[currentPage];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="robots"]')?.setAttribute("content", robots);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    try {
      localStorage.setItem("jp-jewellers-cart", JSON.stringify(cart));
    } catch (error) {
      console.warn("Your bag could not be saved in this browser.", error);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("jp-jewellers-wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.warn("Your wishlist could not be saved in this browser.", error);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem("jp-jewellers-orders", JSON.stringify(orders));
    } catch (error) {
      console.warn("Your demo order history could not be saved in this browser.", error);
    }
  }, [orders]);

  const addToCart = useCallback((productId, quantity = 1) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === productId);
      return existing
        ? items.map((item) => item.id === productId ? { ...item, quantity: item.quantity + quantity } : item)
        : [...items, { id: productId, quantity }];
    });
    setPanelMode("cart");
    setSelectedProduct(null);
  }, []);

  const setQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setCart((items) => items.filter((item) => item.id !== productId));
      return;
    }
    setCart((items) => items.map((item) => item.id === productId ? { ...item, quantity } : item));
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((items) => items.filter((item) => item.id !== productId));
  }, []);

  const toggleWishlist = useCallback((productId) => {
    setWishlist((items) => items.includes(productId)
      ? items.filter((id) => id !== productId)
      : [...items, productId]);
  }, []);

  const cartItems = useMemo(
    () => cart.flatMap((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? [{ product, quantity: item.quantity }] : [];
    }),
    [cart],
  );
  const wishlistItems = useMemo(
    () => wishlist.flatMap((id) => {
      const product = products.find((entry) => entry.id === id);
      return product ? [{ product, quantity: 1 }] : [];
    }),
    [wishlist],
  );
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const Page = pages[currentPage];
  const handleOrderComplete = useCallback((order) => {
    setOrders((savedOrders) => [order, ...savedOrders]);
    setCart([]);
  }, []);

  function navigateToCategory(category) {
    const selected = categories.find(({ id, name }) => id === category || name === category);
    setShopCategory(selected?.id ?? category);
    window.location.hash = "shop";
  }

  function navigateToPage(page) {
    if (page === "shop") setShopCategory("");
  }

  return (
    <>
      <SiteLayout
        cartCount={cartCount}
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenPanel={setPanelMode}
        wishlistCount={wishlist.length}
      >
        <Page
          onAddToCart={addToCart}
          onOpenProduct={setSelectedProduct}
          onToggleWishlist={toggleWishlist}
          onSelectCategory={navigateToCategory}
          selectedCategory={shopCategory}
          wishlist={wishlist}
          orders={orders}
        />
      </SiteLayout>
      <ProductDetailDialog
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onAddToCart={addToCart}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={toggleWishlist}
        product={selectedProduct}
      />
      <ShoppingPanel
        cartItems={cartItems}
        mode={panelMode}
        onAddToCart={addToCart}
        onClose={() => setPanelMode(null)}
        onOpenProduct={(product) => {
          setSelectedProduct(product);
          setPanelMode(null);
        }}
        onRemoveFromCart={removeFromCart}
        onOrderComplete={handleOrderComplete}
        onRemoveWishlist={(productId) => setWishlist((items) => items.filter((id) => id !== productId))}
        onSetQuantity={setQuantity}
        wishlistItems={wishlistItems}
      />
    </>
  );
}

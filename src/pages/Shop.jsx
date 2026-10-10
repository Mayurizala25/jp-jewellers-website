import { useEffect, useMemo, useState } from "react";
import Icon from "../components/Icon.jsx";
import PageHeading from "../components/PageHeading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { categories, products } from "../data/products.js";

export default function Shop({
  onAddToCart,
  onOpenProduct,
  onToggleWishlist,
  selectedCategory,
  wishlist,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(selectedCategory);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => setActiveCategory(selectedCategory), [selectedCategory]);

  const visibleProducts = useMemo(() => {
    const searchTerms = searchTerm.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return products
      .filter((product) => !activeCategory
        || product.categoryId === activeCategory
        || product.parentCategoryId === activeCategory)
      .filter((product) => {
        const searchableDetails = [
          product.name,
          product.category,
          product.parentCategory,
          product.description,
          product.material,
          product.occasion,
        ].join(" ").toLowerCase();
        const words = searchableDetails.split(/[^a-z0-9]+/);
        return searchTerms.every((term) => words.some((word) => word.startsWith(term)));
      })
      .sort((first, second) => {
        if (sortBy === "name-asc") return first.name.localeCompare(second.name);
        if (sortBy === "name-desc") return second.name.localeCompare(first.name);
        if (sortBy === "price-asc") return first.demoPrice - second.demoPrice;
        if (sortBy === "price-desc") return second.demoPrice - first.demoPrice;
        return 0;
      });
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <div className="page-container shop-page">
      <PageHeading
        eyebrow="THE J P JEWELLERS EDIT"
        introduction="Explore fictional jewellery concepts with clearly labelled illustrative demo prices."
        title="The collection"
      />

      <div className="shop-tools">
        <label className="shop-search">
          <Icon name="search" />
          <input
            aria-label="Search the collection"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search the collection"
            type="search"
            value={searchTerm}
          />
          {searchTerm && <button aria-label="Clear search" onClick={() => setSearchTerm("")} type="button"><Icon name="close" size={16} /></button>}
        </label>
        <label className="shop-sort">
          <span>Sort by</span>
          <select aria-label="Sort pieces" onChange={(event) => setSortBy(event.target.value)} value={sortBy}>
            <option value="featured">Curated order</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-asc">Demo price: Low to high</option>
            <option value="price-desc">Demo price: High to low</option>
          </select>
        </label>
      </div>

      <div aria-label="Filter by category" className="category-filter">
        <button
          aria-pressed={!activeCategory}
          className={!activeCategory ? "filter-chip active" : "filter-chip"}
          onClick={() => setActiveCategory("")}
          type="button"
        >
          All pieces
        </button>
        {categories.map(({ id, name, type, parentCategory }) => (
          <button
            aria-pressed={activeCategory === id}
            className={activeCategory === id ? "filter-chip active" : "filter-chip"}
            key={id}
            onClick={() => setActiveCategory(activeCategory === id ? "" : id)}
            type="button"
          >
            {type === "subcategory" ? `${parentCategory} · ${name}` : name}
          </button>
        ))}
      </div>

      <div className="results-line">
        <span>{visibleProducts.length} {visibleProducts.length === 1 ? "piece" : "pieces"} to explore</span>
        {(activeCategory || searchTerm) && (
          <button className="clear-filters" onClick={() => { setActiveCategory(""); setSearchTerm(""); }} type="button">
            Clear filters
          </button>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="product-grid shop-product-grid">
          {visibleProducts.map((product) => (
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
      ) : (
        <div className="no-results">
          <Icon name="search" size={26} />
          <h2>No pieces found</h2>
          <p>Try another search or clear your filters to explore the collection.</p>
          <button className="button button-outline" onClick={() => { setActiveCategory(""); setSearchTerm(""); }} type="button">View all pieces</button>
        </div>
      )}
      <p className="catalog-note">Products, material descriptions, imagery and prices are fictional demo content only. Demo prices are illustrative, not real offers; no payment is collected.</p>
    </div>
  );
}

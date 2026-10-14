import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import PageHeading from "../components/PageHeading.jsx";
import { parentCategories } from "../data/products.js";

export default function Categories({ onSelectCategory }) {
  return (
    <div className="page-container categories-page">
      <PageHeading
        eyebrow="FIND YOUR EXPRESSION"
        introduction="From a considered everyday accent to adornment for a once-in-a-lifetime moment, explore the collection by form."
        title="Categories"
      />
      <div className="category-card-grid">
        {parentCategories.map((category, index) => {
          return (
            <button
              className="category-card"
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              type="button"
            >
              <BrandedImage alt={`${category.name} jewellery`} fallbackLabel="" loading="lazy" src={category.image} />
              <span className="category-card-shade" />
              <span className="category-card-number">0{index + 1}</span>
              <span className="category-card-copy">
                <span className="category-card-title">{category.name}</span>
                <span className="category-card-link">Explore collection <Icon name="arrow-right" size={15} /></span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="categories-note">
        <span className="note-rule" />
        <p>Every image is an editorial reference. For current pieces and details, please enquire with our Rajkot showroom.</p>
      </div>
    </div>
  );
}

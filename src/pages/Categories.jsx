import Icon from "../components/Icon.jsx";
import BrandedImage from "../components/BrandedImage.jsx";
import PageHeading from "../components/PageHeading.jsx";
import { parentCategories, subcategories } from "../data/products.js";

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
          const categorySubcategories = subcategories.filter((subcategory) => subcategory.parentCategoryId === category.id);
          return (
            <section className="category-group" key={category.id}>
              <button
                className="category-card"
                onClick={() => onSelectCategory(category.id)}
                type="button"
              >
                <span aria-hidden="true" className="category-mosaic">
                  {categorySubcategories.slice(0, 3).map((subcategory, imageIndex) => (
                    <BrandedImage
                      alt=""
                      className={`category-mosaic-image category-mosaic-image-${imageIndex + 1}`}
                      fallbackLabel=""
                      key={subcategory.id}
                      loading="lazy"
                      src={subcategory.image}
                    />
                  ))}
                </span>
                <span className="category-card-shade" />
                <span className="category-card-number">0{index + 1}</span>
                <span className="category-card-copy">
                  <span className="category-card-title">{category.name}</span>
                  <span className="category-card-link">Explore all <Icon name="arrow-right" size={15} /></span>
                </span>
              </button>
              <div aria-label={`${category.name} subcategories`} className="category-subcategories">
                {categorySubcategories.map((subcategory) => (
                  <button
                    className="subcategory-link"
                    key={subcategory.id}
                    onClick={() => onSelectCategory(subcategory.id)}
                    type="button"
                  >
                    <span className="subcategory-thumb">
                      <BrandedImage alt="" loading="lazy" src={subcategory.image} fallbackLabel="" />
                    </span>
                    <span>{subcategory.name}</span>
                    <Icon name="arrow-right" size={14} />
                  </button>
                ))}
              </div>
            </section>
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

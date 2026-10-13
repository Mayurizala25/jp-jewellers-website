import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import BrandedImage from "./BrandedImage.jsx";

const slides = [
  {
    id: "necklace-design",
    image: "/images/jewellery/slider/necklace-design.jpg",
    alt: "A ruby and diamond statement necklace displayed on dark red velvet",
    eyebrow: "TRADITION MEETS ELEGANCE",
    title: (
      <>The poetry of <em>Indian adornment.</em></>
    ),
    description: "Fictional jewellery designs and illustrative prices. Confirm actual product details with the Rajkot showroom.",
    ctaLabel: "Explore Collection",
    ctaCategory: "",
  },
  {
    id: "gold-chain",
    image: "/images/jewellery/slider/gold-chain.jpg",
    alt: "A gold chain draped over a light grey stone",
    eyebrow: "HERITAGE IN GOLD",
    title: (
      <>Chains that carry <em>heritage.</em></>
    ),
    description: "A fictional gold-chain design reference with a bold, heritage-inspired silhouette.",
    ctaLabel: "Shop Chains",
    ctaCategory: "gold-chains",
  },
  {
    id: "ring",
    image: "/images/jewellery/slider/ring.jpg",
    alt: "Two stacked gold and diamond rings displayed on dark red velvet",
    eyebrow: "DETAIL IN FOCUS",
    title: (
      <>Each piece, <em>a study in detail.</em></>
    ),
    description: "A fictional ring design reference presented as a study in detail.",
    ctaLabel: "Shop Rings",
    ctaCategory: "women-rings",
  },
  {
    id: "ear-ring",
    image: "/images/jewellery/slider/ear-ring.jpg",
    alt: "Gold drop earrings displayed on a dark red velvet box",
    eyebrow: "HANDPICKED FOR YOU",
    title: (
      <>Earrings made for <em>grand occasions.</em></>
    ),
    description: "A fictional earring design reference for festive styling inspiration.",
    ctaLabel: "Shop Earrings",
    ctaCategory: "gold-earrings",
  },
  {
    id: "silver-chain",
    image: "/images/jewellery/silver/silver-bracelet.jpg",
    alt: "A silver-tone bracelet displayed against a dark background",
    eyebrow: "BOLD CRAFTSMANSHIP",
    title: (
      <>Statement pieces, <em>finely detailed.</em></>
    ),
    description: "A fictional silver jewellery design reference with fine visual detailing.",
    ctaLabel: "Explore the Edit",
    ctaCategory: "",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSlider({ onSelectCategory }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((current) => (current + 1) % slides.length);
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section aria-label="Featured jewellery" aria-roledescription="carousel" className="hero-section">
      <div className="hero-slides">
        {slides.map((slide, slideIndex) => (
          <div
            aria-hidden={slideIndex !== index}
            aria-label={`${slideIndex + 1} of ${slides.length}`}
            aria-roledescription="slide"
            className={`hero-slide${slideIndex === index ? " is-active" : ""}`}
            inert={slideIndex !== index}
            key={slide.id}
          >
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-rule" /> {slide.eyebrow}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#shop" onClick={() => onSelectCategory(slide.ctaCategory)}>
                  {slide.ctaLabel} <Icon name="arrow-right" />
                </a>
                <a className="text-link" href="#categories">Discover the edit <Icon name="arrow-right" size={16} /></a>
              </div>
            </div>
            <div className="hero-image-stage">
              <BrandedImage
                alt={slide.alt}
                className="hero-image"
                fetchPriority={slideIndex === 0 ? "high" : undefined}
                loading={slideIndex === 0 ? undefined : "lazy"}
                loadingFeedback={slideIndex === 0}
                src={slide.image}
              />
              <div className="hero-image-shade" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
      <button
        aria-pressed={paused}
        className="hero-pause"
        onClick={() => setPaused((value) => !value)}
        type="button"
      >
        {paused ? "Play slides" : "Pause slides"}
      </button>
    </section>
  );
}

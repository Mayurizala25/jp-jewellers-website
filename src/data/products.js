const image = (path) => path;

export const parentCategories = [
  { id: "men", name: "Men", image: image("/images/jewellery/gold/gold-chain-black-background.jpg") },
  { id: "women", name: "Women", image: image("/images/jewellery/women/gold-necklace-earring-set.jpg") },
  { id: "kids", name: "Kids", image: image("/images/jewellery/kids/baby-hands-gold-rings-bracelet.jpg") },
  { id: "bridal", name: "Bridal", image: image("/images/jewellery/bridal/bridal-polki-necklace-set.jpg") },
  { id: "gold-jewellery", name: "Gold Jewellery", image: image("/images/jewellery/gold/gold-necklace-earring-set.jpg") },
  { id: "silver-jewellery", name: "Silver Jewellery", image: image("/images/jewellery/silver/silver-chain-anklet.jpg") },
];

const subcategoryData = [
  ["men-rings", "Rings", "men", "/images/jewellery/men/gold-ring-closeup.jpg", "Veer Rekha Signet Ring", "A signet-inspired form with a clean profile for festive or everyday styling."],
  ["men-chains", "Chains", "men", "/images/jewellery/gold/gold-chain-black-background.jpg", "Rajputana Link Chain", "A linked-chain design with a bold, heritage-inspired silhouette."],
  ["men-bracelets", "Bracelets", "men", "/images/jewellery/men/gold-bracelet-cuff.jpg", "Aravalli Link Bracelet", "An articulated bracelet design with repeating geometric links."],
  ["men-kada", "Kada", "men", "/images/jewellery/men/gold-curb-bracelet-wet-rock.jpg", "Surya Rekha Kada", "A bold curb-link kada design with a dramatic, sculptural presentation."],
  ["men-pendants", "Pendants", "men", "/images/jewellery/men/gold-pendant-chain.jpg", "Dharohar Motif Pendant", "A pendant design featuring a small, architectural motif for layered styling."],
  ["women-necklaces", "Necklaces", "women", "/images/jewellery/women/gold-necklace-earring-set.jpg", "Chandrika Layered Haar", "A layered necklace design with a moon-inspired central motif for occasion dressing."],
  ["women-earrings", "Earrings", "women", "/images/jewellery/women/gold-hoop-earring.jpg", "Meher Jhumka Drops", "A jhumka-inspired drop silhouette for festive gatherings."],
  ["women-bangles", "Bangles", "women", "/images/jewellery/women/gold-bangles-wrist.jpg", "Gulmohar Kangan Pair", "A pair of floral-line bangles in an occasion-wear style."],
  ["women-rings", "Rings", "women", "/images/jewellery/women/gold-rings-hand.jpg", "Aksara Floral Ring", "A floral-inspired statement ring for celebratory styling."],
  ["women-bridal-jewellery", "Bridal Jewellery", "bridal", "/images/jewellery/bridal/bridal-polki-necklace-set.jpg", "Mehr Mahal Bridal Set", "A layered bridal jewellery composition inspired by traditional ceremonial styling."],
  ["women-mangalsutra", "Mangalsutra", "women", "/images/jewellery/women/gold-mangalsutra-chain.jpg", "Saubhagya Pendant Chain", "A pendant-chain design with a restrained, occasion-ready silhouette."],
  ["bridal-heritage-bangles", "Heritage Bangles", "bridal", "/images/jewellery/gold/gold-bangles-wrist.jpg", "Rajwada Heritage Bangles", "Heritage-inspired bangles for ceremonial styling."],
  ["bridal-necklaces", "Bridal Necklaces", "bridal", "/images/jewellery/bridal/neckless.jpg", "Anaya Bridal Haar", "A layered bridal necklace design with traditional-inspired detailing."],
  ["kids-baby-jewellery", "Baby Jewellery", "kids", "/images/jewellery/kids/baby-hands-gold-rings-bracelet.jpg", "Nanhi Tara Keepsake", "A delicate rings-and-bracelet pairing in a keepsake style."],
  ["kids-earrings", "Kids' Earrings", "kids", "/images/jewellery/kids/gold-hoop-earring.jpg", "Phool Mini Drops", "A floral drop design for a children's edit."],
  ["kids-bracelets", "Bracelets", "kids", "/images/jewellery/kids/gold-bracelet-cuff.jpg", "Chhota Utsav Bracelet", "A bracelet design with playful repeating details for a celebration edit."],
  ["kids-gifts", "Gifts", "kids", "/images/jewellery/kids/jewellery-gift-box.jpg", "Pehli Khushi Gift Set", "A presentation idea for a family milestone or keepsake gift."],
  ["gold-necklaces", "Necklaces", "gold-jewellery", "/images/jewellery/gold/gold-necklace-earring-set.jpg", "Sunehri Bagh Necklace", "A floral necklace design with an ornate, traditional-inspired arrangement."],
  ["gold-chains", "Chains", "gold-jewellery", "/images/jewellery/gold/gold-chain-black-background.jpg", "Kesar Link Chain", "A chain design featuring a rhythmic sequence of rounded links."],
  ["gold-earrings", "Earrings", "gold-jewellery", "/images/jewellery/gold/gold-hoop-earring.jpg", "Padma Petal Earrings", "A petal-form earring design for celebratory and traditional looks."],
  ["gold-bangles", "Bangles", "gold-jewellery", "/images/jewellery/gold/gold-bangles-wrist.jpg", "Mogra Line Bangles", "A pair of bangles with a fine, repeating floral-line motif."],
  ["gold-rings", "Rings", "gold-jewellery", "/images/jewellery/gold/gold-rings-hand.jpg", "Kamal Bloom Ring", "A ring design shaped around a compact lotus-inspired bloom."],
  ["silver-pooja-gifts", "Pooja Gifts", "silver-jewellery", "/images/jewellery/silver/silver-pooja-vessel.jpg", "Shubh Aarambh Gift Keepsake", "A pooja-gift keepsake design with an editorial presentation."],
  ["silver-bracelets", "Bracelets", "silver-jewellery", "/images/jewellery/silver/silver-bracelet.jpg", "Chandi Kada Bracelet", "A pavé-style silver bracelet design with a sculpted, articulated form."],
];

export const subcategories = subcategoryData.map(([id, name, parentCategoryId, photo, productName, description]) => ({
  id,
  name,
  parentCategoryId,
  parentCategory: parentCategories.find((category) => category.id === parentCategoryId).name,
  image: image(photo),
  productName,
  description: `Design reference: ${description}`,
}));

const productImageAlt = {
  "men-rings": "Close-up photograph of a hand holding a textured gold ring.",
  "men-chains": "Close-up photograph of a bold gold curb-link chain on a black background.",
  "men-bracelets": "Close-up photograph of an ornate gold cuff bracelet on a black background.",
  "men-kada": "Close-up photograph of a bold gold curb-link bracelet resting on a wet black rock.",
  "men-pendants": "Close-up photograph of a gold chain on a black background.",
  "women-necklaces": "Editorial photograph of a gold necklace and earring set displayed in a jewellery showcase.",
  "women-earrings": "Close-up photograph of a polished gold hoop earring.",
  "women-bangles": "Photograph of a woman's wrist wearing twisted gold-tone bangles.",
  "women-rings": "Photograph of a hand wearing two gold rings.",
  "women-bridal-jewellery": "Editorial photograph of a layered polki and kundan necklace with matching earrings, displayed on a velvet bust with festive flowers.",
  "women-mangalsutra": "Editorial photograph of a gold necklace and earring set displayed in a jewellery showcase.",
  "bridal-heritage-bangles": "Photograph of a wrist wearing gold-tone bangles.",
  "bridal-necklaces": "Photograph of a traditional-style bridal necklace and earrings displayed on a velvet bust.",
  "kids-baby-jewellery": "Close-up photograph of two babies' hands wearing delicate gold rings and a bracelet.",
  "kids-earrings": "Close-up photograph of a polished gold hoop earring.",
  "kids-bracelets": "Close-up photograph of an ornate gold cuff bracelet on a black background.",
  "kids-gifts": "Close-up photograph of an open jewellery box filled with assorted rings, earrings and necklaces.",
  "gold-necklaces": "Editorial photograph of a gold necklace and earring set displayed in a jewellery showcase.",
  "gold-chains": "Close-up photograph of a bold gold curb-link chain on a black background.",
  "gold-earrings": "Close-up photograph of a polished gold hoop earring.",
  "gold-bangles": "Photograph of a woman's wrist wearing twisted gold-tone bangles.",
  "gold-rings": "Photograph of a hand wearing two gold rings.",
  "silver-pooja-gifts": "Photograph of an ornate silver pooja vessel with embossed deity figures.",
  "silver-bracelets": "Close-up photograph of a pavé-set silver bracelet on a black background.",
};

export const categories = [
  ...parentCategories.map((category) => ({ ...category, type: "parent" })),
  ...subcategories.map((category) => ({ ...category, type: "subcategory" })),
];

const illustrativePrices = {
  "men-rings": 12400,
  "men-chains": 18900,
  "men-bracelets": 15800,
  "men-kada": 22400,
  "men-pendants": 9800,
  "women-necklaces": 36400,
  "women-earrings": 14600,
  "women-bangles": 21600,
  "women-rings": 11200,
  "women-bridal-jewellery": 58400,
  "women-mangalsutra": 17800,
  "bridal-heritage-bangles": 32400,
  "bridal-necklaces": 46800,
  "kids-baby-jewellery": 7200,
  "kids-earrings": 6400,
  "kids-bracelets": 8900,
  "kids-gifts": 13900,
  "gold-necklaces": 42800,
  "gold-chains": 23700,
  "gold-earrings": 16400,
  "gold-bangles": 26900,
  "gold-rings": 13200,
  "silver-pooja-gifts": 11200,
  "silver-bracelets": 9600,
};

const legacyProductIds = {
  "men-rings": "sample-rings",
  "men-chains": "sample-necklaces",
  "men-bracelets": "sample-uncut-diamond",
  "men-kada": "sample-gold",
  "men-pendants": "sample-malas",
  "women-necklaces": "sample-bridal",
  "women-earrings": "sample-earrings",
  "women-bangles": "sample-chokers",
  "kids-gifts": "sample-polki",
};

export const products = subcategories.map((category) => {
  return {
    id: legacyProductIds[category.id] ?? `sample-${category.id}`,
    name: category.productName,
    category: category.name,
    categoryId: category.id,
    parentCategoryId: category.parentCategoryId,
    parentCategory: category.parentCategory,
    image: category.image,
    galleryImages: [category.image],
    imageAlt: productImageAlt[category.id],
    description: category.description,
    illustrativePrice: illustrativePrices[category.id],
  };
});

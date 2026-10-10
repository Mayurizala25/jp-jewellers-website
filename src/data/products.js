const image = (path) => path;

export const parentCategories = [
  { id: "men", name: "Men", image: image("/images/jewellery/men/gold-chain-black-background.jpg") },
  { id: "women", name: "Women", image: image("/images/jewellery/women/gold-necklace-earring-set.jpg") },
  { id: "kids", name: "Kids", image: image("/images/jewellery/kids/pearl-necklace-keepsake.jpg") },
  { id: "gold-jewellery", name: "Gold Jewellery", image: image("/images/jewellery/gold/gold-necklace-earring-set.jpg") },
  { id: "silver-jewellery", name: "Silver Jewellery", image: image("/images/jewellery/silver/silver-chain-anklet.jpg") },
];

const subcategoryData = [
  ["men-rings", "Rings", "men", "/images/jewellery/men/gold-ring-closeup.jpg", "Veer Rekha Signet Ring", "A fictional signet-inspired form with a clean profile for festive or everyday styling."],
  ["men-chains", "Chains", "men", "/images/jewellery/men/gold-chain-black-background.jpg", "Rajputana Link Chain", "A fictional linked-chain design with a bold, heritage-inspired silhouette."],
  ["men-bracelets", "Bracelets", "men", "/images/jewellery/men/gold-bracelet-cuff.jpg", "Aravalli Link Bracelet", "A fictional articulated bracelet concept with repeating geometric links."],
  ["men-kada", "Kada", "men", "/images/jewellery/men/gold-kada-cuff.jpg", "Surya Rekha Kada", "A fictional open-kada concept marked by radiating linework and a sculptural shape."],
  ["men-pendants", "Pendants", "men", "/images/jewellery/men/gold-pendant-chain.jpg", "Dharohar Motif Pendant", "A fictional pendant concept featuring a small, architectural motif for layered styling."],
  ["women-necklaces", "Necklaces", "women", "/images/jewellery/women/gold-necklace-earring-set.jpg", "Chandrika Layered Haar", "A fictional layered necklace concept with a moon-inspired central motif for occasion dressing."],
  ["women-earrings", "Earrings", "women", "/images/jewellery/women/gold-hoop-earring.jpg", "Meher Jhumka Drops", "A fictional jhumka-inspired drop silhouette imagined for festive gatherings."],
  ["women-bangles", "Bangles", "women", "/images/jewellery/women/gold-bangles-wrist.jpg", "Gulmohar Kangan Pair", "A fictional pair of floral-line bangles designed as an occasion-wear visual concept."],
  ["women-rings", "Rings", "women", "/images/jewellery/women/gold-rings-hand.jpg", "Aksara Floral Ring", "A fictional floral-inspired statement ring concept for celebratory styling."],
  ["women-bridal-jewellery", "Bridal Jewellery", "women", "/images/jewellery/bridal/bridal-hands-henna-ring.jpg", "Mehr Mahal Bridal Set", "A fictional layered bridal jewellery composition inspired by traditional ceremonial styling."],
  ["women-mangalsutra", "Mangalsutra", "women", "/images/jewellery/women/gold-mangalsutra-chain.jpg", "Saubhagya Pendant Chain", "A fictional pendant-chain design concept with a restrained, occasion-ready silhouette."],
  ["kids-baby-jewellery", "Baby Jewellery", "kids", "/images/jewellery/kids/pearl-necklace-keepsake.jpg", "Nanhi Tara Keepsake", "A fictional keepsake jewellery concept with a small star-inspired form."],
  ["kids-earrings", "Kids' Earrings", "kids", "/images/jewellery/kids/gold-hoop-earring.jpg", "Phool Mini Drops", "A fictional lightweight-looking floral drop concept sized visually for a children's edit."],
  ["kids-bracelets", "Bracelets", "kids", "/images/jewellery/kids/gold-bracelet-cuff.jpg", "Chhota Utsav Bracelet", "A fictional bracelet concept with playful repeating details for a celebration edit."],
  ["kids-gifts", "Gifts", "kids", "/images/jewellery/kids/jewellery-gift-box.jpg", "Pehli Khushi Gift Set", "A fictional presentation concept imagined for a family milestone or keepsake gift."],
  ["gold-necklaces", "Necklaces", "gold-jewellery", "/images/jewellery/gold/gold-necklace-earring-set.jpg", "Sunehri Bagh Necklace", "A fictional floral necklace concept with an ornate, traditional-inspired arrangement."],
  ["gold-chains", "Chains", "gold-jewellery", "/images/jewellery/gold/gold-chain-black-background.jpg", "Kesar Link Chain", "A fictional chain concept featuring a rhythmic sequence of rounded links."],
  ["gold-earrings", "Earrings", "gold-jewellery", "/images/jewellery/gold/gold-hoop-earring.jpg", "Padma Petal Earrings", "A fictional petal-form earring concept for celebratory and traditional looks."],
  ["gold-bangles", "Bangles", "gold-jewellery", "/images/jewellery/gold/gold-bangles-wrist.jpg", "Mogra Line Bangles", "A fictional pair of bangles with a fine, repeating floral-line motif."],
  ["gold-rings", "Rings", "gold-jewellery", "/images/jewellery/gold/gold-rings-hand.jpg", "Kamal Bloom Ring", "A fictional ring concept shaped around a compact lotus-inspired bloom."],
  ["silver-pooja-gifts", "Pooja Gifts", "silver-jewellery", "/images/jewellery/silver/silver-pooja-vessel.jpg", "Shubh Aarambh Gift Keepsake", "A fictional pooja-gift keepsake concept presented as an editorial sample."],
];

export const subcategories = subcategoryData.map(([id, name, parentCategoryId, photo, productName, description]) => ({
  id,
  name,
  parentCategoryId,
  parentCategory: parentCategories.find((category) => category.id === parentCategoryId).name,
  image: image(photo),
  productName,
  description: `Fictional demo concept: ${description}`,
}));

const productImageAlt = {
  "men-rings": "Close-up photograph of a hand holding a textured gold ring, used as a visual reference for the fictional Veer Rekha Signet Ring concept.",
  "men-chains": "Close-up photograph of a bold gold curb-link chain on a black background, used as a visual reference for the fictional Rajputana Link Chain concept.",
  "men-bracelets": "Close-up photograph of an ornate gold cuff bracelet on a black background, used as a visual reference for the fictional Aravalli Link Bracelet concept.",
  "men-kada": "Close-up photograph of an ornate open gold cuff on a black background, used as a visual reference for the fictional Surya Rekha Kada concept.",
  "men-pendants": "Close-up photograph of a gold chain on a black background, used as a visual reference for the fictional Dharohar Motif Pendant concept.",
  "women-necklaces": "Editorial photograph of a gold necklace and earring set displayed in a jewellery showcase, used as a visual reference for the fictional Chandrika Layered Haar concept.",
  "women-earrings": "Close-up photograph of a polished gold hoop earring, used as a visual reference for the fictional Meher Jhumka Drops concept.",
  "women-bangles": "Photograph of a woman's wrist wearing twisted gold-tone bangles, used as a visual reference for the fictional Gulmohar Kangan Pair concept.",
  "women-rings": "Photograph of a hand wearing two gold rings, used as a visual reference for the fictional Aksara Floral Ring concept.",
  "women-bridal-jewellery": "Editorial photograph of a traditional Indian wedding couple's henna-decorated hands, one wearing a gold ring, used as a visual reference for the fictional Mehr Mahal Bridal Set concept.",
  "women-mangalsutra": "Editorial photograph of a gold necklace and earring set displayed in a jewellery showcase, used as a visual reference for the fictional Saubhagya Pendant Chain concept.",
  "kids-baby-jewellery": "Close-up photograph of a pearl strand necklace on a black background, used as a visual reference for the fictional Nanhi Tara Keepsake concept.",
  "kids-earrings": "Close-up photograph of a polished gold hoop earring, used as a visual reference for the fictional Phool Mini Drops concept.",
  "kids-bracelets": "Close-up photograph of an ornate gold cuff bracelet on a black background, used as a visual reference for the fictional Chhota Utsav Bracelet concept.",
  "kids-gifts": "Close-up photograph of an open jewellery box filled with assorted rings, earrings and necklaces, used as a visual reference for the fictional Pehli Khushi Gift Set concept.",
  "gold-necklaces": "Editorial photograph of a gold necklace and earring set displayed in a jewellery showcase, used as a visual reference for the fictional Sunehri Bagh Necklace concept.",
  "gold-chains": "Close-up photograph of a bold gold curb-link chain on a black background, used as a visual reference for the fictional Kesar Link Chain concept.",
  "gold-earrings": "Close-up photograph of a polished gold hoop earring, used as a visual reference for the fictional Padma Petal Earrings concept.",
  "gold-bangles": "Photograph of a woman's wrist wearing twisted gold-tone bangles, used as a visual reference for the fictional Mogra Line Bangles concept.",
  "gold-rings": "Photograph of a hand wearing two gold rings, used as a visual reference for the fictional Kamal Bloom Ring concept.",
  "silver-pooja-gifts": "Close-up photograph of a polished silver chain on a black background, used as a visual reference for the fictional Shubh Aarambh Gift Keepsake concept.",
};

export const categories = [
  ...parentCategories.map((category) => ({ ...category, type: "parent" })),
  ...subcategories.map((category) => ({ ...category, type: "subcategory" })),
];

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

const productDetails = {
  "men-rings": { material: "Gold-tone metal with a dark enamel-style accent", occasion: "Festive gatherings", demoPrice: 12400 },
  "men-chains": { material: "Gold-tone metal with a brushed finish", occasion: "Celebrations and everyday styling", demoPrice: 18900 },
  "men-bracelets": { material: "Gold-tone metal with geometric detailing", occasion: "Festive and formal wear", demoPrice: 15800 },
  "men-kada": { material: "Gold-tone metal with a sculpted finish", occasion: "Festive occasions", demoPrice: 22400 },
  "men-pendants": { material: "Gold-tone metal with an enamel-style detail", occasion: "Gifting and layered styling", demoPrice: 9800 },
  "women-necklaces": { material: "Gold-tone metal with glass-style accents", occasion: "Wedding celebrations", demoPrice: 36400 },
  "women-earrings": { material: "Gold-tone metal with a pearl-style drop", occasion: "Festive evenings", demoPrice: 14600 },
  "women-bangles": { material: "Gold-tone metal with enamel-style floral details", occasion: "Festive and family celebrations", demoPrice: 21600 },
  "women-rings": { material: "Gold-tone metal with a coloured glass-style accent", occasion: "Celebrations and gifting", demoPrice: 11200 },
  "women-bridal-jewellery": { material: "Gold-tone metal with glass-style accents", occasion: "Bridal-inspired celebrations", demoPrice: 58400 },
  "women-mangalsutra": { material: "Gold-tone metal with black glass-style beads", occasion: "Festive and family occasions", demoPrice: 17800 },
  "kids-baby-jewellery": { material: "Gold-tone metal with a smooth, rounded finish", occasion: "Keepsake gifting", demoPrice: 7200 },
  "kids-earrings": { material: "Gold-tone metal with a coloured enamel-style detail", occasion: "Family celebrations", demoPrice: 6400 },
  "kids-bracelets": { material: "Gold-tone metal with enamel-style accents", occasion: "Celebrations and gifting", demoPrice: 8900 },
  "kids-gifts": { material: "Gold-tone metal with a keepsake-style presentation", occasion: "Family milestones", demoPrice: 13900 },
  "gold-necklaces": { material: "Gold-tone metal with floral glass-style accents", occasion: "Festive and wedding celebrations", demoPrice: 42800 },
  "gold-chains": { material: "Gold-tone metal with rounded link detailing", occasion: "Celebrations and everyday styling", demoPrice: 23700 },
  "gold-earrings": { material: "Gold-tone metal with petal-shaped enamel-style details", occasion: "Festive occasions", demoPrice: 16400 },
  "gold-bangles": { material: "Gold-tone metal with repeating floral details", occasion: "Festive and wedding celebrations", demoPrice: 26900 },
  "gold-rings": { material: "Gold-tone metal with a coloured glass-style accent", occasion: "Celebrations and gifting", demoPrice: 13200 },
  "silver-pooja-gifts": { material: "Silver-tone metal with a keepsake-style motif", occasion: "Pooja and festive gifting", demoPrice: 11200 },
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
    ...productDetails[category.id],
  };
});

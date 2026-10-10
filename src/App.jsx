import { useEffect, useState } from "react";
import SiteLayout from "./components/SiteLayout.jsx";
import About from "./pages/About.jsx";
import Categories from "./pages/Categories.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";

const pages = {
  home: Home,
  shop: Shop,
  categories: Categories,
  about: About,
  contact: Contact,
};

const pageMetadata = {
  home: {
    title: "J P Jewellers | Rajkot",
    description: "Contact or visit the J P Jewellers showroom on Palace Road in Rajkot, India.",
  },
  shop: {
    title: "Jewellery Enquiries | J P Jewellers Rajkot",
    description: "Contact J P Jewellers in Rajkot for current jewellery availability and pricing.",
  },
  categories: {
    title: "Jewellery Information | J P Jewellers Rajkot",
    description: "Visit or contact the J P Jewellers Rajkot showroom for current jewellery information.",
  },
  about: {
    title: "About | J P Jewellers Rajkot",
    description: "Find supplied contact information for the J P Jewellers showroom in Rajkot.",
  },
  contact: {
    title: "Contact J P Jewellers | Rajkot Showroom",
    description: "View the supplied J P Jewellers Rajkot showroom address, opening hours, phone and social links.",
  },
};

function getCurrentPage() {
  const page = window.location.hash.slice(1).split("?")[0];
  return Object.hasOwn(pages, page) ? page : "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);
  const Page = pages[currentPage];

  useEffect(() => {
    const syncPage = () => setCurrentPage(getCurrentPage());
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    const { title, description } = pageMetadata[currentPage];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="robots"]')?.setAttribute("content", "index, follow");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <SiteLayout currentPage={currentPage}>
      <Page />
    </SiteLayout>
  );
}

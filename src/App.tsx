import Navbar from "./components/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import { Casestudy_page } from "./components/casestudy/page";
import Aboutus_page from "./components/aboutus/page";
import Footer from "./components/footer";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ScrollToTop from "./components/scroll";
import ContactSubmissions from "@/components/fetchdata";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  const globalSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Terracode",
    url: "https://www.terracodedev.com",
    logo: "https://www.terracodedev.com/logo.png",
    description:
      "Terracode is a premier software development company specializing in custom solutions for businesses, startups, and enterprises.",
    sameAs: [
      "https://www.linkedin.com/company/terracode",
      "https://twitter.com/terracode",
      "https://github.com/terracode",
    ],
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script type="application/ld+json">
            {JSON.stringify(globalSchemaMarkup)}
          </script>
        </Helmet>

        {!isAdminRoute && <Navbar />}
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus_page />} />
          <Route path="/casestudy" element={<Casestudy_page />} />
          <Route path="/admin" element={<ContactSubmissions />} />
        </Routes>

        {!isAdminRoute && <Footer />}
      </div>
    </HelmetProvider>
  );
}

export default App;
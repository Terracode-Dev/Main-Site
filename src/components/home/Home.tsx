import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Work from "./Work";
import Faq from "./Faq";
import QA from "./QA";
import { Helmet } from "react-helmet-async";
import Aboutus from "./About";

const Home = () => {
  const homeSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Terracode",
    url: "https://www.terracodedev.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.terracodedev.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <div>
      <Helmet>
        <title>Terracode | Propelling Your Vision Forward</title>
        <meta
          name="description"
          content="Terracode is a premier software development company based in Sri Lanka specializing in custom solutions for businesses, startups, and enterprises, We make sure your business is ready for the future with powerful, smart & A.I. solutions"
        />
        <script type="application/ld+json">
          {JSON.stringify(homeSchemaMarkup)}
        </script>
        <meta
          property="og:title"
          content="Terracode | Propelling Your Vision Forward"
        />
        <meta
          property="og:description"
          content="Terracode is a premier software development company based in Sri Lanka specializing in custom solutions for businesses, startups, and enterprises, We make sure your business is ready for the future with powerful, smart & A.I. solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.terracodedev.com" />
        <meta
          property="og:image"
          content="https://www.terracodedev.com/og-image.jpg"
        />
      </Helmet>
      <section id="hero" className="">
        <Hero />
      </section>
      <section id="services" className="">
        <Services />
      </section>
      <section id="about" className="xl:p-20">
        <Aboutus />
      </section>
      <section id="work" className="">
        <Work />
      </section>
      <section id="projects" className="">
        <Projects />
      </section>
      <section id="faqs" className="xl:p-20">
        <Faq />
      </section>
      <section id="qa" className="">
        <QA />
      </section>
    </div>
  );
};

export default Home;
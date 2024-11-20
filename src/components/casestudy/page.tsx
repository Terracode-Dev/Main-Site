import { Hero } from "./hero";
import { Aboutproject } from "./aboutproject";
import { Challange } from "./challange";
import { Solutions } from "./solutions";
import { Process } from "./process";
import { Timeline } from "./timeline";
import Reachout from "./reachout";
import { Helmet } from "react-helmet-async";

export const Casestudy_page = () => {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies - Terracode",
    url: "https://www.terracodedev.com/casestudy",
    description:
      "Explore our successful project implementations and success stories of our clients and what they have archieved with our amazing products.",
  };
  return (
    <div>
      <Helmet>
        <title>Casestudies | Terracode</title>
        <meta
          name="description"
          content="Explore our successful project implementations and success stories of our clients and what they have archieved with our amazing products."
        />
        <script type="application/ld+json">
          {JSON.stringify(caseStudySchema)}
        </script>
        <meta property="og:title" content="Case Studies | Terracode" />
        <meta
          property="og:description"
          content="Explore our successful project implementations and success stories of our clients and what they have archieved with our amazing products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.terracodedev.com/casestudy"
        />
      </Helmet>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Aboutproject />
      </section>
      <section id="about">
        <Challange />
      </section>
      <section id="work">
        <Solutions />
      </section>
      <section id="benitits">
        <Process />
      </section>
      <section id="projects">
        <Timeline />
      </section>
      <section id="faqs">
        <Reachout />
      </section>
    </div>
  );
};

import { useState } from "react";
import Team from "./team";
import Reachout from "./reachout";
import Hero2 from "./hero";
import { Helmet } from "react-helmet-async";

const LoadingAnimation = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <div className="relative">
      <div className="w-16 h-16 border-[3px] border-orange-500 relative animate-[loader_2s_linear_infinite]">
        <div
          className="absolute w-full h-full border-[3px] border-orange-200"
          style={{
            transform: "rotate(45deg)",
            animation: "loaderInner 1s linear infinite",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium text-gray-500">Loading</span>
      </div>
    </div>
    <style>{`
      @keyframes loader {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes loaderInner {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
    `}</style>
  </div>
);

const Aboutus_page = () => {
  const aboutUsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "About US - Terracode",
    url: "https://www.terracodedev.com/aboutus",
    description:
      "Explore our successful project implementations and client success stories.",
  };

  const [isLoading, setIsLoading] = useState(true);

  const handleAllImagesLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>AboutUs | Terracode</title>
        <meta
          name="description"
          content="Explore Terracode's internal Recipe and Our Backbone, The Team that empowers & deliever the miracles for our clients"
        />
        <script type="application/ld+json">
          {JSON.stringify(aboutUsSchema)}
        </script>
        <meta property="og:title" content="About Us | Terracode" />
        <meta
          property="og:description"
          content="Explore Terracode's internal Recipe and Our Backbone, The Team that empowers & deliever the miracles for our clients"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.terracodedev.com/aboutus"
        />
      </Helmet>
      {isLoading && <LoadingAnimation />}
      <div
        className={
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <Hero2 />
        <Team onAllImagesLoaded={handleAllImagesLoaded} />
        <Reachout />
      </div>
    </>
  );
};

export default Aboutus_page;

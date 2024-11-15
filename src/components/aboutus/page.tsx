import { useState} from 'react';
import Team from './team';
import Reachout from './reachout';
import Hero2 from './hero';

const LoadingAnimation = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <div className="relative">
      <div className="w-16 h-16 border-[3px] border-orange-500 relative animate-[loader_2s_linear_infinite]">
        <div className="absolute w-full h-full border-[3px] border-orange-200" 
             style={{ 
               transform: 'rotate(45deg)',
               animation: 'loaderInner 1s linear infinite'
             }}>
        </div>
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
  const [isLoading, setIsLoading] = useState(true);

  const handleAllImagesLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingAnimation />}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Hero2 />
        <Team onAllImagesLoaded={handleAllImagesLoaded} />
        <Reachout />
      </div>
    </>
  );
};

export default Aboutus_page;
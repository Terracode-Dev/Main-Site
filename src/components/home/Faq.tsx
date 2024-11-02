const Faq: React.FC = () => {
  return (
    <div className="flex items-center justify-center  bg-white min-h-screen">
      <div className="w-[896px] text-center px-6 relative">
    
        <h1 className="font-bold leading-tight relative z-0 lg:mb-[-110px] md:mb-[-95px] mb-[-50px]">
          <span className="lg:text-[80px] md:text-[50px] font-bold text-orange-500 text-[40px]">
            Ready to Bring Your <br/> Vision to Life?
          </span>
        </h1>
        
        <div className="relative">
          <img 
            src='/CTA 1.png' 
            alt="Team image" 
          />
        </div>

        <p className="text-[#2A2A2A] lg:text-[28.5px] md:text-[22px] text-[16px] mt-8 leading-normal">
          If you're a business owner, reach out to us today <br/> 
          and discover our limited-time offer tailored for you!
        </p>

        <button className="bg-black text-orange-500  font-medium py-3 px-8 rounded-full mt-6 ">
          Reach Out
        </button>
      </div>
    </div>
  );
};

export default Faq;
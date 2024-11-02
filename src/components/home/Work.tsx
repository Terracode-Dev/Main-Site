import React from 'react';
import { ArrowUpRight, Shield, Users, Settings, Expand, Clock } from 'lucide-react';

const Work = () => {
  return (
    <>
    <div className="flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl">
        Why work with Us?
      </h2>
      
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-start p-6">
          <div className="flex items-center justify-between w-full p-2 border-b border-black">
            <h3 className="text-xl font-semibold">Innovation</h3>
            <ArrowUpRight className="w-6 h-6 text-orange-600" />
          </div>
          <p className="mt-2 text-gray-600">
            We use powerful technologies like <strong>Go</strong>, <strong>Rust</strong>, <strong>AI</strong>, 
            and other industry standards to create cutting-edge solutions that keep your business ahead in the digital world.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start p-6 ">
          <div className="flex items-center justify-between w-full p-2 border-b border-black">
            <h3 className="text-xl font-semibold">Security</h3>
            <Shield className="w-6 h-6 text-orange-600" />
          </div>
          <p className="mt-2 text-gray-600">
            Our solutions, built with <strong>Go</strong>, <strong>Rust</strong>, and other trusted technologies, 
            ensure that your business and data are always secure.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start p-6 ">
          <div className="flex items-center justify-between w-full p-2 border-b border-black">
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <p className="mt-2 text-gray-600">
          We work closely with your team to understand your needs and deliver solutions that align with your goals.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start p-6">
          <div className="flex items-center justify-between w-full p-2 border-b border-black">
            <h3 className="text-xl font-semibold">Customization</h3>
            <Settings className="w-6 h-6 text-orange-600" />
          </div>
          <p className="mt-2 text-gray-600">
          Each project is tailor-made using the best tools and technologies, ensuring the perfect fit for your specific requirements.
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-start p-6">
          <div className="flex items-center justify-between w-full p-2 border-b border-black">
            <h3 className="text-xl font-semibold">Scalability</h3>
            <Expand className="w-6 h-6 text-orange-600" />
          </div>
          <p className="mt-2 text-gray-600">
          Our solutions are designed to grow with your business, handling increased demand as your company expands.
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-start p-6">
          <div className="flex items-center justify-between w-full p-2 border-b border-black">
            <h3 className="text-xl font-semibold">Efficiency</h3>
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <p className="mt-2 text-gray-600">
          We focus on streamlining processes, delivering high-performance solutions that save you time and resources.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <button className="px-8 py-4 mt-8 text-lg text-white transition-colors bg-orange-500 rounded-full hover:bg-orange-700">
        Ready To Collaborate?
      </button>
    </div>
    </>
   
  )
}

export default Work

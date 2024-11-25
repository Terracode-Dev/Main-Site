
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailCopySection from './home/copyemail';

const Footer = () => {

  return (
    <footer className="mt-8 text-white bg-black">
      <div className="px-4 pt-20 mx-auto max-w-7xl sm:px-6 ">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">

          {/* Logo Section */}
          <div className="mb-3 space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold md:text-4xl">
                <span className="text-white">TERRA</span><br/>
                <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">CODE.</span>
              </span>
            </div>
          </div>

          {/* Links Section */}
          <div className="hidden sm:flex mb-4 space-y-4">
            <ul className="space-y-2">
              <li >
                <Link to={"/aboutus"} className="text-gray-300 transition-colors hover:text-orange-400">about us </Link>
              </li>
              <li >
                <Link to={""} className="text-gray-300 transition-colors hover:text-orange-400">case studies </Link>
              </li>
              <li >
                <Link to={"/aboutus"} className="text-gray-300 transition-colors hover:text-orange-400">about us </Link>
              </li>
              <li >
                <Link to={""} className="text-gray-300 transition-colors hover:text-orange-400">case studies </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="space-y-12">
              <div className="w-2/3 text-lg md:text-xl">
              <h3 >Have questions or ready  to collaborate?</h3>
              <p >We're just a <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">message</span> away!</p>
              </div>
              {/* Email copy section */}
              <EmailCopySection />

              {/* Social Links */}
                <div className="flex w-full gap-2 mt-2 sm:justify-start">
                <div className="w-1/3">
                  <a 
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/terracodedev?mibextid=LQQJ4d"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-900 transition-colors bg-white rounded-md hover:text-white hover:bg-gradient-to-r from-[#2162D8] to-[#4BA6F5] ease-in-out duration-300">
                  <Facebook className="w-auto h-6 " />
                  <button className='hidden sm:block'>Facebook</button></a>
                </div>
                <div className="w-1/3">
                <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/terracodedev"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-900 transition-colors bg-white rounded-md hover:text-white hover:bg-gradient-to-tr from-[#FFC23F] via-[#D82DB0] to-[#0140E1] ease-in-out duration-300">
                  <Instagram className="w-auto h-6 " />
                  <button className='hidden sm:block'>Instagram</button>
                </a>
                </div>
                <div className="w-1/3">
                <a
                target="_blank"
                rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/terracodedev/⁣
"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-900 transition-colors bg-white rounded-md hover:text-white hover:bg-gradient-to-r from-[#2162D8] to-[#4BA6F5] ease-in-out duration-300"
                >
                  <Linkedin className="w-auto h-6" />
                  <button className='hidden sm:block'>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Bottom Bar */}
        <div className="p-8 mt-10 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="text-sm text-gray-400">
               TerraCode 2024, All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="transition-colors hover:text-white">
                Privacy policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms & conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

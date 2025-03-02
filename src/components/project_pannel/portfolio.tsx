import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

// Define the type for the project data
type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  projectUrl?: string;
  status?: string;
};

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Business Website Solution",
    description: "A modern website for House Of Vision (Pvt) Ltd.",
    shortDescription: "A modern website for House Of Vision (Pvt) Ltd.",
    imageUrl: "Hov web.png",
    projectUrl: "https://www.houseofvision.lk/",
    status: "done"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A comprehensive and feature-rich inventory management system designed for seamless order processing, automated invoice generation, and in-depth transaction analytics. Equipped with QR code scanning and generation capabilities, it ensures efficient tracking, accuracy, and streamlined operations for optimal business performance.",
    shortDescription: "Inventory management system for House Of Vision (Pvt) Ltd.",
    imageUrl: "IMS.png",
    projectUrl: "#",
    status: "done"
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A powerful and intuitive content management system tailored for cleaning service businesses. Featuring dynamic slider management, seamless order tracking, efficient quotation management, and robust user management, it ensures a streamlined and organized digital experience for both clients and administrators.",
    shortDescription: "Content Management System for a Cleaning Service Provider.",
    imageUrl: "CMS.png",
    projectUrl: "#",
    status: "done"
  },
  {
    id: 4,
    title: "Data Management System",
    description: "A comprehensive and intelligent DMS designed for organizations handling city-wide data.A comprehensive and intelligent data management system designed for organizations handling city-wide data, including services and businesses. Equipped with advanced data storage, insightful analytics, and robust user management, it enables efficient data organization, seamless access to insights, and smarter decision-making.",
    shortDescription: "Data management system",
    imageUrl: "polls.jpg",
    projectUrl: "#",
    status: "done"
  },
  {
    id: 5,
    title: "Ejudicase",
    description: "A powerful cross-platform mobile application designed to help users find and connect with lawyers within a 6km radius of their current location. Featuring seamless registration, advanced search filters, internal messaging, real-time notifications, and more, Ejudicase ensures quick and convenient access to legal professionals anytime, anywhere.",
    shortDescription: "Mobile application for searching for lawyers and attorneys",
    imageUrl: "ejudi.png",
    projectUrl: "#",
    status: "done"
  },
  {
    id: 6,
    title: "Business Website Solution",
    description: "A modern website for Inpro Industries (Pvt) Ltd.",
    shortDescription: "A modern website for Inpro Industries (Pvt) Ltd.",
    imageUrl: "inpro.png",
    projectUrl: "https://www.inproindustries.lk/",
    status: "done"
  },
  {
    id: 7,
    title: "Transit",
    description: "Equipped with advanced algorithms, the system intelligently suggests the best combinations of transport modes to provide users with the most efficient routes. Key features include seamless booking, single-ticket generation for entire journeys (regardless of multiple transport services), analytics and dashboards for transport providers, and integrated payment handling. This project aims to deliver a smarter, more connected travel experience for users while empowering transport providers with actionable insights.",
    shortDescription: "Platform for booking single tickets for entire journeys in Transport Services.",
    imageUrl: "Transit.png",
    projectUrl: "#",
    status: "ongoing"
  }
];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 200 }
  },
  hover: { 
    scale: 1.2,
    rotate: 5,
    color: "#FDA40A",
    transition: { duration: 0.3 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Portfolio: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (projectUrl?: string) => {
    if (projectUrl && projectUrl !== "#") {
      window.open(projectUrl, '_blank');
    }
  };

  const hasValidUrl = (projectUrl?: string): boolean => {
    return Boolean(projectUrl && projectUrl !== "#");
  };

  return (
    <motion.div 
      className="min-h-screen p-4 md:p-8 lg:p-16"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="py-10 text-center pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
        >
          <motion.span variants={textVariants}>
            Empowering Businesses with <br />
          </motion.span>
          <motion.span
            initial={{ backgroundPosition: "100% 0" }}
            animate={{ backgroundPosition: "0% 0" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="animate-gradient bg-gradient-to-r from-[#EF3D00] via-[#FDA40A] to-[#EF3D00] bg-[length:200%] bg-clip-text text-transparent"
          >
            Digital Excellence
          </motion.span>
        </motion.p>
      </motion.section>

      {/* Customer Count Section */}
      <motion.section 
        className="py-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.p 
          className="text-gray-700 text-lg md:text-xl lg:text-2xl mb-6"
          variants={textVariants}
        >
          We have served <b>over 50+ customers</b> during this short period <br />we've grown as a startup & made them achieve success in this digital era & will <br />serve thousands more to prosper.
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-24 pt-6"
          variants={containerVariants}
        >
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
            >
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-[#EF3D00] mb-2" />
            </motion.div>
            <motion.p 
              className="text-sm font-semibold"
              variants={textVariants}
            >
              50+ Customers
            </motion.p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="text-4xl text-[#EF3D00] mb-2" />
            </motion.div>
            <motion.p 
              className="text-sm font-semibold"
              variants={textVariants}
            >
              1 Year Service<br />Excellence
            </motion.p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.div
              variants={iconVariants}
              whileHover="hover"
            >
              <FontAwesomeIcon icon={faStar} className="text-4xl text-[#EF3D00] mb-2" />
            </motion.div>
            <motion.p 
              className="text-sm font-semibold"
              variants={textVariants}
            >
              Excellent Quality
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.p 
          className="text-center text-lg md:text-xl lg:text-2xl mb-6 font-semibold"
          variants={textVariants}
        >
          Some of our finest, well-crafted products, published with full customer consent.
        </motion.p>
        
        {/* Hover Cards Grid */}
        <motion.div 
          className="w-full p-4 md:p-8 rounded-lg"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const isClickable = hasValidUrl(project.projectUrl);
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                  className={`group relative overflow-hidden rounded-lg shadow-lg h-96 ${isClickable ? 'cursor-pointer' : 'cursor-default'} bg-white`}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => isClickable && handleCardClick(project.projectUrl)}
                  role={isClickable ? "link" : "presentation"}
                  aria-label={isClickable ? `View ${project.title} project` : undefined}
                  tabIndex={isClickable ? 0 : -1}
                  onKeyDown={(e) => {
                    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                      handleCardClick(project.projectUrl);
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Static content */}
                  <div className="absolute inset-0 rounded-lg">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover border-8 border-white rounded-lg"
                    />
                    <motion.div 
                      className="p-4 text-center"
                      variants={textVariants}
                    >
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{project.shortDescription}</p>
                      {project.status === "ongoing" && (
                        <p className="text-sm text-orange-500 mt-1">Ongoing</p>
                      )}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#EF3D00] to-[#FDA40A] text-white flex items-center justify-center p-6"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ 
                      y: hoveredCard === project.id ? 0 : "100%",
                      opacity: hoveredCard === project.id ? 0.95 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="text-center">
                      <p className="mb-4">{project.description}</p>
                      {isClickable && (
                        <button
                          className="mt-4 px-6 py-2 bg-white text-[#EF3D00] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation(); 
                            handleCardClick(project.projectUrl);
                          }}
                        >
                          Visit Site
                        </button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Portfolio;
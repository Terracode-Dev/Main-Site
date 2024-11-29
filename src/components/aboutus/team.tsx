import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { db } from "@/firbase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { MoreVertical } from 'lucide-react';

interface webInterface {
  id: number;
  name: string;
  desc: string;
  img: string;
  github: string;
  linkedin: string;
}

interface TeamCardsProps {
  onAllImagesLoaded: () => void;
}

const TeamCards: React.FC<TeamCardsProps> = ({ onAllImagesLoaded }) => {
  const [teamMembers, setTeamMembers] = useState<webInterface[]>([]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const teamCollection = collection(db, "developers");
        const teamQuery = query(teamCollection, orderBy("id", "asc"));
        const teamSnapshot = await getDocs(teamQuery);
        const teamData = teamSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: data.id,
            name: data.name,
            desc: data.desc,
            img: data.img,
            github: data.github,
            linkedin: data.linkedin,
          };
        }) as webInterface[];

        setTeamMembers(teamData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    if (!isLoading && teamMembers.length > 0 && loadedImages.size === teamMembers.length) {
      onAllImagesLoaded();
    }
  }, [loadedImages, isLoading, teamMembers, onAllImagesLoaded]);

  const handleImageLoad = (imgUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imgUrl));
  };

  const SocialIcons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.086-.743.083-.727.083-.727 1.205.084 1.838 1.236 1.838 1.236 1.068 1.833 2.804 1.303 3.492.997.108-.775.418-1.303.762-1.603-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.523 11.523 0 013.003-.404c1.02.004 2.045.137 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.873.119 3.176.768.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.623-5.475 5.921.431.371.823 1.104.823 2.222v3.293c0 .319.218.694.824.576 4.765-1.588 8.2-6.084 8.2-11.387 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  };

  const toggleDropdown = (memberId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenDropdown(openDropdown === memberId ? null : memberId);
  };

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-20 h-20">
          <div className="absolute w-full h-full border-8 border-gray-200 rounded-lg"></div>
          <div className="absolute w-full h-full border-8 border-blue-500 rounded-lg animate-[spin_3s_linear_infinite]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen px-2 mx-auto xl:py-8">
      <motion.div 
        ref={ref}
        className="font-bold text-[32px] md:text-[48px] md:mb-10 ml-5"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.span 
          className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent inline-block"
          variants={textVariants}
        >
          The People
        </motion.span>{" "}
        <motion.span 
          className="inline-block"
          variants={textVariants}
        >
          Who
        </motion.span>{" "}
        <br />
        <motion.span 
          className="inline-block"
          variants={textVariants}
        >
          Make It Happen
        </motion.span>
      </motion.div>

      <div className="flex justify-center">
        <div className="grid xl:grid-cols-5 sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 lg:gap-x-1 xl:gap-x-[3%] p-4 max-w-[1400px] w-full justify-items-center">
          {/* Rest of your existing JSX remains the same */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden transition-all duration-300 rounded-lg group w-full max-w-[280px]
                hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                hover:-translate-y-2 
                hover:scale-105"
            >
              <div className="relative h-full">
                {member.img && (
                  <>
                    <img
                      src={member.img}
                      alt={member.name}
                      className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
                        loadedImages.has(member.img) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(member.img)}
                    />
                    {!loadedImages.has(member.img) && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                  </>
                )}
                
                <div className="relative h-full">
                  <div className="absolute p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md inset-x-2 bottom-2">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col justify-center">
                        <h3 className="font-semibold md:text-[13px] text-[11px] text-gray-900">
                          {member.name}
                        </h3>
                        <p className="md:text-[10px] text-[9px] text-gray-600">
                          {member.desc}
                        </p>
                      </div>

                      <div className="hidden gap-2 md:flex">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            className="text-gray-600 transition-all duration-200 hover:text-blue-600 hover:scale-110 transform"
                            rel="noopener noreferrer"
                          >
                            {SocialIcons.linkedin}
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            className="text-gray-600 transition-all duration-200 hover:text-gray-900 hover:scale-110 transform"
                            rel="noopener noreferrer"
                          >
                            {SocialIcons.github}
                          </a>
                        )}
                      </div>

                      <div className="relative md:hidden">
                        <button 
                          onClick={(e) => toggleDropdown(member.id, e)}
                          className="p-1 text-gray-600 transition-colors duration-200 hover:text-gray-900"
                        >
                          <MoreVertical size={16} />
                        </button>
                        
                        {openDropdown === member.id && (
                          <div className="absolute right-0 z-20 p-2 mb-1 bg-white rounded-lg shadow-lg bottom-full">
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                className="flex items-center gap-2 p-2 text-gray-600 transition-all duration-200 hover:text-blue-600 hover:scale-105"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {SocialIcons.linkedin}
                                <span className="text-xs">LinkedIn</span>
                              </a>
                            )}
                            {member.github && (
                              <a
                                href={member.github}
                                target="_blank"
                                className="flex items-center gap-2 p-2 text-gray-600 transition-all duration-200 hover:text-gray-900 hover:scale-105"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {SocialIcons.github}
                                <span className="text-xs">GitHub</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pb-[100%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
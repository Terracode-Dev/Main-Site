import React, { useEffect, useState } from 'react';
import { db } from "@/firbase";
import { collection, getDocs } from "firebase/firestore";
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

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const teamCollection = collection(db, "developers");
        const teamSnapshot = await getDocs(teamCollection);
        const teamData = teamSnapshot.docs.map(doc => {
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
      <div className='font-bold text-[32px] md:text-[48px] md:mb-10 ml-5'>
        <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>The People</span> <span>Who</span> <br /> <span>Make It Happen</span>
      </div>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-5 sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-5 lg:gap-x-1 xl:gap-x-[3%] p-4 max-w-[1400px] w-full justify-items-center">
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
                        <h3 className="font-semibold md:text-sm text-[9px] text-gray-900">
                          {member.name}
                        </h3>
                        <p className="md:text-[8px] text-[8px] text-gray-600">
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











// import React from 'react';

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   socials: {
//     linkedin?: string;
//     instagram?: string;
//     facebook?: string;
//     twitter?: string;
//   };
// }

// const teamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Jane Smith",
//     role: "Co-founder & CEO",
//     socials: {
//       linkedin: "https://linkedin.com/1",
//       instagram: "https://instagram.com/1",
//       facebook: "https://facebook.com/1",
//       twitter: "https://twitter.com/1"
//     }
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     role: "Co-founder & CEO",
//     socials: {
//       linkedin: "https://linkedin.com/2",
//       twitter: "https://twitter.com/2"
//     }
//   },
//   // Add different social combinations for other team members
//   {
//     id: 3,
//     name: "Jane Smith",
//     role: "Co-founder & CEO",
//     socials: {
//       instagram: "https://instagram.com/3",
//       facebook: "https://facebook.com/3",
//       twitter: "https://twitter.com/3"
//     }
//   },
//   // ... Add remaining team members
// ];

// const TeamCards: React.FC = () => {
//   const SocialIcons = {
//     linkedin: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//       </svg>
//     ),
//     instagram: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
//       </svg>
//     ),
//     facebook: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
//       </svg>
//     ),
//     twitter: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
//       </svg>
//     ),
//   };

//   return (
//     <div className="container px-4 py-8 mx-auto">
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
//         {teamMembers.map((member) => (
//           <div key={member.id} className="relative">
//             {/* Gray background square */}
//             <div className="bg-gray-200 rounded-lg aspect-square"></div>
            
//             {/* Info bar */}
//             <div className="absolute p-3 bg-white rounded-lg shadow-md bottom-4 left-4 right-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="font-medium text-gray-900">{member.name}</h3>
//                   <p className="text-sm text-gray-600">{member.role}</p>
//                 </div>
                
//                 {/* Social Icons */}
//                 <div className="flex gap-2">
//                   {member.socials.linkedin && (
//                     <a href={member.socials.linkedin} className="text-gray-600 hover:text-gray-900">
//                       {SocialIcons.linkedin}
//                     </a>
//                   )}
//                   {member.socials.instagram && (
//                     <a href={member.socials.instagram} className="text-gray-600 hover:text-gray-900">
//                       {SocialIcons.instagram}
//                     </a>
//                   )}
//                   {member.socials.facebook && (
//                     <a href={member.socials.facebook} className="text-gray-600 hover:text-gray-900">
//                       {SocialIcons.facebook}
//                     </a>
//                   )}
//                   {member.socials.twitter && (
//                     <a href={member.socials.twitter} className="text-gray-600 hover:text-gray-900">
//                       {SocialIcons.twitter}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamCards;





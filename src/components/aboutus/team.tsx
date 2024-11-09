import React, { useEffect, useState } from 'react';
import { db} from "@/firbase"; 
import { collection, getDocs } from "firebase/firestore";
import { Instagram } from 'lucide-react';

interface webInterface {
  id: number;          
  name: string;
  desc: string;        
  img: string;
  github: string;         
  linkedin: string;
    // instagram: string;
    // facebook: string;
}

const TeamCards: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<webInterface[]>([]);

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
              // instagram: data.socials?.instagram || "",
              // facebook: data.socials?.facebook || "",

          };
        }) as webInterface[];

        setTeamMembers(teamData);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    console.log(teamMembers);

    fetchTeamMembers();
  }, []);

  const SocialIcons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.357 3.608 1.332.975.976 1.27 2.243 1.332 3.608.058 1.267.07 1.647.07 4.85s-.012 3.583-.07 4.85c-.062 1.366-.357 2.633-1.332 3.608-.976.975-2.243 1.27-3.608 1.332-1.267.058-1.647.07-4.85.07s-3.583-.012-4.85-.07c-1.366-.062-2.633-.357-3.608-1.332-.975-.976-1.27-2.243-1.332-3.608C2.175 15.583 2.163 15.204 2.163 12s.012-3.583.07-4.85c.062-1.366.357-2.633 1.332-3.608.976-.975 2.243-1.27 3.608-1.332 1.267-.058 1.647-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.766.127 4.388.487 3.276 1.6 2.164 2.712 1.804 4.09 1.747 5.376.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.057 1.286.417 2.664 1.529 3.776 1.113 1.112 2.491 1.472 3.776 1.529C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.286-.057 2.664-.417 3.776-1.529 1.112-1.112 1.472-2.491 1.529-3.776.058-1.267.07-1.647.07-4.85s-.012-3.583-.07-4.85c-.057-1.286-.417-2.664-1.529-3.776-1.112-1.112-2.491-1.472-3.776-1.529C15.668.012 15.204 0 12 0z"/>
        <circle cx="12" cy="12" r="3.2"/>
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.891-4.787 4.654-4.787 1.324 0 2.462.099 2.794.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.762v2.314h3.59l-.467 3.622h-3.123v9.294h6.127c.733 0 1.325-.592 1.325-1.325v-21.35c0-.733-.592-1.325-1.325-1.325z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.086-.743.083-.727.083-.727 1.205.084 1.838 1.236 1.838 1.236 1.068 1.833 2.804 1.303 3.492.997.108-.775.418-1.303.762-1.603-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.523 11.523 0 013.003-.404c1.02.004 2.045.137 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.653 1.653.242 2.873.119 3.176.768.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.623-5.475 5.921.431.371.823 1.104.823 2.222v3.293c0 .319.218.694.824.576 4.765-1.588 8.2-6.084 8.2-11.387 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 gap-5 gap-x-1 ml-11">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative">
            {member.img ? (
              <img
                src={member.img}
                alt={member.name}
                className="md:w-60 h-full object-cover rounded-lg"
              />
            ) : (
              <div className="aspect-square bg-gray-200 rounded-lg"></div> 
            )}
            <div className="absolute bottom-3 left-2 right-2 bg-white rounded-lg p-2 shadow-md w-56 h-fit">
              <div className="flex justify-between items-center">
                <div className='flex flex-col justify-center  '>
                  <h3 className="font-semibold text-sm text-gray-900">{member.name}</h3>
                  <p className="text-[10px] text-gray-600">{member.desc}</p>
                </div>
                
                <div className="flex gap-2">
                  {member.linkedin && (
                    <a href={member.linkedin} target='_blank' className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                      {SocialIcons.linkedin}
                    </a>
                  )}
                  {/* {member.socials.instagram && (
                    <a href={member.socials.instagram} className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                      {SocialIcons.instagram}
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a href={member.socials.facebook} className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                      {SocialIcons.facebook}
                    </a>
                  )} */}
                  {member.github && (
                    <a href={member.github} className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                      {SocialIcons.github}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
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
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
//         {teamMembers.map((member) => (
//           <div key={member.id} className="relative">
//             {/* Gray background square */}
//             <div className="aspect-square bg-gray-200 rounded-lg"></div>
            
//             {/* Info bar */}
//             <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-md">
//               <div className="flex justify-between items-center">
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





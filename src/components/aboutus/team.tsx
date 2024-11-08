import React, { useEffect, useState } from "react";
// import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface TeamMember {
  id: string;  // Firestore document ID will be a string
  name: string;
  role: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    Github?: string;
  };
}

const TeamCards: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamCollection = collection(db, "teamMembers");
      const teamSnapshot = await getDocs(teamCollection);
      const teamData = teamSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as TeamMember[];
      setTeamMembers(teamData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative">
            {/* Gray background square */}
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            
            {/* Info bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                
                {/* Social Icons */}
                <div className="flex gap-2">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-gray-600 hover:text-gray-900">
                      {/* LinkedIn icon here */}
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="text-gray-600 hover:text-gray-900">
                      {/* Instagram icon here */}
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a href={member.socials.facebook} className="text-gray-600 hover:text-gray-900">
                      {/* Facebook icon here */}
                    </a>
                  )}
                  {member.socials.Github && (
                    <a href={member.socials.Github} className="text-gray-600 hover:text-gray-900">
                      {/* GitHub icon here */}
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

import React, { useEffect, useState } from "react";
import Story from "./Story";
import { Profiles } from "../data/Profiles";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = Profiles.map((profile) => ({
      ...profile,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 
    border-gray-200 border overflow-x-scroll 
      rounded-sm scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.service}
          img={profile.imgUrl}
          username={profile.service}
        />
      ))}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
      {/* Stories */}
    </div>
  );
};

export default Stories;

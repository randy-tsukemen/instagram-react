import React, { useEffect, useState } from "react";
import faker from "faker";
import { MiniProfiles } from "../data/MiniProfiles";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = MiniProfiles.map((profile) => ({
      ...profile,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((profile) => (
        <div
          className="flex items-center justify-between 
        mt-3"
          key={profile.service}
        >
          <img
            src={profile.imgUrl}
            alt="profile"
            className="w-10 h-10 rounded-full mr-4"
          />
        </div>
      ))}
    </div>
  );
};

export default Suggestions;

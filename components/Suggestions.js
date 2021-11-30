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
          className="flex items-center pt-3 hover:bg-gray-100"
          key={profile.service}
        >
          <img
            src={profile.imgUrl}
            alt="profile"
            className="w-10 h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-sm font-semibold text-gray-700">
              {profile.service}
            </h2>
            <h3 className="text-xs text-gray-400">Work at hololive</h3>
          </div>
          <button className="text-blue-300 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;

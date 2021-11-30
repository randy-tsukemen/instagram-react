import React from "react";

const MiniProfile = () => {
  return (
    <div
      className="flex items-center justify-between
      mt-14 ml-10 hover:bg-gray-100"
    >
      <img
        className="w-16 h-16 object-contain rounded-full border p-[2px]"
        src="https://pbs.twimg.com/media/FE_XhimUUAMsCLN?format=jpg"
        alt="profile"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">rushia</h2>
        <h3 className="text-sm text-gray-400">Welcome to hololive</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
};

export default MiniProfile;

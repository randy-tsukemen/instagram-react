import React from "react";

const MiniProfile = () => {
  return (
    <div
      className="flex items-center justify-between
      mt-14 ml-10 bg-gray-200"
    >
      <img
        className="w-16 h-16 object-contain rounded-full border p-[2px]"
        src="https://pbs.twimg.com/media/FE_XhimUUAMsCLN?format=jpg"
        alt="profile"
      />
      <div>
        <h2>rushia</h2>
        <h3>Welcome to hololive</h3>
      </div>
      <button>Sign out</button>
    </div>
  );
};

export default MiniProfile;

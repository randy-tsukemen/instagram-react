import { signOut, useSession } from "next-auth/react";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div
      className="flex items-center justify-between
      mt-14 ml-10 hover:bg-gray-100"
    >
      <img
        className="w-16 h-16 object-contain rounded-full border p-[2px]"
        // src="https://pbs.twimg.com/media/FE_XhimUUAMsCLN?format=jpg"
        src={session?.user?.image}
        alt="profile"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to hololive</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign out
      </button>
    </div>
  );
};

export default MiniProfile;

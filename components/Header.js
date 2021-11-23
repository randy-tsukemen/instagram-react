import React from "react";
import Image from "next/image";
import {
  searchIcon,
  PlusIcon,
  UserIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MeunIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl">
      {/* left */}
      <div
        className="relative hidden lg:inline-grid w-24
        cursor-pointer"
      >
        <Image
          src="https://pbs.twimg.com/media/FET2YXBagAQy6Ww?format=jpg"
          layout="fill"
          objectFit="contain"
        />
        {/* <Logo src="https://pbs.twimg.com/media/FEfsyfQaAAUgCjY?format=jpg" /> */}
      </div>
      <div
        className="relative w-32 h-32 lg:hidden flex-shrink-0
        cursor-pointer"
      >
        <Image
          src="https://pbs.twimg.com/media/FEfsyfQaAAUgCjY?format=jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Middle */}
      <div className="relative mt-1 p-3 flex items-center">
        <div
          className="absolute inset-y-0 pl-3 flex 
        items-center pointer-events-none"
        >
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="bg-gray-100 w-full pl-10 outline-none
            border-gray-300 rounded-md focus:ring-black
            focus:border-black"
          type="text"
          placeholder="Search"
        />
      </div>
      {/* Right */}
    </div>
  );
};

export default Header;

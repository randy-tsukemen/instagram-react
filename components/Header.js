import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import {
  searchIcon,
  PlusIcon,
  PlusCircleIcon,
  UserIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
  HomeIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const navStyle = `hidden h-6 md:inline-flex
    cursor-pointer hover:scale-125
    transition-all duration-150 ease-out`;

  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div
        className="mx-5 flex justify-between max-w-6xl 
      bg-gray-200 lg:mx-auto"
      >
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
        <div className="max-w-sm bg-red-200">
          <div className="relative bg-red-500 mt-1 p-3 flex items-center">
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
        </div>
        {/* Right */}
        <div
          className="flex items-center justify-end
        space-x-4 min-w-6"
        >
          <HomeIcon className={navStyle} />
          <div className={navStyle.concat(" relative")}>
            <PaperAirplaneIcon className={navStyle.concat(" rotate-45")} />
            <div
              className="absolute -top-1 -right-2 
          bg-red-500 rounded-full flex justify-center
            animate-pulse items-center text-sx w-5 h-5 text-white"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className={navStyle} />
          <UserGroupIcon className={navStyle} />
          <HeartIcon className={navStyle} />
          <MenuIcon className="h-6 w-6 flex-shrink-0 md:hidden cursor-pointer" />

          <img
            src="https://pbs.twimg.com/media/FEump_WVkAM-fmx?format=jpg"
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

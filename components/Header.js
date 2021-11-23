import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <div className="flex justify-between max-w-6xl">
      {/* left */}
      <div
        className="relative hidden lg:inline-grid h-24 w-24
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

      <h1>Hello world</h1>

      {/* Middle */}

      {/* Right */}
    </div>
  );
};

export default Header;

const Logo = tw.img`
  h-24
  w-24
`;

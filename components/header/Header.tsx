import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="mx-auto shadow-lg rounded-lg">
      <div className="px-[20px] md:px-[32px] py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-lg sm:text-2xl">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src={"/logo.svg"}
              alt="logo"
              height={32}
              width={32}
              className="w-8 h-8 mr-2"
            />
            Guff-Suff
          </Link>
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name=""
            id=""
            placeholder="search friend"
            className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
          />
        </div>
        <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          RA
        </div>
      </div>
    </div>
  );
};

export default Header;

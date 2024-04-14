import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserSearch } from "./UserSearch";
import LogOut from "./LogOut";

const Header = () => {
  return (
    <div className="mx-auto shadow-lg rounded-lg">
      <div className="px-[20px] md:px-[32px] py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-lg sm:text-2xl">
          <Link
            href="/"
            className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
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
          <UserSearch />
        </div>
        <LogOut />
      </div>
    </div>
  );
};

export default Header;

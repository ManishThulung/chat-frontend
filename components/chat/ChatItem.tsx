import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChatItem = () => {
  return (
    <Link
      href="/chat/hii"
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <Image
        src={"/logo.svg"}
        alt="logo"
        height={32}
        width={32}
        className="w-8 h-8 mr-2"
      />
      <span className="ms-3">Ram</span>
    </Link>
  );
};

export default ChatItem;
